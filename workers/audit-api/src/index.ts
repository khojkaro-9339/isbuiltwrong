export interface Env {
  SUPABASE_URL: string;
  SUPABASE_SERVICE_KEY: string;
}

import { runPageSpeedCheck } from './checks/pagespeed';
import { runHtmlAudit } from './checks/html-audit';
import { getCategoryInsights } from './checks/category-insights';
import { calculateScores } from './scoring';
import { saveReport } from './supabase';

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: corsHeaders(),
      });
    }

    if (request.method !== 'POST') {
      return jsonResponse({ error: 'Method not allowed' }, 405);
    }

    try {
      const body = await request.json() as {
        url: string;
        business_name: string;
        city?: string;
        category?: string;
        locale?: string;
      };

      const { url, business_name, city, category, locale = 'en' } = body;

      if (!url || !business_name) {
        return jsonResponse({ error: 'url and business_name are required' }, 400);
      }

      const normalizedUrl = url.startsWith('http') ? url : `https://${url}`;

      const [pageSpeedResult, htmlAuditResult] = await Promise.all([
        runPageSpeedCheck(normalizedUrl),
        runHtmlAudit(normalizedUrl),
      ]);

      const categoryInsights = category
        ? getCategoryInsights(category, city || '', locale)
        : null;

      const scores = calculateScores(pageSpeedResult, htmlAuditResult);

      const reportData = {
        performance: {
          score: scores.performance,
          issues: pageSpeedResult.issues,
        },
        seo: {
          score: scores.seo,
          issues: htmlAuditResult.seoIssues,
        },
        trust: {
          score: scores.trust,
          issues: htmlAuditResult.trustIssues,
        },
        mobile: {
          score: scores.mobile,
          issues: htmlAuditResult.mobileIssues,
        },
        leadCapture: {
          score: scores.leadCapture,
          issues: htmlAuditResult.leadCaptureIssues,
        },
        categoryInsights,
      };

      const overallScore = scores.overall;

      const reportId = await saveReport(env.SUPABASE_URL, env.SUPABASE_SERVICE_KEY, {
        business_name,
        website_url: normalizedUrl,
        city: city || null,
        category: category || null,
        locale,
        overall_score: overallScore,
        report_data: reportData,
      });

      return jsonResponse({
        id: reportId,
        business_name,
        overall_score: overallScore,
        scores,
        preview_issues: getTopIssues(reportData, 3, locale),
        total_issues: countTotalIssues(reportData),
        locale,
      });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Internal server error';
      return jsonResponse({ error: message }, 500);
    }
  },
} satisfies ExportedHandler<Env>;

function getTopIssues(reportData: Record<string, any>, count: number, locale: string) {
  const allIssues: Array<{ key: string; severity: string; text: string; category: string }> = [];

  const categories = ['performance', 'seo', 'trust', 'mobile', 'leadCapture'] as const;
  for (const cat of categories) {
    const section = reportData[cat];
    if (section?.issues) {
      for (const issue of section.issues) {
        allIssues.push({
          key: issue.key,
          severity: issue.severity,
          text: typeof issue.text === 'object' ? (issue.text[locale] || issue.text.en) : issue.text,
          category: cat,
        });
      }
    }
  }

  allIssues.sort((a, b) => {
    const order = { critical: 0, high: 1, medium: 2, low: 3 };
    return (order[a.severity as keyof typeof order] ?? 3) - (order[b.severity as keyof typeof order] ?? 3);
  });

  return allIssues.slice(0, count);
}

function countTotalIssues(reportData: Record<string, any>): number {
  let total = 0;
  const categories = ['performance', 'seo', 'trust', 'mobile', 'leadCapture'];
  for (const cat of categories) {
    total += reportData[cat]?.issues?.length || 0;
  }
  return total;
}

function corsHeaders(): HeadersInit {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}

function jsonResponse(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
      ...corsHeaders(),
    },
  });
}

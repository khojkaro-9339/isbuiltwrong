import { issueTexts, type LocalizedText } from '../i18n';

export interface PageSpeedResult {
  performanceScore: number;
  seoScore: number;
  accessibilityScore: number;
  bestPracticesScore: number;
  fcp: number; // milliseconds
  lcp: number; // milliseconds
  issues: Array<{
    key: string;
    severity: string;
    text: LocalizedText;
  }>;
}

const PSI_API = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed';

export async function runPageSpeedCheck(url: string): Promise<PageSpeedResult> {
  const apiUrl = `${PSI_API}?url=${encodeURIComponent(url)}&strategy=mobile&category=performance&category=seo&category=accessibility&category=best-practices`;

  try {
    const response = await fetch(apiUrl, {
      headers: { 'Accept': 'application/json' },
    });

    if (!response.ok) {
      return fallbackResult();
    }

    const data = await response.json() as any;
    const lighthouseResult = data.lighthouseResult;

    if (!lighthouseResult) {
      return fallbackResult();
    }

    const categories = lighthouseResult.categories || {};
    const audits = lighthouseResult.audits || {};

    const performanceScore = Math.round((categories.performance?.score || 0) * 100);
    const seoScore = Math.round((categories.seo?.score || 0) * 100);
    const accessibilityScore = Math.round((categories.accessibility?.score || 0) * 100);
    const bestPracticesScore = Math.round((categories['best-practices']?.score || 0) * 100);

    const fcpMs = audits['first-contentful-paint']?.numericValue || 0;
    const lcpMs = audits['largest-contentful-paint']?.numericValue || 0;

    const issues: PageSpeedResult['issues'] = [];

    if (fcpMs > 3000) {
      issues.push({ key: 'slow_page_load', severity: 'critical', text: issueTexts.slow_page_load });
    } else if (fcpMs > 1800) {
      issues.push({ key: 'slow_page_load', severity: 'high', text: issueTexts.slow_page_load });
    }

    if (lcpMs > 4000) {
      issues.push({ key: 'poor_lcp', severity: 'critical', text: issueTexts.poor_lcp });
    } else if (lcpMs > 2500) {
      issues.push({ key: 'poor_lcp', severity: 'high', text: issueTexts.poor_lcp });
    }

    if (accessibilityScore < 50) {
      issues.push({ key: 'poor_accessibility', severity: 'high', text: issueTexts.poor_accessibility });
    } else if (accessibilityScore < 80) {
      issues.push({ key: 'poor_accessibility', severity: 'medium', text: issueTexts.poor_accessibility });
    }

    return {
      performanceScore,
      seoScore,
      accessibilityScore,
      bestPracticesScore,
      fcp: Math.round(fcpMs),
      lcp: Math.round(lcpMs),
      issues,
    };
  } catch {
    return fallbackResult();
  }
}

function fallbackResult(): PageSpeedResult {
  return {
    performanceScore: 0,
    seoScore: 0,
    accessibilityScore: 0,
    bestPracticesScore: 0,
    fcp: 0,
    lcp: 0,
    issues: [{ key: 'slow_page_load', severity: 'medium', text: issueTexts.slow_page_load }],
  };
}

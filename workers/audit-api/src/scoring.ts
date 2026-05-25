import type { PageSpeedResult } from './checks/pagespeed';
import type { HtmlAuditResult } from './checks/html-audit';

export interface Scores {
  overall: number;
  performance: number;
  seo: number;
  trust: number;
  mobile: number;
  leadCapture: number;
}

const WEIGHTS = {
  performance: 0.20,
  seo: 0.25,
  trust: 0.20,
  mobile: 0.15,
  leadCapture: 0.20,
};

export function calculateScores(
  pageSpeed: PageSpeedResult,
  htmlAudit: HtmlAuditResult
): Scores {
  const performance = calculatePerformanceScore(pageSpeed);
  const seo = calculateSeoScore(pageSpeed, htmlAudit);
  const trust = calculateTrustScore(htmlAudit);
  const mobile = calculateMobileScore(pageSpeed, htmlAudit);
  const leadCapture = calculateLeadCaptureScore(htmlAudit);

  const overall = Math.round(
    performance * WEIGHTS.performance +
    seo * WEIGHTS.seo +
    trust * WEIGHTS.trust +
    mobile * WEIGHTS.mobile +
    leadCapture * WEIGHTS.leadCapture
  );

  return { overall, performance, seo, trust, mobile, leadCapture };
}

function calculatePerformanceScore(pageSpeed: PageSpeedResult): number {
  if (pageSpeed.performanceScore > 0) {
    return pageSpeed.performanceScore;
  }

  let score = 50;
  if (pageSpeed.fcp > 3000) score -= 20;
  else if (pageSpeed.fcp > 1800) score -= 10;

  if (pageSpeed.lcp > 4000) score -= 20;
  else if (pageSpeed.lcp > 2500) score -= 10;

  return Math.max(0, Math.min(100, score));
}

function calculateSeoScore(pageSpeed: PageSpeedResult, htmlAudit: HtmlAuditResult): number {
  let score = pageSpeed.seoScore > 0 ? pageSpeed.seoScore : 50;
  const meta = htmlAudit.meta;

  // Adjust based on HTML audit findings
  const penalties: Array<{ condition: boolean; penalty: number }> = [
    { condition: !meta.hasTitle, penalty: 20 },
    { condition: meta.hasTitle && (meta.titleLength < 30 || meta.titleLength > 65), penalty: 5 },
    { condition: !meta.hasMetaDescription, penalty: 15 },
    { condition: !meta.hasStructuredData, penalty: 10 },
    { condition: meta.imagesWithoutAlt > 0, penalty: 5 },
  ];

  for (const p of penalties) {
    if (p.condition) score -= p.penalty;
  }

  return Math.max(0, Math.min(100, score));
}

function calculateTrustScore(htmlAudit: HtmlAuditResult): number {
  let score = 100;
  const meta = htmlAudit.meta;

  if (!meta.isHttps) score -= 30;
  if (!meta.hasSocialLinks) score -= 20;
  if (!meta.hasGoogleMaps) score -= 20;
  if (!meta.hasStructuredData) score -= 15;
  if (!meta.hasPhone) score -= 15;

  return Math.max(0, Math.min(100, score));
}

function calculateMobileScore(pageSpeed: PageSpeedResult, htmlAudit: HtmlAuditResult): number {
  let score = pageSpeed.performanceScore > 0 ? pageSpeed.performanceScore : 60;

  if (!htmlAudit.meta.hasViewport) score -= 40;

  if (pageSpeed.fcp > 3000) score -= 15;
  else if (pageSpeed.fcp > 1800) score -= 5;

  return Math.max(0, Math.min(100, score));
}

function calculateLeadCaptureScore(htmlAudit: HtmlAuditResult): number {
  let score = 100;
  const meta = htmlAudit.meta;

  if (!meta.hasPhone) score -= 30;
  if (!meta.hasWhatsApp) score -= 25;
  if (!meta.hasCtaAboveFold) score -= 25;
  if (!meta.hasSocialLinks) score -= 10;
  if (!meta.hasGoogleMaps) score -= 10;

  return Math.max(0, Math.min(100, score));
}

import { issueTexts, type LocalizedText } from '../i18n';

export interface HtmlAuditResult {
  seoIssues: Array<{ key: string; severity: string; text: LocalizedText }>;
  trustIssues: Array<{ key: string; severity: string; text: LocalizedText }>;
  mobileIssues: Array<{ key: string; severity: string; text: LocalizedText }>;
  leadCaptureIssues: Array<{ key: string; severity: string; text: LocalizedText }>;
  meta: {
    hasTitle: boolean;
    titleLength: number;
    hasMetaDescription: boolean;
    hasViewport: boolean;
    hasStructuredData: boolean;
    hasPhone: boolean;
    hasWhatsApp: boolean;
    hasSocialLinks: boolean;
    hasGoogleMaps: boolean;
    imagesWithoutAlt: number;
    totalImages: number;
    isHttps: boolean;
    hasHreflang: boolean;
    hasCtaAboveFold: boolean;
  };
}

export async function runHtmlAudit(url: string): Promise<HtmlAuditResult> {
  let html = '';

  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Linux; Android 10) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36',
        'Accept': 'text/html',
      },
      redirect: 'follow',
    });
    html = await response.text();
  } catch {
    return emptyResult(url);
  }

  const lower = html.toLowerCase();

  const hasTitle = /<title[^>]*>(.+?)<\/title>/i.test(html);
  const titleMatch = html.match(/<title[^>]*>(.+?)<\/title>/i);
  const titleLength = titleMatch ? titleMatch[1].trim().length : 0;

  const hasMetaDescription = /meta\s+[^>]*name\s*=\s*["']description["']/i.test(html);
  const hasViewport = /meta\s+[^>]*name\s*=\s*["']viewport["']/i.test(html);
  const hasStructuredData = /application\/ld\+json/i.test(html);

  // Phone detection: look for tel: links or common phone patterns
  const hasPhone = /href\s*=\s*["']tel:/i.test(html) ||
    /(\+91[\s-]?\d{5}[\s-]?\d{5}|\d{10}|\d{3}[-.\s]\d{3}[-.\s]\d{4})/.test(html);

  const hasWhatsApp = /wa\.me|whatsapp\.com|api\.whatsapp/i.test(html) ||
    /whatsapp/i.test(html);

  const hasSocialLinks = /facebook\.com|fb\.com|instagram\.com|linkedin\.com|twitter\.com|x\.com/i.test(html);

  const hasGoogleMaps = /maps\.google|google\.com\/maps|maps\.googleapis/i.test(html);

  // Count images without alt
  const imgTags = html.match(/<img[^>]*>/gi) || [];
  const totalImages = imgTags.length;
  const imagesWithoutAlt = imgTags.filter(img => {
    const hasAlt = /alt\s*=\s*["'][^"']+["']/i.test(img);
    return !hasAlt;
  }).length;

  const isHttps = url.startsWith('https://');

  const hasHreflang = /hreflang/i.test(html);

  // CTA above fold: check first 2000 chars for button/link with action words
  const aboveFold = html.substring(0, 3000).toLowerCase();
  const hasCtaAboveFold = /(call|contact|book|order|enquir|get.quote|free|whatsapp|schedule)/i.test(aboveFold) &&
    /(btn|button|cta|<a\s)/i.test(aboveFold);

  const meta = {
    hasTitle, titleLength, hasMetaDescription, hasViewport,
    hasStructuredData, hasPhone, hasWhatsApp, hasSocialLinks,
    hasGoogleMaps, imagesWithoutAlt, totalImages, isHttps,
    hasHreflang, hasCtaAboveFold,
  };

  const seoIssues: HtmlAuditResult['seoIssues'] = [];
  const trustIssues: HtmlAuditResult['trustIssues'] = [];
  const mobileIssues: HtmlAuditResult['mobileIssues'] = [];
  const leadCaptureIssues: HtmlAuditResult['leadCaptureIssues'] = [];

  // SEO checks
  if (!hasTitle) {
    seoIssues.push({ key: 'missing_title', severity: 'critical', text: issueTexts.missing_title });
  } else if (titleLength < 30 || titleLength > 65) {
    seoIssues.push({ key: 'poor_title_length', severity: 'medium', text: issueTexts.poor_title_length });
  }

  if (!hasMetaDescription) {
    seoIssues.push({ key: 'missing_meta_description', severity: 'high', text: issueTexts.missing_meta_description });
  }

  if (!hasStructuredData) {
    seoIssues.push({ key: 'no_structured_data', severity: 'medium', text: issueTexts.no_structured_data });
  }

  if (!hasHreflang) {
    seoIssues.push({ key: 'no_hreflang', severity: 'low', text: issueTexts.no_hreflang });
  }

  if (imagesWithoutAlt > 0 && totalImages > 0) {
    seoIssues.push({ key: 'images_no_alt', severity: 'medium', text: issueTexts.images_no_alt });
  }

  // Trust checks
  if (!hasSocialLinks) {
    trustIssues.push({ key: 'no_social_links', severity: 'medium', text: issueTexts.no_social_links });
  }

  if (!hasGoogleMaps) {
    trustIssues.push({ key: 'no_google_maps', severity: 'medium', text: issueTexts.no_google_maps });
  }

  if (!isHttps) {
    trustIssues.push({ key: 'no_ssl', severity: 'critical', text: issueTexts.no_ssl });
  }

  // Mobile checks
  if (!hasViewport) {
    mobileIssues.push({ key: 'missing_viewport', severity: 'critical', text: issueTexts.missing_viewport });
  }

  // Lead capture checks
  if (!hasPhone) {
    leadCaptureIssues.push({ key: 'no_phone_visible', severity: 'high', text: issueTexts.no_phone_visible });
  }

  if (!hasWhatsApp) {
    leadCaptureIssues.push({ key: 'no_whatsapp_link', severity: 'high', text: issueTexts.no_whatsapp_link });
  }

  if (!hasCtaAboveFold) {
    leadCaptureIssues.push({ key: 'no_cta_above_fold', severity: 'high', text: issueTexts.no_cta_above_fold });
  }

  return { seoIssues, trustIssues, mobileIssues, leadCaptureIssues, meta };
}

function emptyResult(url: string): HtmlAuditResult {
  return {
    seoIssues: [{ key: 'missing_title', severity: 'high', text: issueTexts.missing_title }],
    trustIssues: [],
    mobileIssues: [],
    leadCaptureIssues: [],
    meta: {
      hasTitle: false, titleLength: 0, hasMetaDescription: false,
      hasViewport: false, hasStructuredData: false, hasPhone: false,
      hasWhatsApp: false, hasSocialLinks: false, hasGoogleMaps: false,
      imagesWithoutAlt: 0, totalImages: 0, isHttps: url.startsWith('https://'),
      hasHreflang: false, hasCtaAboveFold: false,
    },
  };
}

import { createClient } from '@supabase/supabase-js';

export interface AuditReport {
  id?: string;
  business_name: string;
  website_url: string;
  city: string | null;
  category: string | null;
  locale: string;
  overall_score: number;
  report_data: Record<string, unknown>;
  created_at?: string;
  whatsapp_claimed?: boolean;
}

export function getSupabase(url: string, serviceKey: string) {
  return createClient(url, serviceKey, {
    auth: { persistSession: false },
  });
}

export async function saveReport(
  supabaseUrl: string,
  serviceKey: string,
  report: Omit<AuditReport, 'id' | 'created_at' | 'whatsapp_claimed'>
): Promise<string> {
  const supabase = getSupabase(supabaseUrl, serviceKey);
  const { data, error } = await supabase
    .from('audit_reports')
    .insert(report)
    .select('id')
    .single();

  if (error) throw new Error(`Supabase insert failed: ${error.message}`);
  return data.id;
}

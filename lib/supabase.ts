import { createBrowserClient } from '@supabase/ssr';

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}

// Types for our database
export interface Profile {
  id: string;
  first_name: string | null;
  last_name: string | null;
  email: string | null;
  business_name: string | null;
  entity_type: string | null;
  airtable_base_id: string | null;
  airtable_api_key: string | null;
  onboarding_completed: boolean;
  created_at: string;
  updated_at: string;
}

export interface PlaidItem {
  id: string;
  user_id: string;
  access_token: string;
  item_id: string;
  institution_name: string | null;
  created_at: string;
}

export type EntityType = 'LLC' | 'S-Corp' | 'C-Corp' | 'Sole Prop' | 'Partnership';

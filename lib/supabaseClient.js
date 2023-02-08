import { createClient } from '@supabase/supabase-js';

export default async function supabaseClient(supabaseAccessToken) {
  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_ANON_KEY,
    {
      global: {
        headers: {
          Authorization: `Bearer ${supabaseAccessToken}`,
        },
      },
    },
  );
  return supabase;
}

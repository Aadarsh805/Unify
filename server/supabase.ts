import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { RealtimeClient } from "@supabase/realtime-js";

const supabaseURL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_ANON_KEY!;

const supabase: SupabaseClient<any, any> = createClient(
  supabaseURL,
  supabaseKey
);

export const realtimeSupabase = new RealtimeClient(supabaseURL, {
  params: {
    key: supabaseKey,
  },
});

export default supabase;

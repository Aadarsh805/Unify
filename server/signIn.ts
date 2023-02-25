import supabase from "@/server/supabase";
import type { SignInWithPasswordCredentials } from "@supabase/supabase-js";

export default async function signInWithEmail(
  payload: SignInWithPasswordCredentials
) {
  const { data, error } = await supabase.auth.signInWithPassword(payload);
  if (error) {
    return console.log(error);
  }
  return data;
}

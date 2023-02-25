import supabase from "@/server/supabase";
import type { SignInWithPasswordCredentials } from "@supabase/supabase-js";
import getUserDetails from "./utils/getUserDetails";

import type { User } from "@/app/store/store";

export default async function signInWithEmail(
  payload: SignInWithPasswordCredentials
): Promise<User | never> {
  const { data: authData, error } = await supabase.auth.signInWithPassword(
    payload
  );

  if (error) {
    // invalid credentals
    throw new Error("Invalid credentals");
  }

  if (authData.user) return await getUserDetails(authData.user.id);

  return {
    id: "",
    username: "",
    email: "",
  };
  // return data;
}

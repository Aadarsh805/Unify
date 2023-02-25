import supabase from "@/server/supabase";
import type { SignInWithPasswordCredentials } from "@supabase/supabase-js";
import getUserDetails from "./utils/getUserDetails";

import type { User } from "@/app/store/store";

export default async function signInWithEmail(
  payload: SignInWithPasswordCredentials
): Promise<User> {
  const { data: authData, error } = await supabase.auth.signInWithPassword(
    payload
  );
  if (error) {
    console.log(error);
  }

  if (authData.user) return await getUserDetails(authData.user.id);

  return {
    id: "",
    username: "",
    email: "",
  };
  // return data;
}

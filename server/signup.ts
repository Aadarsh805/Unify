import supabase from "@/server/supabase";
import type { SignUpWithPasswordCredentials } from "@supabase/supabase-js";

export default async function signUpWithEmail(payload: {
  username: string;
  email: string;
  password: string;
  id: string;
}) {
  console.log(payload);
  const supabaseCred = {
    email: payload.email,
    password: payload.password,
  } as SignUpWithPasswordCredentials;
  const { data: authData, error: e } = await supabase.auth.signUp(supabaseCred);

  // console.log(authData?.user?.id);
  if (!e && authData?.user?.id) {
    const { data: user, error } = await supabase.from("users").insert({
      username: payload.username,
      email: payload.email,
      id: authData?.user?.id,
    });
    console.log(authData);
    if (error) {
      return console.log(error);
    }
  }

  return authData;
}

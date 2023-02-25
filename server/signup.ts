import supabase from "@/server/supabase";
import type { SignUpWithPasswordCredentials } from "@supabase/supabase-js";

export default async function signUpWithEmail(payload: {
  username: string;
  email: string;
  password: string;
  id: string;
}): Promise<void> {
  const supabaseCred = {
    email: payload.email,
    password: payload.password,
  } as SignUpWithPasswordCredentials;
  const { data: authData, error: e } = await supabase.auth.signUp(supabaseCred);

  // console.log(authData?.user?.id);
  if (!e && authData?.user?.id) {
    const { error } = await supabase.from("users").insert({
      username: payload.username,
      email: payload.email,
      id: authData.user.id,
    });

    if (error) {
      // todo: handler create user Error
      console.log(error);
    }
  }

  if (e) {
    // todo: handle signup error
    console.log(e);
  }
}

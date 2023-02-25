import type { User } from "@/app/store/store";
import supabase from "@/server/supabase";

export default async function signOut(): Promise<User> {
  const { error } = await supabase.auth.signOut();
  if (error) {
    // handle signout error
    console.log(error);
  }
  return {
    id: "",
    username: "",
    email: "",
  };

  // return data;
}

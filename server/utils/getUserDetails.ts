import { User } from "@/app/store/store";
import supabase from "../supabase";

const getUserDetails = async (id: string): Promise<User> => {
  const { data, error } = await supabase
    .from("users")
    .select("username, email")
    .eq("id", id);
  if (error) {
    console.log(error);
  }

  if (data)
    return {
      id,
      username: data[0].username,
      email: data[0].email,
    };

  return {
    id: "",
    username: "",
    email: "",
  };
};

export default getUserDetails;

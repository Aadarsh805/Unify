import supabase from "@/server/supabase";

interface IInterestedProduct {
  id: number;
  interested_by: string;
}

export default async function insertToInterestedProducts(
  payload: IInterestedProduct
) {
  const { error } = await supabase.from("interest_products").insert(payload);
  if (error) {
    // handle insert error
  }
}

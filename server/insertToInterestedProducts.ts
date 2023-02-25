import supabase from "@/server/supabase";

interface IInterestedProduct {
  product_id: number;
  interested_by: string;
}

export default async function insertToInterestedProducts(
  payload: IInterestedProduct
) {
  const { error } = await supabase.from("interested_products").insert(payload);
  if (error) {
    // handle insert error
  }
}

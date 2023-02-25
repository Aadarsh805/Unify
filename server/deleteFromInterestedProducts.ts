import supabase from "@/server/supabase";

interface IInterestedProduct {
  product_id: number;
  interested_by: string;
}

export default async function deleteFromInterestedProducts(
  payload: IInterestedProduct
) {
  const { error } = await supabase
    .from("interested_products")
    .delete()
    .eq("product_id", payload.product_id);
  if (error) {
    // handle delete error
  }
}

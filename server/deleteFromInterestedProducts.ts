import supabase from "@/server/supabase";

interface IInterestedProduct {
  id: number;
  interested_by: string;
}

export default async function deleteFromInterestedProducts(
  payload: IInterestedProduct
) {
  const { error } = await supabase
    .from("interest_products")
    .delete()
    .match(payload);
  if (error) {
    // handle delete error
  }
}

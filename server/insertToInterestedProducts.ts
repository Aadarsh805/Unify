import supabase from "@/server/supabase";

interface IInterestedProduct {
  product_id: number;
  interested_by: string;
}

export default async function insertToInterestedProducts(
  payload: IInterestedProduct
) {
  let hasError: boolean = false;
  const { error } = await supabase.from("interested_products").insert(payload);
  if (error) hasError = true;

  if (!hasError) {
    const { data } = await supabase
      .from("products")
      .select("interested_count")
      .eq("id", payload.product_id);
    if (data && data[0]) {
      const { error } = await supabase
        .from("products")
        .update({ interested_count: data[0].interested_count + 1 })
        .eq("id", payload.product_id);
    }
  }
  return { hasError };
}

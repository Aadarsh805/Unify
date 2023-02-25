import ProductCards from "@/app/components/ProductCards";
import supabase from "@/server/supabase";
import Image from "next/image";
import Link from "next/link";

async function getProducts(category: string) {
  const { data } = await supabase
    .from("products")
    .select("id,product_image,owner_id,category,created_at")
    .eq("category", category);

  if (data && Array.isArray(data)) {
    return {
      products: data,
    };
  } else
    return {
      products: [],
    };
}

type PageProps = {
  params: {
    category: string;
  };
};

const categoryPage = async ({ params: { category } }: PageProps) => {
  const { products } = await getProducts(category);

  return (
    <main className="flex min-h-screen items-center gap-[5rem] px-[4rem]">
      <article className="flex w-[30%] flex-col gap-5">
        <h1 className="text-6xl font-bold text-[#1C1C1C]/90">
          Explore Our <span className="text-[#AF7A0F]">Diverse</span> Collection
        </h1>
        <div className="flex items-center gap-3">
          <Image
            className="w-10"
            src="/assets/images/downArrow.png"
            alt=""
            width={144}
            height={144}
          />
          <p className="text-xl text-[#1c1c1c]/90">
            Discover a World of Treasures Across All Categories
          </p>
        </div>
        <Link
          className="w-fit rounded-sm bg-[#Af7A0f] px-[6rem] py-3 text-[#F4F1E7]"
          href="/"
        >
          Donate
        </Link>
      </article>
      <ProductCards products={products} />
    </main>
  );
};

export default categoryPage;

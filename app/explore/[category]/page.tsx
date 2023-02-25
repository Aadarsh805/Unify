import ProductCard from "@/components/explore/ProductCard";
import Link from "next/link";

async function getProducts(category: string) {
  // console.log(category);

  // this is the category we want from api for now not filtering them

  const res = await fetch("https://dummyjson.com/products");

  return res.json();
}

type PageProps = {
  params: {
    category: string;
  };
};

const categoryPage = async ({ params: { category } }: PageProps) => {
  const products = await getProducts(category);

  return (
    <main className="flex min-h-screen items-center gap-[5rem] px-[4rem]">
      <article className="flex max-w-[25rem] flex-col gap-5">
        <h1 className="text-6xl font-bold text-[#1C1C1C]/90">
          Explore Our <span className="text-[#AF7A0F]">Diverse</span> Collection
        </h1>
        <div className="flex items-center gap-3">
          <img className="w-10" src="/decoration/decoration1.svg" alt="" />
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
      <div className="flex gap-10">
        {products &&
          products.products.map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </main>
  );
};

export default categoryPage;

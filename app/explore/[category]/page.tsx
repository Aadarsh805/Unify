import ProductCards from "@/app/components/ProductCards";
import { noto_serif, open_sans } from "@/public/assets/fonts/font";
import Image from "next/image";
import downArrow from "public/assets/images/downArrow.png";
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
    <main
      className="flex items-start mt-20 gap-[5rem] px-[4rem]"
      style={{ height: "calc(100vh - 193px)" }}
    >
      <article className="flex w-full flex-col gap-5">
        <h1 className={`text-6xl font-bold text-[#1C1C1C]/90 ${noto_serif.className}`}>
          Explore  <span className="text-[#AF7A0F]">Our</span> Diverse Collection
        </h1>
        <div className="flex items-start gap-3">
        <Image className="w-14" src={downArrow} alt="down_arrow" />
          <p className={`text-xl text-[#1c1c1c]/90 ${noto_serif.className}`}>
            Discover a World of Treasures Across All Categories
          </p>
        </div>
        <Link
          className={`w-fit rounded-sm bg-[#Af7A0f] px-[6rem] py-3 text-[#F4F1E7] uppercase font-bold ${open_sans.className}`}
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

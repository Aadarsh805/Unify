"use client";

import ProductCards from "@/app/components/ProductCards";
import { noto_serif, open_sans } from "@/public/assets/fonts/font";
import supabase from "@/server/supabase";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import downArrow from "public/assets/images/downArrow.png";
import { useEffect, useState } from "react";

type PageProps = {};

const CategoryPage = ({}: PageProps) => {
  const path = usePathname();

  let category = "";
  if (path) category = path.substring(path.lastIndexOf("/") + 1, path.length);
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    async function getProducts() {
      const { data } = await supabase
        .from("products")
        .select("id,product_image,owner_id,category,created_at");

      if (data && Array.isArray(data)) {
        setProducts(data);
      } else setProducts([]);
    }
    getProducts();
  }, [category]);

  return (
    <main
      className="mt-20 flex items-start gap-[5rem] px-[4rem]"
      style={{ height: "calc(100vh - 193px)" }}
    >
      <article className="flex w-[25em] flex-col gap-5">
        <h1
          className={`text-6xl font-bold text-[#1C1C1C]/90 ${noto_serif.className}`}
        >
          Explore <span className="text-[#AF7A0F]">Our</span> Diverse Collection
        </h1>
        <div className="flex items-start gap-3">
          <Image
            className="w-14"
            src={downArrow}
            alt="down_arrow"
            width={144}
            height={144}
          />
          <p className={`text-xl text-[#1c1c1c]/90 ${noto_serif.className}`}>
            Discover a World of Treasures Across All Categories
          </p>
        </div>
        <Link
          className={`w-fit rounded-sm bg-[#Af7A0f] px-[6rem] py-3 font-bold uppercase text-[#F4F1E7] ${open_sans.className}`}
          href="/"
        >
          Donate
        </Link>
      </article>
      <ProductCards products={products} />
    </main>
  );
};

export default CategoryPage;

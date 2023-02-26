"use client";

import ProductCards from "@/app/components/ProductCards";
import supabase from "@/server/supabase";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type PageProps = {};

const categoryPage = ({}: PageProps) => {
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
      } else
        return {
          products: [],
        };
    }
    getProducts();
  }, [category]);

  return (
    <main className="flex  items-center gap-[5rem] px-[4rem]">
      <article className="flex max-w-[25rem] flex-col gap-5">
        <h1 className="text-6xl font-bold text-[#1C1C1C]/90">
          Explore Our <span className="text-[#AF7A0F]">Diverse</span> Collection
        </h1>
        <div className="flex items-center gap-3">
          <img className="w-10" src="/assets/images/downArrow.png" alt="" />
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

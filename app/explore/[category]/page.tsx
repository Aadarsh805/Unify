"use client";

import ProductCards from "@/app/components/ProductCards";
import useStore from "@/app/store/store";
import Link from "next/link";
import { useEffect, useState } from "react";

type PageProps = {
  params: {
    category: string;
  };
};

const categoryPage = ({ params: { category } }: PageProps) => {
  const [products, setProducts] = useState<any>();

  const { setMyProducts, myProducts } = useStore((state) => ({
    setMyProducts: state.setMyProducts,
    myProducts: state.myProducts,
  }));

  const fetchData = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const products = await res.json();
    setMyProducts(products.products);
  };

  const filterData = () => {
    //filter with
    console.log(category, myProducts);
  };

  useEffect(() => {
    if (myProducts.length <= 0) return;
    setProducts(myProducts);
  }, [myProducts]);

  useEffect(() => {
    if (category === "all") fetchData();
    else filterData();
  }, []);

  return (
    <main className="flex min-h-screen items-center gap-[5rem] px-[4rem]">
      <article className="flex w-[30%] flex-col gap-5">
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
      {products && <ProductCards products={products} />}
    </main>
  );
};

export default categoryPage;

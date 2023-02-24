"use client";

import Link from "next/link";

type Props = {
  product: any;
};

function ProductCard({ product }: Props) {
  return (
    <Link
      href={`/explore/cat/${product.id}`}
      className="flex h-[22rem] w-[17rem] flex-col overflow-hidden rounded-t-[15rem] rounded-b-[.3rem] border-[3px] border-[#Af7A0f]"
    >
      <img
        className="h-full w-full object-cover"
        src={product.thumbnail}
        alt=""
      />
      <button className="bg-[#Af7A0f] py-3 text-[#F4F1E7] ">Intrested</button>
    </Link>
  );
}

export default ProductCard;

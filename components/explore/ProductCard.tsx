"use client";
/* eslint-disable @next/next/no-img-element */

import useStore from "@/app/store/store";
import insertToInterestedProducts from "@/server/insertToInterestedProducts";
import Link from "next/link";

type Props = {
  product: any;
};

function ProductCard({ product }: Props) {
  const { userProfile } = useStore((state: any) => ({
    userProfile: state.userProfile,
  }));
  const isUser = userProfile.id;

  const addToMyInterestList = async () => {
    await insertToInterestedProducts({
      id: Number(product.id),
      interested_by: userProfile.id as string,
    });
  };

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
      <button
        onClick={() => {
          if (isUser) {
            addToMyInterestList();
          }
        }}
        className={`bg-[#Af7A0f] py-3 text-[#F4F1E7] ${
          isUser ? `opacity-100` : `opacity-40`
        } `}
      >
        Intrested
      </button>
    </Link>
  );
}

export default ProductCard;

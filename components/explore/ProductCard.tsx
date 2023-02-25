"use client";
/* eslint-disable @next/next/no-img-element */

import useStore from "@/app/store/store";
import deleteFromInterestedProducts from "@/server/deleteFromInterestedProducts";
import insertToInterestedProducts from "@/server/insertToInterestedProducts";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Props = {
  product: any;
};

function ProductCard({ product }: Props) {
  const router = useRouter();
  const { userProfile, interestedProduct } = useStore((state: any) => ({
    userProfile: state.userProfile,
    interestedProduct: state.interestedProduct,
  }));
  const isUser = userProfile.id;
  const isAlreadyIntested = interestedProduct.includes(product.id) as boolean;

  const manageInterestList = async () => {
    const productDetails = {
      id: Number(product.id),
      interested_by: userProfile.id as string,
    };
    if (isAlreadyIntested) {
      await deleteFromInterestedProducts(productDetails);
    } else {
      await insertToInterestedProducts(productDetails);
    }
  };

  return (
    <div className="flex h-[22rem] w-[17rem] flex-col overflow-hidden rounded-t-[15rem] rounded-b-[.3rem] border-[3px] border-[#Af7A0f] ">
      <Link href={`/explore/cat/${product.id}`} className="h-[22rem] w-[17rem]">
        <img
          className="h-full w-full object-cover"
          src={product.thumbnail}
          alt=""
        />
      </Link>
      {/* todo: if already interested render another button */}

      <button
        onClick={() => {
          if (isUser) {
            manageInterestList();
          } else {
            router.push("/login");
          }
        }}
        className={`bg-[#Af7A0f] py-3 text-[#F4F1E7] ${
          isUser ? `opacity-100` : `opacity-40`
        } `}
      >
        {isAlreadyIntested ? "DisInterest" : "Interest"}
      </button>
    </div>
  );
}

export default ProductCard;

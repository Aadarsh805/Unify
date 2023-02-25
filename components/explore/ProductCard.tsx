"use client";
/* eslint-disable @next/next/no-img-element */

import useStore from "@/app/store/store";
import { open_sans } from "@/public/assets/fonts/font";
import deleteFromInterestedProducts from "@/server/deleteFromInterestedProducts";
import insertToInterestedProducts from "@/server/insertToInterestedProducts";
import Link from "next/link";
import { useRouter } from "next/navigation";
const base_url =
  "https://nxlkzsdcwscprmiqcqiu.supabase.co/storage/v1/object/public/product-images";

type Props = {
  product: any;
};

function ProductCard({ product }: Props) {
  const router = useRouter();
  const { userProfile, interestedProduct } = useStore((state: any) => ({
    userProfile: state.userProfile,
    interestedProduct: state.interestedProduct,
  }));

  console.log(product);

  const isUser = userProfile.id;
  const isAlreadyIntested = interestedProduct.includes(
    product.owner_id
  ) as boolean;

  const manageInterestList = async () => {
    const productDetails = {
      product_id: Number(product.id),
      interested_by: userProfile.id as string,
    };
    if (isAlreadyIntested) {
      await deleteFromInterestedProducts(productDetails);
    } else {
      await insertToInterestedProducts(productDetails);
    }
  };
  return (
    <div className="flex h-[25rem] w-[20rem] flex-col overflow-hidden rounded-t-[15rem] rounded-b-[.3rem] border-[3px] border-[#Af7A0f] ">
      <Link href={`/explore/cat/${product.id}`} className="h-full w-full">
        <img
          className="h-full w-full bg-cover object-cover"
          src={`${base_url}/${product.product_image}`}
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
        className={`${
          open_sans.className
        } bg-[#Af7A0f] py-3 font-bold uppercase tracking-wide text-[#F4F1E7] ${
          isUser ? `opacity-100` : `opacity-40`
        } `}
      >
        {isAlreadyIntested ? "Not Interested" : "Interested"}
      </button>
    </div>
  );
}

export default ProductCard;

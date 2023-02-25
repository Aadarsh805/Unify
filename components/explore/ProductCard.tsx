"use client";
/* eslint-disable @next/next/no-img-element */

import useStore from "@/app/store/store";
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
    <div className="relative flex h-[22rem] w-[17rem] flex-col overflow-hidden rounded-t-[15rem] rounded-b-[.3rem] border-[3px] border-[#Af7A0f] ">
      <Link
        href={`/explore/${product.category}/${product.id}`}
        className="h-[22rem] w-[17rem]"
      >
        <img
          className="h-full w-full object-cover"
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
        className={`absolute left-0 bottom-0 w-full bg-[#Af7A0f] py-3 text-[#F4F1E7] ${
          isUser ? `opacity-100` : `opacity-40`
        } `}
      >
        {"Interest"}
      </button>
    </div>
  );
}

export default ProductCard;

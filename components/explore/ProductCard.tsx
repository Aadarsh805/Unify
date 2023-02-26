"use client";
/* eslint-disable @next/next/no-img-element */

import useStore from "@/app/store/store";
import { open_sans } from "@/public/assets/fonts/font";
import deleteFromInterestedProducts from "@/server/deleteFromInterestedProducts";
import insertToInterestedProducts from "@/server/insertToInterestedProducts";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
const base_url =
  "https://nxlkzsdcwscprmiqcqiu.supabase.co/storage/v1/object/public/product-images";

type Props = {
  product: any;
};

function ProductCard({ product }: Props) {
  const router = useRouter();
  const { userProfile, interestedProduct, setInterestedProduct } = useStore(
    (state: any) => ({
      userProfile: state.userProfile,
      interestedProduct: state.interestedProduct,
      setInterestedProduct: state.setInterestedProduct,
    })
  );

  const isUser = userProfile.id;
  const isAlreadyIntested = interestedProduct
    .map((prod: any) => Number(prod.product_id))
    .includes(Number(product.id)) as boolean;

  const manageInterestList = async () => {
    const productDetails = {
      product_id: Number(product.id),
      interested_by: userProfile.id as string,
    };
    if (isAlreadyIntested) {
      const { hasError } = await deleteFromInterestedProducts(productDetails);
      if (!hasError) {
        setInterestedProduct(
          interestedProduct.filter(
            (prod: any) => prod.product_id !== productDetails.product_id
          )
        );
      }
    } else {
      const { hasError } = await insertToInterestedProducts(productDetails);
      if (!hasError) {
        const inArr = interestedProduct;
        inArr.push(productDetails);
        setInterestedProduct(inArr);
      }
    }
  };

  return (
    <div className="relative flex h-[25rem] w-[20rem] flex-col overflow-hidden rounded-t-[15rem] rounded-b-[.3rem] border-[3px] border-[#Af7A0f] ">
      <Link href={`/explore/cat/${product.id}`} className="h-full w-full">
        <Image
          className="h-full w-full bg-cover object-cover"
          src={`${base_url}/${product.product_image}`}
          alt=""
          width={256}
          height={256}
        />
      </Link>
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
        } absolute left-0 bottom-0 z-10 w-full bg-[#Af7A0f] py-3 font-bold uppercase tracking-wide text-[#F4F1E7] ${
          isUser ? `opacity-100` : `opacity-40`
        } `}
      >
        {isAlreadyIntested ? "Not Interested" : "Interested"}
      </button>
    </div>
  );
}

export default ProductCard;

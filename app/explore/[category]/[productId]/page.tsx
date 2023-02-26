/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import useStore from "@/app/store/store";
import { open_sans } from "@/public/assets/fonts/font";
import deleteFromInterestedProducts from "@/server/deleteFromInterestedProducts";
import insertToInterestedProducts from "@/server/insertToInterestedProducts";
import supabase from "@/server/supabase";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FC, useEffect, useState } from "react";
const base_url =
  "https://nxlkzsdcwscprmiqcqiu.supabase.co/storage/v1/object/public/product-images";

/* eslint-disable @next/next/no-img-element */

async function getProductDetails(id: string) {
  const { data } = await supabase
    .from("products")
    .select(
      "id,title,description,category,culture,interested_count,product_image,users(id,username)"
    )
    .eq("id", id);
  if (data && data[0]) {
    const { users, ...product } = data[0];
    return {
      product,
      owner: users,
    };
  }
  return null;
}

type PageProps = {
  params: {
    productId: string;
  };
};

const ProductDetailsPage: FC<PageProps> = ({ params: { productId } }) => {
  const router = useRouter();
  const [product, setProduct] = useState<any>({});
  const [owner, setOwner] = useState<any>({});

  async function fetchProduct() {
    const data = (await getProductDetails(productId)) as {
      product: any;
      owner: any;
    };
    if (data) {
      const { product, owner } = data;
      setProduct(product);
      setOwner(owner);
    }
  }
  useEffect(() => {
    fetchProduct();
  }, []);

  const { userProfile, interestedProduct } = useStore((state: any) => ({
    userProfile: state.userProfile,
    interestedProduct: state.interestedProduct,
  }));
  const isUser = userProfile.id;
  const isAlreadyIntested = interestedProduct.includes(product.id) as boolean;

  const manageInterestList = async () => {
    if (isUser === owner.id) return;
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

  const isMyProduct = owner.id === isUser;

  return (
    <main className="flex min-h-[85vh] items-center justify-center gap-20 px-[2rem]">
      <article className="flex w-[45%] flex-col gap-20">
        <Link href={'/explore'} className="self-start text-2xl text-[#Af7A0f]">
          {"<"} Back
        </Link>
        <div className="flex flex-col gap-5">
          <h1 className={`text-6xl font-bold text-[#1C1C1C]/90 ${open_sans.className}`}>
            {product.title}
          </h1>
          <p className="text-xl text-[#1c1c1c]/90">{product.description}</p>

          <div className="flex flex-col gap-3 text-2xl font-bold text-[#1c1c1c]/90">
            <p>
              From: <span className="text-[#Af7A0f]">{product.culture}</span>
            </p>
            <p>
              Posted By:{" "}
              {isMyProduct ? (
                <Link href={`/account`} className="text-[#Af7A0f]">
                  {owner.username}
                </Link>
              ) : (
                <Link href={`/user/${owner.id}`} className="text-[#Af7A0f]">
                  {owner.username}
                </Link>
              )}
            </p>
          </div>
          <div className="flex items-center gap-20">
            <button
              onClick={() => {
                if (isUser) {
                  manageInterestList();
                } else {
                  router.push("/login");
                }
              }}
              className={`w-fit rounded-full border border-[#Af7A0f] p-[.15rem] ${
                isUser ? `opacity-100` : `opacity-40`
              } `}
            >
              <button className={`rounded-full bg-[#Af7A0f] px-[5rem] py-4 text-[#F4F1E7] font-bold uppercase ${open_sans.className}`}>
                {isAlreadyIntested ? "DisInterest" : "Interest"}
              </button>
            </button>
            <div className="flex items-center text-2xl font-bold">
              <img
                className="w-10 rounded-full"
                src="https://randomuser.me/api/portraits/men/23.jpg"
                alt=""
              />
              <img
                className="mx-[-1rem] w-10 rounded-full"
                src="https://randomuser.me/api/portraits/men/2.jpg"
                alt=""
              />
              <img
                className="w-10 rounded-full"
                src="https://randomuser.me/api/portraits/women/49.jpg"
                alt=""
              />
              <p className="mx-5">
                <span className="mx-1 text-[#Af7A0f]">
                  {product.interested_count}
                </span>
                Interested
              </p>
            </div>
          </div>
        </div>
      </article>

      <div className="flex h-[75vh] w-[27vw] items-end self-end overflow-hidden rounded-t-full border-[3px] border-[#Af7A0f]">
        <img
          className="h-full w-full object-cover"
          src={`${base_url}/${product.product_image}`}
          alt=""
        />
      </div>
    </main>
  );
};

export default ProductDetailsPage;

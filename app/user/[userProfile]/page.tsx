"use client";

import Image from "next/image";

import deleteFromInterestedProducts from "@/server/deleteFromInterestedProducts";
import insertToInterestedProducts from "@/server/insertToInterestedProducts";
import supabase from "@/server/supabase";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import useStore from "../../store/store";

const UserProfilePage = () => {
  const router = useRouter();
  const [products, setProducts] = useState<any[]>([]);

  const path = usePathname();
  const { userProfile, interestedProduct, baseUrl } = useStore(
    (state: any) => ({
      userProfile: state.userProfile,
      interestedProduct: state.interestedProduct,
      baseUrl: state.baseUrl,
    })
  );
  let profileId = "";
  if (path) profileId = path.substring(path.lastIndexOf("/") + 1, path.length);
  const userId = userProfile.id;
  const isShowInterestButton = profileId !== userId;

  const fetchProducts = async (ownerId: string) => {
    const { data } = await supabase
      .from("products")
      .select("id,product_image")
      .eq("owner_id", ownerId);

    if (data && data.length) {
      setProducts(data);
    } else setProducts([]);
  };
  useEffect(() => {
    if (profileId) {
      fetchProducts(profileId);
    }
  }, [profileId]);

  const manageInterestList = async (id: string) => {
    const isAlreadyIntested = interestedProduct.includes(id) as boolean;
    // if (userId === product.owner_id) return;
    const productDetails = {
      product_id: Number(id),
      interested_by: userProfile.id as string,
    };
    if (isAlreadyIntested) {
      await deleteFromInterestedProducts(productDetails);
    } else {
      await insertToInterestedProducts(productDetails);
    }
  };

  return (
    <div className="px-10">
      <h1 className="mb-10 text-2xl">User products</h1>
      <div className="flex flex-wrap items-center gap-4"></div>

      {/* This is for user profile */}
      <div className="flex flex-wrap gap-4">
        {products.map((product) => (
          <>
            <div className="relative h-[15rem] w-[15rem] overflow-hidden rounded-md border-[3px] border-[#Af7A0f]">
              <Image
                className="-z-10 h-full w-full object-cover object-center"
                src={`${baseUrl}/${product.product_image}`}
                alt="userproduct_img"
                width={256}
                height={256}
              />
              {isShowInterestButton && (
                <button
                  onClick={() => {
                    if (userId) {
                      manageInterestList(product.id);
                    } else {
                      router.push("/login");
                    }
                  }}
                  className={`absolute left-0 bottom-0 z-10 w-full bg-[#Af7A0f] py-3 text-[#F4F1E7]`}
                >
                  Interested
                </button>
              )}
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default UserProfilePage;

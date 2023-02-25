"use client";

import Image from "next/image";
import tradition from "public/assets/images/tradition.png";

/* eslint-disable react-hooks/rules-of-hooks */
import deleteFromInterestedProducts from "@/server/deleteFromInterestedProducts";
import insertToInterestedProducts from "@/server/insertToInterestedProducts";
import { usePathname } from "next/navigation";
import useStore from "../../store/store";

const userProfilePage = () => {
  // shouls contain owner_id;
  const products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const path = usePathname();
  const { userProfile, interestedProduct } = useStore((state: any) => ({
    userProfile: state.userProfile,
    interestedProduct: state.interestedProduct,
  }));
  const profileId = path.substring(path.lastIndexOf("/") + 1, path.length);
  const userId = userProfile.id;

  const isShowInterestButton = profileId !== userId;

  const manageInterestList = async (id: number) => {
    const isAlreadyIntested = interestedProduct.includes(id) as boolean;
    // if (userId === product.owner_id) return;
    const productDetails = {
      id: Number(id),
      interested_by: userProfile.id as string,
    };
    console.log(productDetails);
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
                src={tradition}
                alt="something"
              />
              {isShowInterestButton && (
                <button
                  onClick={() => {
                    if (userId) {
                      manageInterestList(product);
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

export default userProfilePage;

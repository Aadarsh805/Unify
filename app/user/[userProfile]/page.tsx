"use client";

import Image from "next/image";
import tradition from "public/assets/images/tradition.png";


const userProfilePage = () => {
  const products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  return (
    <div className="px-10">
      <h1 className="mb-10 text-2xl">User products</h1>
      <div className="flex flex-wrap items-center gap-4"></div>

      {/* This is for user profile */}
      <div className="flex flex-wrap gap-4">
        {products.map((product) => (
          <>
            <div className="h-[15rem] w-[15rem] overflow-hidden rounded-md border-[3px] border-[#Af7A0f]">
              <Image
                className="h-full w-full object-cover"
                src={tradition}
                alt="something"
              />
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default userProfilePage;

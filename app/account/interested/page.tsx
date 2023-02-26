"use client";

import supabase from "@/server/supabase";
import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useState } from "react";

const base_url =
  "https://nxlkzsdcwscprmiqcqiu.supabase.co/storage/v1/object/public/product-images/";

const InterestedPage: FC = () => {
  const [myInterestedProducts, setMyInterestedProducts] = useState<any>([]);

  useEffect(() => {
    const getMyInterested = async () => {
      const { data: myData } = await supabase.auth.getUser();
      const { id: myId }: any = myData.user;

      //getting all the products that i interested
      const { data: myInterested } = await supabase
        .from("interested_products")
        .select("products(id, owner_id, title, product_image, category)")
        .eq("interested_by", myId);
      setMyInterestedProducts(myInterested);
    };
    getMyInterested();
  }, []);

  return (
    <div className="px-10">
      <div className="flex flex-wrap gap-4">
        {myInterestedProducts?.map((product: any) => (
          <Link
            href={`/explore/${product.products.category}/${product.products.id}`}
            key={product.id}
            className="flex h-[15rem] w-[15rem] flex-col gap-2 overflow-hidden rounded-md border-[3px] border-[#Af7A0f]"
          >
            <Image
              className="h-full w-full object-cover"
              src={base_url + product.products.product_image}
              alt=""
              width={144}
              height={144}
            />
            <p className="text-center text-lg text-black">
              {product?.products.title}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default InterestedPage;

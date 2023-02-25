"use client";

import useStore from "@/app/store/store";
import supabase from "@/server/supabase";
import Link from "next/link";
import { FC, useEffect, useState } from "react";

const InterestedPage: FC = () => {
  const [myInterestedProducts, setMyInterestedProducts] = useState<any[]>([]);
  const { interestedProduct, setInterestedProduct } = useStore((state) => ({
    interestedProduct: state.interestedProduct,
    setInterestedProduct: state.setInterestedProduct,
  }));

  useEffect(() => {
    const getMyInterested = async () => {
      const { data: myData } = await supabase.auth.getUser();
      const { id: myId }: any = myData.user;

      //getting all the products that i interested
      const { data: myInterested } = await supabase
        .from("interested_products")
        .select("products(id, owner_id, title, product_image, category)")
        .eq("interested_by", myId);
      const a: any = myInterested?.map(
        (item: any) => item?.products?.owner_id
      ) as [];
      console.log(myInterested, "myinerkjlesl");
      setMyInterestedProducts(a);
      setInterestedProduct(a);
    };
    getMyInterested();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // console.log(myInterestedProducts, "myintersesd");

  return (
    <div className="flex w-full items-center gap-2 bg-red-200 p-4">
      {myInterestedProducts?.map((product: any) => (
        <Link
          href={`/explore/${product.category}/${product.id}`}
          key={product}
          className="p-1 text-lg"
        >
          {product}
        </Link>
      ))}
    </div>
  );
};

export default InterestedPage;

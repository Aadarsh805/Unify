/* eslint-disable @next/next/no-img-element */
"use client";

import Modal from "@/components/account/Modal";
import supabase from "@/server/supabase";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const base_url =
  "https://nxlkzsdcwscprmiqcqiu.supabase.co/storage/v1/object/public/product-images/";

const AccountPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [myproducts, setMyProducts] = useState<any>([]);

  useEffect(() => {
    const fetchMyProducts = async () => {
      const { data } = await supabase.auth.getUser();
      const { id }: any = data?.user as any;

      const { data: mydata, error } = await supabase
        .from("products")
        .select("product_image, id, owner_id, title, category")
        .eq("owner_id", id);

      setMyProducts(mydata);
    };
    fetchMyProducts();
  }, []);

  return (
    <div className="px-10">
      <div className="flex flex-wrap gap-4">
        <button
          className="float-left flex h-[15rem] w-[15rem] items-center justify-center rounded-md border-[3px] border-dashed border-[#Af7A0f]
      "
          onClick={() => setShowModal(true)}
        >
          <span className="text-3xl">+</span>
          Add a item
        </button>
        {myproducts?.map((product: any) => (
          <Link
            href={`/explore/${product.category}/${product.id}`}
            key={product.id}
            className="flex h-[15rem] w-[15rem] flex-col gap-2 overflow-hidden rounded-md border-[3px] border-[#Af7A0f]"
          >
            <Image
              className="h-full w-full object-cover"
              src={base_url + product.product_image}
              alt=""
              width={144}
              height={144}
            />
            <p className="text-center text-lg text-black">{product?.title}</p>
          </Link>
        ))}
      </div>
      {showModal ? <Modal setShowModal={setShowModal} /> : null}
    </div>
  );
};

export default AccountPage;

/* eslint-disable @next/next/no-img-element */
"use client";

import Modal from "@/components/account/Modal";
import supabase from "@/server/supabase";
import { useEffect, useState } from "react";

const AccountPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [myproducts, setMyProducts] = useState<any>([]);

  useEffect(() => {
    const fetchMyProducts = async () => {
      const { data } = await supabase.auth.getUser();
      const { id }: any = data?.user as any;

      const { data: mydata, error } = await supabase
        .from("products")
        .select("product_image, id, owner_id, title")
        .eq("owner_id", id);

      console.log(data, "me");
      console.log(mydata, "myproducts");
      setMyProducts(mydata);
      console.log("adsf");
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
          <div
            key={product.id}
            className="flex h-[15rem] w-[15rem] flex-col gap-2 overflow-hidden rounded-md border-[3px] border-[#Af7A0f]"
          >
            <img
              className="h-full w-full object-cover"
              src="https://fastly.picsum.photos/id/14/536/354.jpg?hmac=p8F6lcJ45rfP_j7N_J8IqhUE9-iUu1deD1BhGiLoV2Q"
              alt=""
            />
            <p className="text-center text-lg text-black">{product?.title}</p>
          </div>
        ))}
      </div>
      {showModal ? <Modal setShowModal={setShowModal} /> : null}
    </div>
  );
};

export default AccountPage;

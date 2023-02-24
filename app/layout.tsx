"use client";

import "./globals.css";
import Head from "./head";
import supabase from "@/server/supabase";
import type { RealtimeChannel } from "@supabase/realtime-js";
import { useEffect, useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [newNotification, setNewNotification] = useState<any>();
  const [interestedBy, setInterestedBy] = useState<string>("");
  const [productInterested, setProductInterested] = useState<string>("");
  const [myInterestedProducts, setMyInterestedProducts] = useState<any[]>([]);
  const [userId, setUserId] = useState("");

  console.log(userId);
  useEffect(() => {
    const funct = async () => {
      const { data } = await supabase.auth.getUser();
      const { id }: any = data.user;
      setUserId(id);
    };

    funct();

    let channel: RealtimeChannel;

    const mySubscription = async () => {
      // now that we have all the products I liked
      // which is an array of product id's
      // now we need to get owners of these product id's

      channel = supabase
        .channel("test")
        .on(
          "postgres_changes",
          { event: "INSERT", schema: "public", table: "interested_products" },
          (payload) => {
            const {
              new: { interested_by, product_id },
            } = payload;
            setInterestedBy(interested_by);
            setProductInterested(product_id);
          }
        )
        .subscribe((status) => {
          if (status === "SUBSCRIBED") {
            console.log("subsrcribed");
          }
        });
    };
    mySubscription();
  }, []);

  // call this everytime I interest a product
  useEffect(() => {
    const getMyInterested = async () => {
      const { data: myData } = await supabase.auth.getUser();
      const { id: myId }: any = myData.user;

      //getting all the products that i interested
      const { data: myInterested } = await supabase
        .from("interested_products")
        .select("products(owner_id)")
        .eq("interested_by", myId);
      const a: any = myInterested?.map((item: any) => item?.products?.owner_id);
      setMyInterestedProducts(a);
    };
    getMyInterested();
  }, []);

  useEffect(() => {
    if (interestedBy && interestedBy !== userId) {
      const getNotification = async () => {
        const { data: userData } = await supabase
          .from("users")
          .select("id, username")
          .eq("id", interestedBy);
        const { username }: any = userData?.[0];

        const { data: productData } = await supabase
          .from("products")
          .select("title, id, owner_id")
          .eq("id", productInterested);

        const { title, owner_id }: any = productData?.[0];

        if (owner_id === userId) {
          // checking if the product interested was mine or not
          console.log(username + " " + "interested your" + " " + title);
        }
      };
      if (myInterestedProducts.includes(interestedBy)) {
        console.log("match found");
        console.log(myInterestedProducts, "my");
      }
      getNotification();
    }
  }, [interestedBy]);

  return (
    <html lang="en">
      <Head />
      <body>{children}</body>
    </html>
  );
}

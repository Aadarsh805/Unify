"use client";

import useStore from "@/app/store/store";
import supabase from "@/server/supabase";
import getUserDetails from "@/server/utils/getUserDetails";
import type { RealtimeChannel } from "@supabase/realtime-js";
import { FC, ReactNode, useEffect, useState } from "react";

type LayoutWrapperProps = {
  children: ReactNode;
};

interface IInterestedProduct {
  product_id: number;
}

const LayoutWrapper: FC<LayoutWrapperProps> = ({ children }) => {
  const [newNotification, setNewNotification] = useState<any>();
  const [interestedBy, setInterestedBy] = useState<string>("");
  const [productInterested, setProductInterested] = useState<string>("");
  const [myInterestedProducts, setMyInterestedProducts] = useState<any[]>([]);
  // const [userId, setUserId] = useState("");

  const {
    interestedProduct,
    setInterestedProduct,
    userProfile,
    userId,
    setUserId,
  } = useStore((state) => ({
    interestedProduct: state.interestedProduct,
    setInterestedProduct: state.setInterestedProduct,
    userProfile: state.userProfile,
    userId: state.userId,
    setUserId: state.setUserId,
  }));

  const { setUserProfile } = useStore((state: any) => ({
    setUserProfile: state.setUserProfile,
  }));

  const authenticateUserSignIn = async () => {
    try {
      const { data } = await supabase.auth.getUser();
      if (data.user) {
        const { id }: any = data?.user as any;
        const user = await getUserDetails(id);
        setUserProfile(user);
        setUserId(user.id);
      } else {
        // if user isn't logged in
        // erase user details
        const user = {
          id: "",
          username: "",
          email: "",
        };
        setUserProfile(user);
      }
    } catch (error) {
      // authentication failed
      console.log(error);
    }
  };

  console.log(userId);
  useEffect(() => {
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
    authenticateUserSignIn();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // call this everytime I interest a product
  // getting my interest on page render
  useEffect(() => {
    const getMyInterested = async () => {
      const { data: myData } = await supabase.auth.getUser();
      if (!myData.user) return;
      const { id: myId }: any = myData.user;
      //getting all the products that i interested
      const { data: myInterested } = await supabase
        .from("interested_products")
        .select("products(owner_id)")
        .eq("interested_by", myId);
      const a: any = myInterested?.map((item: any) => item?.products?.owner_id);
      setMyInterestedProducts(a);
      setInterestedProduct(a);
    };
    getMyInterested();

    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [interestedBy]);

  return <>{children}</>;
};

export default LayoutWrapper;

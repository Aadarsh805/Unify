"use client";

import LayoutWrapper from "@/components/wrappers/LayoutWrapper";
import { noto_serif } from "@/public/assets/fonts/font";
import supabase from "@/server/supabase";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import "./globals.css";
import Head from "./head";
import useStore from "./store/store";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userProfile, userId, setUserId } = useStore((state) => ({
    userProfile: state.userProfile,
    userId: state.userId,
    setUserId: state.setUserId,
  }));

  const onSignIn = async () => {
    const { data } = await supabase.auth.getUser();
    const { id }: any = data?.user as any;
    setUserId(id);

    console.log(id);
  };
  // useEffect(() => {

  //   funct();
  // }, []);

  // auth-change event
  const observeAuthChange = async () => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((e, session) => {
      if (e === "SIGNED_IN") onSignIn();
    });
    subscription.callback("SIGNED_IN", null);
  };

  useEffect(() => {
    observeAuthChange();
  }, []);

  return (
    <html lang="en">
      <Head />
      <body
        style={{
          fontFamily: `${noto_serif.className}`,
        }}
        className="no-scrollbar bg-[#F4F1E7]"
      >
        <Navbar />
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}

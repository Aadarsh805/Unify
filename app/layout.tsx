"use client";

import { noto_serif } from "@/public/assets/fonts/font";
import Navbar from "./components/Navbar";
import supabase from "@/server/supabase";
import { useEffect } from "react";
import "./globals.css";
import Head from "./head";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const onSignIn = async () => {
    const { data } = await supabase.auth.getUser();
    const { id }: any = data?.user as any;
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
        className="bg-[#F4F1E7]"
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}

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
  useEffect(() => {
    const funct = async () => {
      const { data } = await supabase.auth.getUser();
      const { id }: any = data?.user as any;
      console.log(id);
    };

    funct();
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

"use client";

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
      // const { id }: any = data?.user as any;
      // console.log(id);
    };

    funct();
  }, []);

  return (
    <html lang="en">
      <Head />
      <body>{children}</body>
    </html>
  );
}

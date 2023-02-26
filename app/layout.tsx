"use client";

import LayoutWrapper from "@/components/wrappers/LayoutWrapper";
import { noto_serif } from "@/public/assets/fonts/font";
import Navbar from "./components/Navbar";
import "./globals.css";
import Head from "./head";
import IntegrationNotistack from "./components/Snackbar";
import { useEffect } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <Head />
      <body
        style={{
          fontFamily: `${noto_serif.className}`,
        }}
        className="no-scrollbar bg-[#F4F1E7]"
      >
        <IntegrationNotistack />
        <Navbar />
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}

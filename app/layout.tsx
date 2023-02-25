"use client";

import { noto_serif } from "@/public/assets/fonts/font";
import Navbar from "./components/Navbar";
import supabase from "@/server/supabase";
import getUserDetails from "@/server/utils/getUserDetails";
import { useEffect } from "react";
import LayoutWrapper from "@/components/wrappers/LayoutWrapper";
import "./globals.css";
import Head from "./head";
import useStore from "./store/store";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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

  useEffect(() => {
    authenticateUserSignIn();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <html lang="en">
      <Head />        
      <body
        style={{
          fontFamily: `${noto_serif.className}`,
        }}
        className="bg-[#F4F1E7] no-scrollbar"
      >
        <Navbar />
       <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}

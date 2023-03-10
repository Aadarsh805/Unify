/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import useStore from "../store/store";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userProfile } = useStore((state: any) => {
    return {
      userProfile: state.userProfile,
    };
  });

  return (
    <main>
      <div className="flex items-center gap-5 px-[3rem] text-xl">
        <div>
          <h1 className="text-3xl font-bold text-[#Af7A0f]">
            {userProfile.username}
          </h1>
          <p className="text-xl text-[#1c1c1c]/90">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae,
            quo!
          </p>
        </div>
      </div>
      <div className="flex p-[3rem] text-xl">
        <div className="flex flex-col gap-5 border-r-[3px] border-[#1c1c1c]/60 px-10">
          <Link
            href="/account"
            className="border-l-4  border-[#AF7A0F] px-3 text-[#AF7A0F]"
          >
            Products
          </Link>
          <Link
            href="/account/match"
            className="border-l-4  border-[#AF7A0F] px-3 text-[#AF7A0F]"
          >
            Matches
          </Link>
          <Link
            href="/account/interested"
            className="border-l-4  border-[#AF7A0F] px-3 text-[#AF7A0F]"
          >
            Interested
          </Link>
        </div>
        {children}
      </div>
    </main>
  );
}

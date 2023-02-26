/* eslint-disable @next/next/no-img-element */
"use client";
import supabase from "@/server/supabase";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [owner, setOwner] = useState<any>({});
  const path = usePathname();
  let profileId = "";
  if (path) profileId = path.substring(path.lastIndexOf("/") + 1, path.length);

  const getOwnerData = async (ownerId: string) => {
    const { data: userData } = await supabase
      .from("users")
      .select("username,id")
      .eq("id", ownerId);

    if (userData && userData[0]) {
      setOwner(userData[0]);
    } else setOwner({});
  };

  useEffect(() => {
    getOwnerData(profileId);
  }, [profileId]);

  return (
    <main>
      <div className="flex items-center gap-16 px-[3rem] text-xl">
        <div>
          <h1 className="text-3xl font-bold text-[#Af7A0f]">
            {owner.username}
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
            href="/manish"
            className="border-l-4  border-[#AF7A0F] px-3 text-[#AF7A0F]"
          >
            profile
          </Link>
        </div>
        {children}
      </div>
    </main>
  );
}

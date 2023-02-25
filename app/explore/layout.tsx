"use client";

import Sidebar from "@/components/explore/Sidebar";
import { usePathname } from "next/navigation";
export default function ExploreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();

  const productOrNot: any = path?.split("").filter((ch) => ch === "/").length;

  return productOrNot <= 2 ? (
    <>
      <Sidebar />
      {children}
    </>
  ) : (
    <>{children}</>
  );
}

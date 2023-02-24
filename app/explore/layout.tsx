"use client";

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
      {/* sidebar */}
      {children}
    </>
  ) : (
    <>{children}</>
  );
}

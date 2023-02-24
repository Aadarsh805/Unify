import Link from "next/link";
import type { FC } from "react";

type SidebarProps = {};

const Sidebar: FC<SidebarProps> = () => {
  return (
    <aside className="float-left flex min-h-screen flex-col gap-5  px-[3rem] pt-[6rem] text-xl">
      <Link
        href="/explore"
        className="border-l-4  border-[#AF7A0F] px-3 text-[#AF7A0F]"
      >
        All
      </Link>
      <Link
        href="/explore/clothings"
        className="border-l-4  border-[#AF7A0F] px-3 text-[#AF7A0F]"
      >
        Clothings
      </Link>
      <Link
        href="/explore/decor"
        className="border-l-4  border-[#AF7A0F] px-3 text-[#AF7A0F]"
      >
        Decor
      </Link>
      <Link
        href="/explore/food"
        className="border-l-4  border-[#AF7A0F] px-3 text-[#AF7A0F]"
      >
        Food
      </Link>
      <Link
        href="/explore/accessories"
        className="border-l-4  border-[#AF7A0F] px-3 text-[#AF7A0F]"
      >
        Accessories
      </Link>
    </aside>
  );
};

export default Sidebar;

import { open_sans } from "@/public/assets/fonts/font";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { FC } from "react";

const Sidebar: FC = () => {
  const navLists = [
    {
      url: "/explore/all",
      name: "All",
    },
    {
      url: "/explore/clothings",
      name: "Clothings",
    },
    {
      url: "/explore/decor",
      name: "Decorations",
    },
    {
      url: "/explore/food",
      name: "Food",
    },
    {
      url: "/explore/accessories",
      name: "Accessories",
    },
  ];

  const pathname = usePathname();
  return (
    <aside
      className="float-left flex flex-col gap-7  px-[3rem]  text-xl"
      style={{ height: "calc(100vh - 193px)" }}
    >
      {navLists.map((list) => (
        <Link
          href={list.url}
          className={`border-l-2 ${
            open_sans.className
          }  border-[#815a0b] px-3 font-medium  ${
            pathname !== list.url
              ? "border-opacity-50 text-[#1C1C1C]"
              : " border-l-[3px] font-semibold text-[#AF7A0F]"
          }  `}
          key={list.name}
        >
          {list.name}
        </Link>
      ))}
    </aside>
  );
};

export default Sidebar;

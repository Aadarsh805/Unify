import Link from "next/link";
import { usePathname } from "next/navigation";
import type { FC } from "react";

const Sidebar: FC = () => {
  const navLists = [
    {
      url: "/explore",
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
    <aside className="float-left flex min-h-screen flex-col gap-5  px-[3rem] pt-[6rem] text-xl">
      {navLists.map((list) => (
        <Link
          href={list.url}
          className="border-l-4  border-[#AF7A0F] px-5 py-2 text-[#AF7A0F] hover:bg-[#AF7A0F]/20 "
          key={list.name}
        >
          {list.name}
        </Link>
      ))}
    </aside>
  );
};

export default Sidebar;

import Link from "next/link";
import type { FC } from "react";

const Sidebar: FC = () => {
  const navLists = [
    {
      name: "All",
      route: "/explore/all",
    },
    {
      name: "Clothings",
      route: "/explore/all",
    },
    {
      name: "Decor",
      route: "/explore/decor",
    },
    {
      name: "Food",
      route: "/explore/food",
    },
    {
      name: "Accessories",
      route: "/explore/accessories",
    },
  ];

  return (
    <aside className="float-left flex min-h-screen flex-col gap-5  px-[3rem] pt-[6rem] text-xl">
      {navLists.map((list) => (
        <Link
          href={list.route}
          className="border-l-4  border-[#AF7A0F] px-5 py-2 text-[#AF7A0F] hover:bg-[#AF7A0F]/20 "
        >
          {list.name}
        </Link>
      ))}
    </aside>
  );
};

export default Sidebar;

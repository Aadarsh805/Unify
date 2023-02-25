import Link from "next/link";
import type { FC } from "react";
import { usePathname } from "next/navigation";
import { open_sans } from "@/public/assets/fonts/font";

const Sidebar: FC = () => {
  const links = [
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
    <aside
      className="float-left flex flex-col gap-7  px-[3rem]  text-xl"
      style={{ height: "calc(100vh - 193px)" }}
    >
      {links.map((link) => (
        <Link
          href={`${link.url}`}
          className={`border-l-2 ${open_sans.className}  border-[#815a0b] px-3 font-medium  ${
            pathname !== link.url
              ? "border-opacity-50 text-[#1C1C1C]"
              : " text-[#AF7A0F] font-semibold border-l-[3px]"
          }  `}
        >
          {link.name}
        </Link>
      ))}
    </aside>
  );
};

export default Sidebar;

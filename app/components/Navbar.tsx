"use client";

import { noto_serif, open_sans } from "@/public/assets/fonts/font";
import Link from "next/link";
import type { FC } from "react";
import React from "react";
import useStore from "../store/store";
import NavbarButton from "./NavbarButton";
import NotificationIcon from "./NotificationIcon";

type NavbarProps = {};

const Navbar: FC<NavbarProps> = () => {
  const { userProfile } = useStore((state: any) => ({
    userProfile: state.userProfile,
  }));
  const navLists = [
    {
      name: "home",
      route: "/",
    },
    {
      name: "explore",
      route: "/explore",
    },
    {
      name: "blog",
      route: "/",
    },
    {
      name: "contact us",
      route: "/",
    },
  ];

  const user = userProfile.id;

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="px-24 py-5 ">
      <div className="flex items-center justify-between px-5 ">
        <Link href={"/"}>
          <h1
            className={`cursor-pointer font-bold ${noto_serif.className} text-[40px] `}
          >
            Unify
          </h1>
        </Link>
        <ul className="flex items-center gap-20 ">
          {navLists.map((list) => (
            <Link key={list.name} href={list.route}>
              <li
                className={`cursor-pointer font-semibold uppercase tracking-wider text-[1D1C1B] ${open_sans.className}`}
              >
                {list.name}
              </li>
            </Link>
          ))}
        </ul>

        <div className="flex items-center gap-8">
          {user && <NotificationIcon />}
          <NavbarButton />
        </div>
      </div>
      <hr className=" mt-3 border-[#1E1E1E] border-opacity-[16%]" />
    </div>
  );
};

export default Navbar;

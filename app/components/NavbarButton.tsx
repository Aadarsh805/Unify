import React, { FC } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { FaUserCircle } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { open_sans } from "@/public/assets/fonts/font";
import Link from "next/link";

const NavbarButton: FC = () => {
  const user = true;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      {user ? (
        <button
          id="basic-button"
          onClick={handleClick}
          className={`rounded-md bg-[#AF7A0F] px-8 py-2 font-bold uppercase text-[#F4F1E7] ${open_sans.className}`}
        >
          Profile
        </button>
      ) : (
        <Link href={"/login"} className="bg-[]">
          <button
            className={`rounded-md bg-[#AF7A0F] px-8 py-2 font-bold uppercase text-[#F4F1E7] ${open_sans.className}`}
          >
            Login
          </button>
        </Link>
      )}

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        className={` mt-4  ${open_sans.className}`}
      >
        <MenuItem onClick={handleClose} >
          <Link
            href="/account"
            className={` flex items-center gap-2 font-semibold ${open_sans.className}`}
          >
            <FaUserCircle />
            My account
          </Link>{" "}
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          className={` flex items-center gap-2 font-semibold ${open_sans.className}`}
        >
          <FiLogOut />
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
};

export default NavbarButton;

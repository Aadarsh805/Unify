import { open_sans } from "@/public/assets/fonts/font";
import signOut from "@/server/signOut";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FC } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import useStore from "../store/store";

const NavbarButton: FC = () => {
  const router = useRouter();
  const { setUserProfile, userProfile } = useStore((state: any) => ({
    userProfile: state.userProfile,
    setUserProfile: state.setUserProfile,
  }));

  const user = userProfile.id;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignOut = async () => {
    try {
      const user = await signOut();
      setUserProfile(user);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
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
        <MenuItem onClick={handleClose}>
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
          <button
            type="button"
            onClick={handleSignOut}
            className="flex h-full w-full items-center gap-2 border-none outline-none"
          >
            <FiLogOut />
            Logout
          </button>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default NavbarButton;

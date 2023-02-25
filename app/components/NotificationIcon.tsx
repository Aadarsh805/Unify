import React, { FC } from "react";
import { BsFillBellFill } from "react-icons/bs";
import Badge from "@mui/material/Badge";
import useStore from "../store/store";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import { open_sans } from "@/public/assets/fonts/font";

const notification = [
  "notification 1",
  "notification 2",
  "notification 3",
  "notification 4",
  "notification 5",
];

const NotificationIcon: FC = () => {


  const notificationCount = useStore((state) => state.notificationCount);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="cursor-pointer text-2xl">
      <Badge badgeContent={notificationCount} color="primary">
        <button
          id="basic-button"
          onClick={handleClick}
          className={`font-bold uppercase text-[#1C1C1C] ${open_sans.className}`}
        >
          <BsFillBellFill color="action" />
        </button>
      </Badge>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        className={` mt-4 -ml-24 ${open_sans.className}`}
      >
            {notification.map((noti, indx) => (
                <MenuItem onClick={handleClose}>
                    {noti}
                </MenuItem>
            ))}
      </Menu>
    </div>
  );
};

export default NotificationIcon;

"use client";

import { open_sans } from "@/public/assets/fonts/font";
import supabase from "@/server/supabase";
import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React, { FC, useEffect } from "react";
import { BsFillBellFill } from "react-icons/bs";
import useStore from "../store/store";

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
  const { userId, notifications, setNotifications } = useStore((state) => ({
    userId: state.userId,
    notifications: state.notifications,
    setNotifications: state.setNotifications,
  }));

  useEffect(() => {
    const fetchNotifications = async () => {
      const { data, error } = await supabase
        .from("notification")
        .select("*")
        .eq("owner_id", userId);
      if (data) {
        setNotifications(data);
        console.log(data, "notifidata");
      }
    };
    fetchNotifications();
  }, []);

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
        {notifications.map((noti: any, indx: any) => (
          <MenuItem key={indx} onClick={handleClose}>
            {noti}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default NotificationIcon;

"use client";

import { open_sans } from "@/public/assets/fonts/font";
import supabase from "@/server/supabase";
import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React, { FC, useEffect, useState } from "react";

import { BsFillBellFill } from "react-icons/bs";
import useStore from "../store/store";
import NotificationMessage from "./NotificationMessage";

const notificationData = [
  {
    type: "interested",
    text: "interested your",
    username: "Somidh",
    product: "shoes",
  },
  {
    type: "matched",
    text: "Match found with",
    username: "Somidh",
  },
  {
    type: "interested",
    text: "interested your",
    username: "Somidh",
    product: "shoes",
  },
  {
    type: "matched",
    text: "Match found with",
    username: "Somidh",
  },
  {
    type: "interested",
    text: "interested your",
    username: "Somidh",
    product: "shoes",
  },
  {
    type: "matched",
    text: "Match found with",
    username: "Somidh",
  },
];

const NotificationIcon: FC = () => {
  const [showAll, setShowAll] = useState(false);

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
        .eq("owner_id", userId)
        .order("created_at", {
          ascending: false,
        });
      if (data) {
        setNotifications(data);
        console.log(data, "notifidata");
      }
    };
    fetchNotifications();
  }, [showAll]);

  const handleShowAll = () => {
    setShowAll((prev) => !prev);
  };

  return (
    <div className="cursor-pointer text-2xl">
      <Badge badgeContent={notifications.length} color="primary">
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
        className={` mt-4 -ml-40   ${open_sans.className}`}
      >
        {notifications.slice(0, 5).map((notification: any, indx: any) => {
          const { notification_type, notification_text } = notification;

          return (
            <MenuItem key={indx} onClick={handleClose}>
              <NotificationMessage
                notification_text={notification_text}
                notification_type={notification_type}
                // username={username}
                // product={product}
              />
            </MenuItem>
          );
        })}
        {notificationData.length > 5 && (
          <button
            className={`ml-[50%] w-[90%] -translate-x-1/2 rounded-md bg-[#AF7A0F] px-8 py-2 font-bold uppercase text-[#F4F1E7] ${open_sans.className}`}
            onClick={handleShowAll}
          >
            {!showAll ? "Show All" : "Hide"}
          </button>
        )}
      </Menu>
    </div>
  );
};

export default NotificationIcon;

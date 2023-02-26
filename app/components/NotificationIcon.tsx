import { open_sans } from "@/public/assets/fonts/font";
import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React, { FC, useState } from "react";
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

  const handleShowAll = () => {
    setShowAll((prev) => !prev);
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
        className={` mt-4 -ml-40   ${open_sans.className}`}
      >
        {notificationData.slice(0, 5).map((notification, indx) => {
          const { type, text, username, product } = notification;

          return (
            <MenuItem key={indx} onClick={handleClose}>
              {type === "interested" ? (
                <NotificationMessage
                  text={text}
                  username={username}
                  product={product}
                />
              ) : (
                <NotificationMessage text={text} username={username} />
              )}
            </MenuItem>
          );
        })}
        {notificationData.length > 5 && (
          <button
            className={`ml-[50%] -translate-x-1/2 font-bold uppercase text-[#AF7A0F] ${open_sans.className}`}
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

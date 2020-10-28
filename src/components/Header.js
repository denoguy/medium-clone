import React from "react";
import "./Header.css";
import BookmarksOutlinedIcon from "@material-ui/icons/BookmarksOutlined";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import { Avatar, Button } from "@material-ui/core";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://cdn.worldvectorlogo.com/logos/wordmark-black-medium.svg"
          alt=""
        />
        <h3>Good morning</h3>
      </div>
      <div className="header__right">
        <SearchOutlinedIcon className="icon" />
        <BookmarksOutlinedIcon className="icon" />
        <NotificationsNoneOutlinedIcon className="icon" />
        <button className="icon">Upgrade</button>
        <Avatar src="https://static.toiimg.com/photo/70703164.cms" />
      </div>
    </div>
  );
}

export default Header;

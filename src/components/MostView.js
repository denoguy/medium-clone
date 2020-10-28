import { Avatar } from "@material-ui/core";
import React from "react";
import "./MostView.css";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import MoreHorizOutlinedIcon from "@material-ui/icons/MoreHorizOutlined";

function MostView({ avatar, username, title, text, timestamp, image }) {
  return (
    <div className="mostView">
      <div className="mostView__info">
        <div className="mostView__user">
          <Avatar src={avatar} />
          <h4>{username}</h4>
        </div>
        <h3>{title}</h3>
        <p>{text}</p>
        <div className="mostview__timestamp">
          <p>{timestamp}</p>
          <p>Based on your reading history</p>
          <div className="mostview__timestamp-icon">
            <BookmarkBorderOutlinedIcon />
            <MoreHorizOutlinedIcon />
          </div>
        </div>
      </div>
      <img src={image} alt="" />
    </div>
  );
}

export default MostView;

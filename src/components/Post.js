import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";

function Post({ avatar, username, title, timestamp, image }) {
  return (
    <div className="post">
      <div className="post__info">
        <div className="post__info__header">
          <Avatar style={{ height: "30px", width: "30px" }} src={avatar} />
          <p>{username}</p>
        </div>
        <h4>{title}</h4>
        <p>{timestamp}</p>
      </div>
      <div className="post__image">
        <img src={image} alt="" />
      </div>
    </div>
  );
}

export default Post;

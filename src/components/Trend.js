import { Avatar } from "@material-ui/core";
import React from "react";
import "./Trend.css";

function Trend({ avatar, username, title, timestamp }) {
  return (
    <div className="trend">
      <div className="trend__user">
        <Avatar src={avatar} />
        <h4>{username}</h4>
      </div>
      <h4>{title}</h4>
      <p>{timestamp}</p>
    </div>
  );
}

export default Trend;

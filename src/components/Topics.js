import React from "react";
import "./Topics.css";

function Topics() {
  return (
    <div className="topic">
      <h4>TOPICS YOU FOLLOW</h4>
      <button>Techonology</button>
      <button>Relationship</button>
      <button>Programming</button>
      <button>Fashion</button>
      <button>Food</button>
      <button className="topic__add">+</button>
    </div>
  );
}

export default Topics;

import { Avatar } from "@material-ui/core";
import React from "react";
import "./Feed.css";
import Post from "./Post";
import Topics from "./Topics";

function Feed() {
  return (
    <div className="feed">
      <div className="feed__left">
        <img
          src="https://miro.medium.com/fit/c/376/282/1*BWtEYNsmqON6zdURcLa6hg.png"
          alt=""
        />
        <div className="feed__left-info">
          <Avatar
            style={{ height: "30px", width: "30px" }}
            src="https://static.toiimg.com/photo/70703164.cms"
          />
          <p>Pragya Jaiswal</p>
        </div>
        <div className="feed__left-detail">
          <h3>
            How I Fully Quit Google (And You <br /> Can, Too)
          </h3>
          <h3 className="subheading">
            My enlightening quest to break free of a tech <br /> giant
          </h3>
          <p>Read More 12 read</p>
        </div>
      </div>
      <div className="feed__center">
        <Post
          avatar="https://static.toiimg.com/photo/70703164.cms"
          username="Pragya Jaiswal"
          title=" Getting Started with react
          Js"
          timestamp="Oct 24, 2019 . 10 min read"
          image="https://miro.medium.com/fit/c/100/100/1*DfBIE1bAL7O1Kn0Rj2tZJA.png"
        />
        <Post
          avatar="https://i.ytimg.com/vi/7jG3rK37C_k/hqdefault.jpg"
          username="Anupama Parameswaran"
          title="How to Build Your App Using Firebase Database"
          timestamp="Aug 12, 2020. 30 min read"
          image="https://miro.medium.com/fit/c/100/100/0*fkA6eQ8T-TRy6lu7"
        />
        <Post
          avatar="https://miro.medium.com/fit/c/48/48/1*HFsJMJLtDOxwEwDaXOjUzA@2x.jpeg"
          username="Emma Austin"
          title="12 Signs a Girl *Like* Likes You"
          timestamp="Jan 17 · 10 min read"
          image="https://miro.medium.com/fit/c/100/100/1*MKkufG0eyT0IQ5wZ70qKxQ.jpeg"
        />
        <Post
          avatar="https://miro.medium.com/fit/c/96/96/2*_N7LmY-1visQgv1ArZopbA.jpeg"
          username="Aditya Loshali"
          title="Handling complex form state using React hooks"
          timestamp="Sep 4, 2019 · 5 min read"
          image="https://miro.medium.com/fit/c/100/100/1*kEPCQNY4dwVyaFuLEwJcNQ.png"
        />
      </div>
      <div className="feed__right">
        <h4>LATEST FROM FOLLOWING</h4>
        <img
          src="https://miro.medium.com/fit/c/64/64/1*lqoEFtUfSwuNP0WcnKmC3Q.png"
          alt=""
        />
        <p>Refraction...</p>
        <Topics />
      </div>
    </div>
  );
}

export default Feed;

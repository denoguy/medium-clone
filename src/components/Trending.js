import React from "react";
import "./Trending.css";
import TrendingUpRoundedIcon from "@material-ui/icons/TrendingUpRounded";
import Trend from "./Trend";

function Trending() {
  return (
    <div className="trending">
      <div className="trending__title">
        <TrendingUpRoundedIcon />
        <h4>TRENDING ON MEDIUM</h4>
      </div>
      <div className="trending__details">
        <Trend
          avatar="https://miro.medium.com/fit/c/48/48/2*ciIWyA35uFp7mDLVYM_Xgg.jpeg"
          username="Robert C"
          title="The Future of the Mac"
          timestamp="Oct 26· 4 min read"
        />
        <Trend
          avatar="https://miro.medium.com/fit/c/56/56/2*OfkT4SVLTuj4TaLWnxghtQ.jpeg"
          username="Travis Tang (Voon Hao)"
          title="How to Teach Yourself Data Science in 2020"
          timestamp="Oct 27· 9 min read"
        />
        <Trend
          avatar="https://miro.medium.com/fit/c/56/56/2*uK4ibfBP-dge1rtRSziawQ.png"
          username="Mike Wehner"
          title="What Restoring a 30-Year-Old Nintendo Taught Me About Right To Repair"
          timestamp="Oct 27· 9 min read"
        />
        <Trend
          avatar="https://miro.medium.com/fit/c/96/96/1*7NifD5aAzyf9-5QYbAZw-A.jpeg"
          username="Rowan Kavner"
          title="The 2020 Los Angeles Dodgers are World Series champions"
          timestamp="Oct 27· 9 min read"
        />
        <Trend
          avatar="https://miro.medium.com/fit/c/96/96/1*LJ3yf4JA7s71hQFzvoOt7Q@2x.jpeg"
          username="Lauren Martinchek"
          title="Why Joe Biden’s Team is Raising the Alarm."
          timestamp="Oct 27· 9 min read"
        />
        <Trend
          avatar="https://miro.medium.com/fit/c/56/56/1*iQYB9PakI5YQsF0GV_KKqQ.jpeg"
          username="chrissy teigen"
          title="Hi."
          timestamp="Oct 27· 9 min read"
        />
      </div>
    </div>
  );
}

export default Trending;

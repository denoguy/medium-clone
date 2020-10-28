import React from "react";
import "./Populars.css";
import MostView from "./MostView";

function Populars() {
  return (
    <div className="popular">
      <div className="most__watch">
        <MostView
          avatar="https://miro.medium.com/fit/c/96/96/1*fugJ7EhqBMc0atjhzGXh_A@2x.jpeg"
          username="Ethan Hansen"
          title="Building a Simple Scoreboard with React"
          text="Building a full stack application can be a daunting task for an
          inexperienced developer"
          timestamp="Apr 7, 2019· 5 min read"
          image="https://miro.medium.com/fit/c/200/133/0*uzb4qsGfQFSSa6vN"
        />
        <MostView
          avatar="https://miro.medium.com/fit/c/96/96/2*4Sm284fmHMx1Bqlp02iEcA.jpeg"
          username="Alejandro Sobko"
          title="Beautiful drag and drop with React — The beginner’s guide"
          text="This post is about the react-beautiful-dnd library"
          timestamp="Apr 7, 2019· 5 min read"
          image="https://miro.medium.com/fit/c/200/133/1*zXB_ISU0aFma_Hp6D4NS1Q.png"
        />
        <MostView
          avatar="https://miro.medium.com/fit/c/96/96/2*TXoLKElGa3aTo17KRSSXmg.jpeg"
          username="Annie Tanasugarn, PhD"
          title="Spotting The Micro Behaviors Of A Toxic Relationship"
          text="How to spot it’s toxic before the red flags start waving."
          timestamp="Oct 12· 9 min read"
          image="https://miro.medium.com/fit/c/200/133/1*l2_bCTpmj7GN5bGFDP8rsQ.jpeg"
        />
        <MostView
          avatar="https://miro.medium.com/fit/c/56/56/1*uiViRIaAFw4qZtF3Ls8C0g.jpeg"
          username="Russ Josephs"
          title="A Radical Proposal for Dealing with Trump Supporters After Biden Wins"
          text="You’re not gonna like this. But hear me out."
          timestamp="Oct 15· 4 min read"
          image="https://miro.medium.com/fit/c/200/133/1*OgwENPAOTWgYvaj7FPbsQA.jpeg"
        />
        <MostView
          avatar="https://miro.medium.com/fit/c/96/96/1*U-Rxz7Oxy0qRAayKvoU2Lw@2x.jpeg"
          username="Jake Daghe"
          title="26-Year-Old Programmer Built a $1 Billion App In 2 Years — After Following His Girlfriend’s Advice"
          text="A structure to help you take over entire industries"
          timestamp="Sep 2· 5 min read"
          image="https://miro.medium.com/fit/c/200/133/1*gZAwFxXPAh2oULGNqRLcxQ.png"
        />
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default Populars;

import react from "react";
import "./App.css";
import Feed from "./components/Feed";
import Header from "./components/Header";
import Trending from "./components/Trending";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Feed />
        <Trending />
      </div>
    </div>
  );
}

export default App;

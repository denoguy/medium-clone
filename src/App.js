import react from "react";
import "./App.css";
import Feed from "./components/Feed";
import Header from "./components/Header";
import Populars from "./components/Populars";
import Trending from "./components/Trending";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Feed />
        <Trending />
        <Populars />
      </div>
    </div>
  );
}

export default App;

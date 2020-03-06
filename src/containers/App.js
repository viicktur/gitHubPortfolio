import React from "react";
import Profile from "./Profile/Profile";
import Header from "../components/Header/Header";
import logo from "../logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header logo={logo} />
      <Profile />
    </div>
  );
}

export default App;

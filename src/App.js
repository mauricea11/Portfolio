import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [loadingNums, changeLoadingNums] = useState(0);

  function increLoadingNums() {
    changeLoadingNums(loadingNums + 1);
    console.log(loadingNums);
  }

  return (
    <div className="App">
      <h1 className="loading-text">LOADING </h1>
      <h2 className="loading-text">{loadingNums}%</h2>
      <button onClick={increLoadingNums}>click me</button>
    </div>
  );
}

export default App;

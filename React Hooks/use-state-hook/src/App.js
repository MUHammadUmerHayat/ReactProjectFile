import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import ObjectState from "./components/ObjectState";
import ArrayState from "./components/ArrayState";

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <ObjectState /> */}
      <ArrayState />
    </div>
  );
}

export default App;

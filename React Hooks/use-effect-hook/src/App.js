import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import UseEffectOne from "./components/UseEffectOne";
import FetchingData from "./components/FetchingData";

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      {/* {show ? <UseEffectOne /> : <h1>Show is False</h1>}
      <button
        onClick={() => {
          setShow(!show);
        }}
      >Show </button> */}
      <FetchingData />
    </div>
  );
}

export default App;

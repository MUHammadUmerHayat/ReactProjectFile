import React from "react";
import "./App.css";
import Test from "./components/Test";
import ClassComponent from "./components/ClassComponent";
import Parent from "./components/parent-child/Parent";
import ParentClass from "./components/set-state/ParentClass";
import ParentC from "./components/pure-component/ParentC";
import ParentRef from "./components/refs/ParentRef";

function App() {
  return (
    <div className="App">
      {/*  <Test username="Chandan"/>
        <ClassComponent /> */}

      {/* <Parent /> */}
      {/* <ParentClass /> */}

      {/* <ParentC /> */}
      <ParentRef />
    </div>
  );
}

export default App;

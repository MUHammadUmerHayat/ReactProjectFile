import React from "react";
import logo from "./logo.svg";
import "./App.css";
import routing from "./router";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import ListView from "./components/ListView";

function App() {
  const myArray = ["Bike","Car"];

  return (
    <Router>
      <div className="App">{routing}</div>
      <Route exact path="/" render={()=>{
        return <Home data={myArray}/>
      }}></Route>
      {20>10?<Route render={()=>{
        return <h1>Hello</h1>
      }} />:null}
    </Router>
  );
}

export default App;

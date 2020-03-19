import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import ListView from "./components/ListView";
import DetailView from "./components/DetailView";

const arrayData = ["Car","Bike"];

const routing = (
 
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/list">List View</Link>
      </li>
      <li>
        {" "}
        <Link to="/detail">Detail View</Link>
      </li>
        
        <Route path="/list" component={ListView}></Route>
        <Route path="/detail" component={DetailView}></Route>
    </ul>
 
);

export default routing;

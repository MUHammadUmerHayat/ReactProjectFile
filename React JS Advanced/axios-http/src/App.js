import React from "react";
import logo from "./logo.svg";
import "./App.css";
import routing from "./router";
import Footer from "./components/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import FuncComp from "./components/FuncComp";

function App() {
  return (
    <Router>
      <div>
        {routing}
        <Footer />
        <FuncComp />
      </div>
    </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import CreateAccount from "./components/CreateAccount";
import ShowAccount from "./components/ShowAccount";

const routing = (
  <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to="/" className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/create" className="nav-link">
              Create Account
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/show" className="nav-link">
              Show Accounts
            </Link>
          </li>
        </ul>
      </div>
    </nav>

    <Route exact path="/" component={Home}></Route>
    <Route path="/create" component={CreateAccount}></Route>
    <Route path="/show" component={ShowAccount}></Route>
  </>
);

export default routing;

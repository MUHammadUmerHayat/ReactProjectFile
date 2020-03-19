import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Footer extends Component {
  routeToHome = () => {
    console.log("Footer props", this.props);
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <button onClick={this.routeToHome}>Home</button>
      </div>
    );
  }
}
export default withRouter(Footer);

import React, { Component, PureComponent } from "react";
import ChildC from "./ChildC";
import FuncComp from "./FuncComp";

export default class ParentC extends Component {
  state = {
    name: "Chandan"
  };

  updateName = () => {
    this.setState({
      name: "Manoj"
    });
  };
  render() {
    console.log("parent render");
    return (
      <div>
        <h1>{this.state.name}</h1>
        <button onClick={this.updateName}>Change Name</button>
        <ChildC username={this.state.name} />
        <FuncComp username={this.state.name} />
      </div>
    );
  }
}

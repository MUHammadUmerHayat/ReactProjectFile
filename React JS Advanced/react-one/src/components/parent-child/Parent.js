import React, { Component } from "react";
import Child from "./Child";

export default class Parent extends Component {
  state = {
    name: "Rakshith"
  };

  getDataFromChild = name => {
    this.setState({
      name: name
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <Child action={this.getDataFromChild} username={this.state.name} />
      </div>
    );
  }
}

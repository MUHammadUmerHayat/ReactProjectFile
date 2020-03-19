import React, { Component } from "react";

export default class Child extends Component {
  sendDataToParent = () => {
    this.props.action("Google");
  };

  render() {
    return (
      <div>
        <h1>Child Comp {this.props.username}</h1>
        <button onClick={this.sendDataToParent}>Click</button>
      </div>
    );
  }
}

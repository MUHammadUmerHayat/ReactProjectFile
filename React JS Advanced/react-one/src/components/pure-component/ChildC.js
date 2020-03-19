import React, { Component, PureComponent } from "react";

export default class ChildC extends PureComponent {

  render() {
    console.log("child render");
    return (
      <div>
        <h1>{this.props.username}</h1>
      </div>
    );
  }
}

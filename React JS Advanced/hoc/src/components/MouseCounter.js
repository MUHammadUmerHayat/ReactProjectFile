import React, { Component } from "react";
import withCounter from "../hoc/withCounter";

class MouseCounter extends Component {
  state = {
    name: "Dikshit"
  };
  render() {
    console.log("MouseCounter Comp");
    const { count, incrementCount } = this.props;
    return (
      <div>
        <h1 onMouseOver={incrementCount}>Hovered {count} times</h1>
        <h1>{this.state.name}</h1>
        <h1>Props name {this.props.name}</h1>
      </div>
    );
  }
}
export default withCounter(MouseCounter);

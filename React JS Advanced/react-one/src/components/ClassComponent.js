import React, { Component } from "react";
import ChildComp from "./ChildComp";

export default class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Ajay"
    };
    console.log("constructor executed");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("gdsfp");
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    // console.log(nextProps);
    // console.log(nextState);
    // console.log(this.state);
    // console.log(this.props);

    if (this.state.name === nextState.name) {
      return false;
    } else {
      return true;
    }
  }

  changeName = () => {
    this.setState({
      name: "Sujith"
    });
  };
  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    console.log("gsbu props", prevProps);
    console.log("gsbu ", prevState);
    return "Hello";
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("cdu state", prevState);
    console.log("snapshot ", snapshot);
  }

  render() {
    console.log("render executed");
    return (
      <div>
        <h1>{this.state.name}</h1>
        <button onClick={this.changeName}>Click</button>
        <ChildComp parentState={this.state}/>
      </div>
    );
  }

  componentDidMount() {
    console.log("cdm executed");
  }

  componentWillUnmount() {
    console.log("comp will unmount");
  }
}

import React, { Component } from "react";

export default class ChildComp extends Component {
  constructor(props) {
    super(props);
    console.log("child constructor executed");
  }

  static getDerivedStateFromProps(props, state) {
    console.log(" child gdsfp");
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("child scp");
    return true;
  }

  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    console.log("child gsbu props", prevProps);
    console.log("child gsbu ", prevState);
    return "Hello";
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("child cdu state", prevState);
    console.log("child snapshot ", snapshot);
  }

  render() {
    console.log("child render executed");
    return (
      <div>
        <h1>Child Component</h1>
        <h1>{this.props.parentState.name}</h1>
      </div>
    );
  }

  componentDidMount() {
    console.log("child cdm executed");
  }

  componentWillUnmount() {
    console.log("child comp will unmount");
  }
}

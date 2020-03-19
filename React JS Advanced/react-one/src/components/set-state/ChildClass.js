import React, { Component } from "react";

export default class ChildClass extends Component {
  state = {
    count: 10
  };

  increaseCount = () => {
    /* this.setState({
      count: this.state.count + 5
    }); */

    /*  this.setState(
      {
        count: this.state.count + 5
      },
      () => {
        this.props.action(this.state.count);
      }
    ); */

    this.setState(
      prevState => {
        return {
          count: prevState.count + 5
        };
      },
      () => {
        this.props.action(this.state.count);
      }
    );
  };

  render() {
    return (
      <div>
        <h1>Child count : {this.state.count}</h1>
        <button onClick={this.increaseCount}>Increase Count</button>
      </div>
    );
  }
}

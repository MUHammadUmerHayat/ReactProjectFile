import React, { Component } from "react";

function withCounter(OriginalComponent) {
  console.log("withCounter hoc");
  class NewComponent extends React.Component {
    state = {
      count: 0
    };
    incrementCount = () => {
      this.setState({
        count: this.state.count + 1
      });
    };

    render() {
      return (
        <OriginalComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
          {...this.props}
        />
      );
    }
  }

  return NewComponent;
}

export default withCounter;

import React, { Component } from "react";
import withCounter from "../hoc/withCounter";

class InputCounter extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <input value={count} onChange={incrementCount} />
      </div>
    );
  }
}

export default withCounter(InputCounter);

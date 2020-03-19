import React from "react";
import withCounter from "../hoc/withCounter";

function ButtonCounter(props) {
  const { count, incrementCount } = props;

  return (
    <div>
      <button onClick={incrementCount}>Clicked {count} times</button>
    </div>
  );
}
export default withCounter(ButtonCounter);

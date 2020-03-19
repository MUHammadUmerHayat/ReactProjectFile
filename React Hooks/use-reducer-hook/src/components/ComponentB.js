import React, { useContext } from "react";
import CounterContext from "../context-api/counterContext";

function ComponentB() {
    console.log("Component B")
  const user = useContext(CounterContext);
  return (
    <div>
      <h1>Name - {user.state.firstName}</h1>
      <h1>Count - {user.state.count}</h1>
      <button
        onClick={() => {
          user.dispatch({
            type: "increment",
            payload: {
              firstName: "Nikhil",
              count: 10
            }
          });
        }}
      >
        Click
      </button>
    </div>
  );
}
export default React.memo(ComponentB)
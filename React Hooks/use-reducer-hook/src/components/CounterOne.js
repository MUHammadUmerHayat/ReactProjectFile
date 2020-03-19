import React, { useReducer } from "react";

export default function CounterOne() {
  const intialState = 0;

  function reducer(prevState, action) {
    console.log("action", action);
    switch (action.type) {
      case "increment":
        return prevState + action.payload;
      case "decrement":
        return prevState - action.payload;
      case "reset":
        return action.payload;
      default:
        return intialState;
    }
  }
  const [state, dispatch] = useReducer(reducer, intialState);
  return (
    <div>
      <h1>Count - {state}</h1>
      <button
        onClick={() => {
          dispatch({
            type: "increment",
            payload: 5
          });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({
            type: "decrement",
            payload: 5
          });
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch({
            type: "reset",
            payload: 0
          });
        }}
      >
        Reset
      </button>
    </div>
  );
}

import React, { useReducer } from "react";

export default function Counter() {
  const intialState = 0;

  function reducer(prevState, action) {
    console.log("action", action);
    if (action === "increment") {
      return prevState + 5;
    } else if (action === "decrement") {
      return prevState - 5;
    } else {
      return 20;
    }
  }
  const [state, dispatch] = useReducer(reducer, intialState);
  return (
    <div>
      <h1>Count - {state}</h1>
      <button
        onClick={() => {
          dispatch("increment");
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch("decrement");
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch("reset");
        }}
      >
        Reset
      </button>
    </div>
  );
}

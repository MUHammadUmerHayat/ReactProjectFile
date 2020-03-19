import React, { useState } from "react";
import useCounter from "../custom-hooks/useCounter";

export default function CounterOne() {
  const [count, incrementCount, decrementCount, reset] = useCounter(10);
  return (
    <div>
      <h1>Count - {count}</h1>
      <button onClick={incrementCount}>Increment Count</button>
      <button onClick={decrementCount}>Decrement Count</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

import React, { useState } from "react";

function useCounter(c) {

  const [count, setCount] = useState(c);

  const incrementCount = () => {
    setCount(count + 5);
  };
  const decrementCount = () => {
    setCount(count - 5);
  };

  const reset = () => {
    setCount(0);
  };

  return [count,incrementCount,decrementCount,reset]
}
export default useCounter
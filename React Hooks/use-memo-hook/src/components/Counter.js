import React, { useState, useCallback, useMemo } from "react";

export default function Counter() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(10);

  const incrementCounterOne = () => {
    setCounterOne(counterOne + 1);
  };
  const incrementCounterTwo = () => {
    setCounterTwo(counterTwo + 5);
  };
  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    console.log("IsEven rendering");

    return counterOne % 2 === 0;
  }, [counterOne]);
  return (
    <div>
      <button onClick={incrementCounterOne}>Counter One - {counterOne}</button>
      <button onClick={incrementCounterTwo}>Counter Two - {counterTwo}</button>
      <h1>{isEven ? "Even" : "Odd"}</h1>
    </div>
  );
}

import React, { useEffect, useState } from "react";

export default function UseEffectOne() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("use effect called, component mounted");

    return () => {
      console.log("use effect,component unmounted");
    };
  }, []);

  useEffect(() => {
    if (count !== 0) {
      console.log("use effect, component update ");
    }
  }, [count]);

  useEffect(() => {
    if (name) {
      console.log("use effect, component update name updating");
    }
  }, [name]);
  const setCountValue = () => {
    setCount(prevCount => {
      return prevCount + 1;
    });
  };
  return (
    <div>
      <h1>Use Effect Demo</h1>
      <h1>{count}</h1>
      <h1>{name}</h1>

      <button onClick={setCountValue}>Increase Count</button>
      <button
        onClick={() => {
          setName("Akshay");
        }}
      >
        Change Name
      </button>
    </div>
  );
}

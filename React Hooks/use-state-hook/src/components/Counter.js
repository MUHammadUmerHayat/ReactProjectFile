import React, { useState, Children } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);
  return (
    <div>
      <h1>Count - {count}</h1>
      <button
        onClick={() => {
          setCount(count + 5);
        }}
      >
        Increment Count
      </button>
      {show ? <h1>Admin</h1> : <h1>User</h1>}
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
       Show
      </button>
    </div>
  );
}

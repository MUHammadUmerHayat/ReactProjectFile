import React, { useState, useEffect } from "react";
import useTitle from "../custom-hooks/useTitle";

export default function TitleOne() {
  const [count, setCount] = useState(0);

  useTitle(count)

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 5);
        }}
      >Title One-  {count}</button>
      
    </div>
  );
}

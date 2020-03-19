import React from "react";
// import add from "../calculator/add";

export default function Calculator() {
  const addData = () => {
    import("../calculator/add").then(calculator => {
      const sum = calculator.add(12, 18);
      console.log(sum);
    });
  };
  return (
    <div>
      <button onClick={addData}>Add</button>
    </div>
  );
}

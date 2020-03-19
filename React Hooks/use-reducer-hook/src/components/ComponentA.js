import React from "react";
import ComponentB from "./ComponentB";

function ComponentA() {
  console.log("Component A");
  return (
    <div>
      <ComponentB />
    </div>
  );
}
export default React.memo(ComponentA);

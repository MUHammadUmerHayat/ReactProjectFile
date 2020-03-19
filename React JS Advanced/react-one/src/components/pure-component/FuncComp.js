import React from "react";

function FuncComp(props) {
  console.log("func comp executed");
  return (
    <div>
      <h1>{props.username}</h1>
    </div>
  );
}

export default React.memo(FuncComp);

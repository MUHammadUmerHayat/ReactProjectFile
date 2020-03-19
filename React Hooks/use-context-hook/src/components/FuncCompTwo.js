import React, { useContext } from "react";
import UserContext from "../context-api/userContext";

export default function FuncCompTwo() {
  const context = useContext(UserContext);

  return (
    <div>
      <h1>{context}</h1>
    </div>
  );
}

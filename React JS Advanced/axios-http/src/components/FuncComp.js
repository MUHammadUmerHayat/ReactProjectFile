import React from "react";
import { withRouter } from "react-router-dom";

function FuncComp(props) {
  const navigateToShow = () => {
    console.log(props);
    props.history.push("/show")
  };
  return (
    <div>
      <button onClick={navigateToShow}>Go to Show</button>
    </div>
  );
}
export default withRouter(FuncComp);

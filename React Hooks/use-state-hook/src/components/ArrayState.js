import React, { useState } from "react";

export default function ArrayState() {
  const actors = ["Deepika", "Anushka", "Leela", "Sagar"];

  const [actorsData, setActorsData] = useState(actors);

  const changeSecondActor = () => {
    const actorsD = [...actorsData];
    actorsD[1] = "Yamini";
    setActorsData(actorsD);
  };
  return (
    <div>
      <ul>
        {actorsData.map(actor => {
          return <li key={actor}>{actor}</li>;
        })}
      </ul>
      <button onClick={changeSecondActor}>Change</button>
    </div>
  );
}

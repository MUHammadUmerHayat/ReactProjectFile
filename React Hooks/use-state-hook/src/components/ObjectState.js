import React, { useState } from "react";

export default function ObjectState() {
  const person = {
    id: 1,
    name: "Chinnu",
    age: 20
  };
  const [personData, setPersonData] = useState(person);
  const changeName = () => {
    setPersonData({
        ...personData,
        name: "Guru"
        } 
          );
  };

  return (
    <div>
      <h1>Name - {personData.name}</h1>
      <p>Age - {personData.age}</p>
      <button onClick={changeName}>Change Name</button>
    </div>
  );
}

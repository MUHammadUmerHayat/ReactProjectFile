import React from "react";

export default function DetailView({ selected }) {
  return (
    <div>
      <h1>{selected.id}</h1>
      <p>{selected.name}</p>
      <p>{selected.age}</p>
    </div>
  );
}

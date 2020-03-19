import React from "react";

export default function ListView(props) {
  return (
    <ul>
      {props.persons.map(person => {
        return (
          <div
            onClick={() => {
              props.action(person);
            }}
            key={person.id}
          >
            <li>{person.name}</li>
            <li>{person.age}</li>
            <hr></hr>
          </div>
        );
      })}
    </ul>
  );
}

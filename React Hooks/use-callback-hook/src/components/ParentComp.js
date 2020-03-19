import React, { useState, useCallback } from "react";
import Title from "./Title";
import Count from "./Count";
import Button from "./Button";

export default function ParentComp() {
  const [age, setAge] = useState(20);
  const [salary, setSalary] = useState(25000);

  const incrementAge = useCallback(() => {
    setAge(age + 5);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 10);
  }, [salary]);

  return (
    <div>
      <Title />
      <Count text="Age" data={age} />
      <Button handleClick={incrementAge} text="Age">
        Incremet Age
      </Button>
      <Count text="Salary" data={salary} />
      <Button handleClick={incrementSalary} text="Salary">
        Incremet Salary
      </Button>
    </div>
  );
}

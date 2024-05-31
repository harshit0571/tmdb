import React from "react";
import { usePerson } from "../context/PersonContext";
import PersonContainer from "../components/Person/PersonContainer";

const Person = () => {
  const { person } = usePerson();
  console.log(person);
  return (
    <div>
      <PersonContainer />
    </div>
  );
};

export default Person;

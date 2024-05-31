import React from "react";
import PersonContainer from "../components/Person/PersonContainer";
import ScrollPerson from "../components/Person/ScrollPerson";

const Person = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <PersonContainer />
      <ScrollPerson />
    </div>
  );
};

export default Person;

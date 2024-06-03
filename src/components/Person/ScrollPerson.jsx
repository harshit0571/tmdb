import React from "react";
import { usePerson } from "../../context/PersonContext";
import PersonCard from "./PersonCard";

const ScrollPerson = () => {
  const { personCredits } = usePerson();

  return (
    <div className="w-full flex relative justify-center items-center transition-full duration-200">
      <div className="flex gap-5 overflow-auto pb-3 ">
        {personCredits?.cast?.map(
          (cast) => cast.poster_path && <PersonCard cast={cast} key={cast.id} />
        )}
      </div>
      <div className="absolute top-0 right-0 h-full w-10 bg-gradient-to-l from-white pointer-events-none"></div>
    </div>
  );
};

export default ScrollPerson;

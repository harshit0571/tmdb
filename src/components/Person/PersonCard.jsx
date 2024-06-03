import React from "react";
import { usePerson } from "../../context/PersonContext";

const PersonCard = ({ cast }) => {
  return (
    <div className="flex flex-col">
      <img
        src={"https://image.tmdb.org/t/p/w300/" + cast.poster_path}
        className=" rounded-xl w-[130px] h-[195px] min-w-[130px]"
      />
    </div>
  );
};

export default PersonCard;

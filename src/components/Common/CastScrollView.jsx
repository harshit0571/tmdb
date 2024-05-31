import React from "react";
import CastCard from "./CastCard";

const CastScrollView = ({ casts }) => {
  return (
    <div className="w-full flex relative justify-center pr-5 items-center transition-full duration-200">
      <div className="flex gap-5 overflow-auto  ">
        {casts?.map(
          (cast) =>
            cast.profile_path && (
              <CastCard
                profile_path={cast.profile_path}
                name={cast.name}
                character={cast.character || cast.job}
                key={cast.id}
              />
            )
        )}
      </div>
      <div className="absolute top-0 right-0 h-full w-10 bg-gradient-to-l from-white pointer-events-none"></div>
    </div>
  );
};

export default CastScrollView;

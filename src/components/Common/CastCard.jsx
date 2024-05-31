import React from "react";

const CastCard = ({ profile_path,name,character }) => {
  return (
    <div className="flex rounded-xl shadow-md flex-col hover:shadow-lg hover:bg-gray-100 gap-5 border-2 border-gray-200 w-[150px] card-transition mb-6 min-h-[300px]">
      <div className="relative bg-no-repeat bg-cover bg-center object-cover object-center rounded-xl w-full">
        <img
          src={"https://image.tmdb.org/t/p/original/" + profile_path}
          className=" rounded-t-xl min-w-[138px] w-full h-[175px]"
        />
      </div>

      <div className="px-2">
        <p className="font-bold">{name}</p>
        <p className="text-gray-400 text-sm">
          {character}
        </p>
      </div>
    </div>
  );
};

export default CastCard;

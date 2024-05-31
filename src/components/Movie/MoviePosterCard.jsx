import React from "react";

const MoviePosterCard = ({poster_path, provider_logo, provider_name}) => {
  return (
    <div className="flex flex-col w-max">
      <img
        src={"https://image.tmdb.org/t/p/original/" + poster_path}
        className="h-[225px] md:h-[350px] lg:h-[450px] rounded-t-lg"
      />
      <div className="w-ful bg-darkBlue p-2 gap-4 rounded-b-lg flex justify-center items-center">
        <img
          src={
            "https://image.tmdb.org/t/p/original/" +
            provider_logo
          }
          className="w-[35px] h-[35px] rounded-md"
        />
        <div className="cursor-pointer">
          <p className="text-gray-300">available now on</p>
          <p className="text-white">{provider_name}</p>
        </div>
      </div>
    </div>
  );
};

export default MoviePosterCard;

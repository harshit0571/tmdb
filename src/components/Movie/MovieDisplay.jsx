import React from "react";

const MovieDisplay = ({ movie }) => {
  return (
    <div
      className="w-full bg-darkBlue h-[600px] mb-5 mt-5 justify-center background-bottom-right relative"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
      }}
    >
      <div className="w-[70%] flex h-full "></div>
    </div>
  );
};

export default MovieDisplay;

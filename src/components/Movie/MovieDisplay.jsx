import React from "react";
import MoviePosterCard from "./MoviePosterCard";

const MovieDisplay = ({ movie, providers }) => {
  console.log(providers);
  return (
    <div
      className="w-full bg-darkBack p-10 mb-5 mt-5 background-bottom-right relative flex justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
      }}
    >
      <div className="w-[70%] z-50 flex h-full">
        <MoviePosterCard
          provider_logo={providers?.buy[0]?.logo_path}
          provider_name={providers?.buy[0]?.provider_name}
          poster_path={movie.poster_path}
        />
      </div>
    </div>
  );
};

export default MovieDisplay;

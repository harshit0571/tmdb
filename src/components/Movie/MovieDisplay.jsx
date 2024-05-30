import React from "react";
import MoviePosterCard from "./MoviePosterCard";
import MovieInfo from "./MovieInfo";

const MovieDisplay = ({ movie, providers }) => {
  console.log(providers);
  return (
    <div
      className="w-full bg-darkBack p-10 mb-5  background-bottom-right relative flex justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
      }}
    >
      <div className="w-[70%] flex h-full gap-10">
        <MoviePosterCard
          provider_logo={providers?.buy[0]?.logo_path}
          provider_name={providers?.buy[0]?.provider_name}
          poster_path={movie.poster_path}
        />
        <MovieInfo
          title={movie.original_title}
          date={movie.release_date}
          genres={movie.genres}
          runtime={movie.runtime}
          percentage={Math.round(movie.vote_average * 10 || 10)}
        />
      </div>
    </div>
  );
};

export default MovieDisplay;

import React, { useEffect, useState } from "react";
import MoviePosterCard from "./MoviePosterCard";
import MovieInfo from "./MovieInfo";

const MovieDisplay = ({ movie, providers }) => {
  const [isScreenSmall, setIsScreenSmall] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsScreenSmall(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const backgroundImageStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
  };
  return (
    <div
      className="w-full bg-darkBack p-5 md:p-10 mb-5  background-bottom-right relative flex justify-center items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
      }}
    >
      <div className="w-[100%] lg:w-[80%] xl:w-[70%] flex h-max md:gap-10 md:flex-row flex-col items-center">
        <div
          className="w-full md:w-max moviecard bg-cover"
          style={isScreenSmall ? backgroundImageStyle : {}}
        >
          <MoviePosterCard
            provider_logo={providers?.buy?.length>0 && providers?.buy[0]?.logo_path}
            provider_name={providers?.buy?.length>0 && providers?.buy[0]?.provider_name}
            poster_path={movie.poster_path}
          />
        </div>
        <MovieInfo
          title={movie.original_title}
          date={movie.release_date}
          genres={movie.genres}
          runtime={movie.runtime}
          percentage={Math.round(movie.vote_average * 10 || 10)}
          tagline={movie.tagline}
          overview={movie.overview}
        />
      </div>
    </div>
  );
};

export default MovieDisplay;

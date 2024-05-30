import React, { useEffect, useState } from "react";
import MovieDisplay from "../components/Movie/MovieDisplay";
import { useParams } from "react-router-dom";
import axios from "axios";
import { apiLink } from "../api";

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        apiLink +
          "/movie/" +
          id +
          `?language=en-US&api_key=${import.meta.env.VITE_TMDB_KEY}`
      );
      console.log(res.data);
      setMovie(res.data);
    };
    getData();
  }, []);
  return (
    <div className="h-full w-full">
      <MovieDisplay movie={movie} />
    </div>
  );
};

export default Movie;

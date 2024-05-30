import React, { useEffect, useState } from "react";
import MovieDisplay from "../components/Movie/MovieDisplay";
import { useParams } from "react-router-dom";
import axios from "axios";
import { apiLink } from "../api";

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [providers, SetProviders] = useState([]);
  const getLists = async (api, setState) => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/${api}&api_key=${
          import.meta.env.VITE_TMDB_KEY
        }`
      );
      setState(res.data);
    } catch (error) {
      console.error("Error fetching the list:", error);
    }
  };
  useEffect(() => {
    const getData = async () => {
      await getLists(`movie/${id}?language=en-US`, setMovie);
      await getLists(`movie/${id}/watch/providers?language=en-U`, SetProviders);
    };
    getData();
  }, []);
  return (
    <div className="h-full w-full">
      <MovieDisplay movie={movie} providers={providers?.results?.US} />
      
    </div>
  );
};

export default Movie;

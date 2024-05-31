import React, { useEffect, useState } from "react";
import MovieDisplay from "../components/Movie/MovieDisplay";
import { useParams } from "react-router-dom";
import axios from "axios";
import CastScrollView from "../components/Common/CastScrollView";

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [providers, setProviders] = useState([]);
  const [casts, setCasts] = useState([]);
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
      await getLists(`movie/${id}/watch/providers?language=en-U`, setProviders);
      await getLists(`movie/${id}/credits?language=en-U`, setCasts);
    };
    getData();
  }, []);
  return (
    <div className="h-full w-full">
      <MovieDisplay movie={movie} providers={providers?.results?.US} />
      <div className="w-[90%] md:w-[70%] m-auto">
        <p className=" text-2xl text-slate-700 py-3">Top Billed Cast</p>
        <CastScrollView casts={casts?.cast?.slice(0, 10)} />
      </div>
    </div>
  );
};

export default Movie;

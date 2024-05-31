import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Person from "../pages/Person";

const PersonContext = createContext();
export const usePerson = () => {
  return useContext(PersonContext);
};
const PersonProvider = ({ children }) => {
  const { id } = useParams();
  const [person, setPerson] = useState(null);
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
  console.log(person);
  useEffect(() => {
    const getData = async () => {
      await getLists(`movie/${id}?language=en-US`, setPerson);
    };
    getData();
  }, []);
  return (
    <PersonContext.Provider value={{ person }}>
      {children}
    </PersonContext.Provider>
  );
};

export default PersonProvider;

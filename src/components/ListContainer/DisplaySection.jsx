import React, { act, useEffect, useState } from "react";
import TabButtons from "./TabButtons";
import ScrollView from "./ScrollView";
import axios from "axios";
import { apiLink } from "../../api";

const DisplaySection = ({ title, tabs, data }) => {
  const [active, setActive] = useState(0);
  const [lists, setLists] = useState([]);
  useEffect(() => {
    const getLists = async () => {
      const res = await axios.get(
        apiLink + tabs[active].api + `&api_key=${import.meta.env.VITE_TMDB_KEY}`
      );
      console.log(res.data.results);
      setLists(res.data.results);
    };
    getLists();
  }, [active]);
  return (
    <div className="w-[100%] lg:w-[90%] xl:w-[75%] flex flex-col mt-5 gap-10 items-center">
      <div className="flex w-[90%] md:items-baseline gap-5 md:flex-row flex-col justify-center md:justify-normal items-center">
        <h1 className="font-bold text-2xl text-slate-700">{title}</h1>
        <TabButtons data={tabs} active={active} setActive={setActive} />
      </div>
      <ScrollView data={lists} />
    </div>
  );
};

export default DisplaySection;

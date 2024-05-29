import React from "react";
import TabButtons from "./TabButtons";
import ScrollView from "./ScrollView";

const DisplaySection = () => {
  const data = [
    { name: "movies" },
    { name: "tv shows" },
    { name: "live shows" },
  ];

  return (
    <div className="w-[100%] lg:w-[90%] xl:w-[75%] flex flex-col mt-5 gap-10 items-center">
      <div className="flex w-[90%] md:items-baseline gap-5 md:flex-row flex-col justify-center md:justify-normal items-center">
        <h1 className="font-bold text-2xl text-slate-700">Trending</h1>
        <TabButtons data={data} />
      </div>
      <ScrollView />
    </div>
  );
};

export default DisplaySection;

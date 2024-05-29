import React from "react";
import Card from "./Card";

const ScrollView = ({ data }) => {
  return (
    <div className="w-full flex relative justify-center items-center transition-full duration-200">
      <div className="flex gap-5 overflow-auto pb-3 px-10 ">
        {data.map((card) => (
          <Card key={data.id} data={card} />
        ))}
      </div>
      <div className="absolute top-0 right-0 h-full w-10 bg-gradient-to-l from-white pointer-events-none"></div>
    </div>
  );
};

export default ScrollView;

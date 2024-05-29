import React from "react";
import Card from "./Card";

const ScrollView = ({ data }) => {
  return (
    <div className="w-full mb-5 flex justify-center items-center transition-full duration-200">
      <div className="flex gap-5 overflow-auto pb-3 px-10">
        {data.map((card) => (
          <Card key={data.id} data={card} />
        ))}
      </div>
    </div>
  );
};

export default ScrollView;

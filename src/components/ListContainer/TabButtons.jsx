import React from "react";
import { useState } from "react";

const TabButtons = ({data}) => {
  const [active, setActive] = useState(0);

  return (
    <div className=" border-2 w-max rounded-3xl border-black">
      {data.map((tab, index) => (
        <button
          className={
            "p-1 text-black min-w-[100px]  cursor-pointer transition-all duration-500 border-black " +
            (index == 0 && " rounded-l-3xl ") +
            (index == data.length - 1 && "  rounded-r-3xl ") +
            (active == index &&
              " bg-darkBlue  rounded-r-3xl text-green-300  border-l-black rounded-l-3xl")
          }
          onClick={() => {
            setActive(index);
          }}
        >
          {tab.name}
        </button>
      ))}
    </div>
  );
};

export default TabButtons;

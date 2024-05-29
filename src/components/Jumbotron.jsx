import React from "react";
import oscar from "../assets/oscar.svg";

export const Jumbotron = () => {
  return (
    <div className="w-[100%] md:w-[75%] bg-red-200">
      <div className="flex flex-col p-5 justify-center items-center w-full py-10 gap-10">
        <div className="flex flex-col p-5 justify-center items-start w-[100%] md:w-[95%]">
          <h1 className="text-4xl md:text-5xl text-white">Welcome</h1>
          <p className="text-xl md:text-3xl text-white">
            Millions of movies, TV shows and people to discover. Explore now.
          </p>
        </div>
        <input type="text" className="w-[95%] py-3 rounded-3xl mb-[50px]" />
      </div>

      <div className="bg-blueGradient w-full flex flex-col p-10 gap-7 md:items-start items-center">
        <img src={oscar} className="w-[25%] min-w-[150px]" />
        <button className=" w-max p-2 px-4 text-white ring-2 ring-white rounded-3xl hover:ring-blue-400 hover:bg-white hover:text-blue-400">
          View the winners{" "}
          <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
};

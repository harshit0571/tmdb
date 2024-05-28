import React from "react";

const Navbar = () => {
  return (
    <div className="w-full bg-darkBlue text-white flex justify-center">
      <div className="w-full lg:w-[70%] flex md:justify-between p-5 md:items-baseline md:flex-row flex-col items-center md:gap-0 gap-5">
        <div className="flex items-center gap-5">
          <div className="flex items-center">
            <p className="text-3xl tracking-wide font-bold text-transparent bg-clip-text bg-gradient">
              TMDB{" "}
            </p>
            <span className="ml-4 inline-block w-[50px] h-5 bg-gradient-to-r from-cyan-500 to-cyan-300 rounded-lg"></span>
          </div>
          <div className="hidden gap-3 md:flex">
            <p className="cursor-pointer hover:bg-gradient hover:text-transparent hover:bg-clip-text">
              Movies
            </p>
            <p className="cursor-pointer hover:bg-gradient hover:text-transparent hover:bg-clip-text">
              TV Shows
            </p>
            <p className="cursor-pointer hover:bg-gradient hover:text-transparent hover:bg-clip-text">
              People
            </p>
            <p className="cursor-pointer hover:bg-gradient hover:text-transparent hover:bg-clip-text">
              More
            </p>
          </div>
        </div>

        <div className="flex gap-7 items-baseline text-xl">
          <i
            class="fa fa-bookmark hover:text-teal-400 cursor-pointer"
            aria-hidden="true"
          ></i>
          <i
            class="fa fa-heart hover:text-teal-400 cursor-pointer"
            aria-hidden="true"
          ></i>
          <i
            class="fa fa-bell hover:text-teal-400 cursor-pointer"
            aria-hidden="true"
          ></i>
          <div className="bg-gray-400 h-[30px] w-[30px] min-h-[25px] min-w-[25px] text-xl rounded-full transition-all hover:bg-gradient text-center pt-[0.9] text-white cursor-pointer">
            H
          </div>
          <i
            class="fa fa-search text-blue-400 text-2xl hover:text-teal-400 cursor-pointer"
            aria-hidden="true"
          ></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

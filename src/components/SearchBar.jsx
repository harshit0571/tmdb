import React, { useState } from "react";

const SearchBar = () => {
  const [showTrending, setShowTrending] = useState(true);
  const [showSearches, setShowSearches] = useState(true);
  return (
    <div className="w-full flex-col absolute top-0 items-center bg-white border-b-2 border-y-slate-200 text-slate-500 flex justify-center">
      <div className="w-[100%] lg:w-[85%] xl:w-[70%] italic py-3 px-10 gap-5">
        <i
          class="fa fa-search text-black hover:text-teal-400 cursor-pointer"
          aria-hidden="true"
        ></i>
        <input
          type="text"
          className="md:w-[95%] w-[85%]  outline-none px-5"
          placeholder="search for a movie"
        />
        <i
          class="fa fa-times cursor-pointer"
          aria-hidden="true"
          onClick={() => {
            setShowSearches(!showSearches);
          }}
        ></i>
      </div>

      {showSearches && (
        <div className="w-full flex-col justify-center items-center">
          {showTrending && (
            <div className=" bg-gray-50 m-auto p-1  sm:px-10 ">
              <p className="w-[95%] lg:w-[85%] xl:w-[65%] m-auto md:text-2xl text-xl text-black font-bold">
                <i class="fa fa-line-chart mr-2" aria-hidden="true"></i>
                Trending
              </p>
            </div>
          )}

          <div className=" bg-white m-auto p-1 flex flex-col justify-center items-center">
            <div className="w-full border-b-2 border-slate-100 py-1  sm:px-10 ">
              <p className="w-[95%] lg:w-[85%] max-h-[30px] whitespace-nowrap overflow-x-auto xl:w-[65%] m-auto text-black italic">
                <i
                  class="fa fa-search text-black hover:text-teal-400 cursor-pointer mr-2"
                  aria-hidden="true"
                ></i>{" "}
                Trending
              </p>
            </div>
            <div className="w-full border-b-2 border-slate-100 py-1  sm:px-10 ">
              <p className="w-[95%] lg:w-[85%] max-h-[30px] whitespace-nowrap overflow-x-auto xl:w-[65%] m-auto text-black italic">
                <i
                  class="fa fa-search text-black hover:text-teal-400 cursor-pointer mr-2"
                  aria-hidden="true"
                ></i>{" "}
                Trending
              </p>
            </div>{" "}
            <div className="w-full border-b-2 border-slate-100 py-1  sm:px-10 ">
              <p className="w-[95%] lg:w-[85%] max-h-[30px] whitespace-nowrap overflow-x-auto xl:w-[65%] m-auto text-black italic">
                <i
                  class="fa fa-search text-black hover:text-teal-400 cursor-pointer mr-2"
                  aria-hidden="true"
                ></i>{" "}
                Trending
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;

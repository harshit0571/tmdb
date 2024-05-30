import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useDebounce } from "../hooks/DebounceHook";

const SearchBar = () => {
  const [showTrending, setShowTrending] = useState(true);
  const [showSearches, setShowSearches] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [searchesArray, setSearchesArray] = useState([]);
  const searchBarRef = useRef(null);
  const debouncedSearch = useDebounce(searchValue);

  const getLists = async (api) => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/${api}&api_key=${
          import.meta.env.VITE_TMDB_KEY
        }`
      );
      const limitedResults = res.data.results.slice(0, 10);
      setSearchesArray(limitedResults);
    } catch (error) {
      console.error("Error fetching the list:", error);
    }
  };
  const handleInputChange = async (event) => {
    const { value } = event.target;
    setSearchValue(value);
    setShowTrending(value === "");
  };

  const handleClickOutside = (event) => {
    if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
      setShowSearches(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const setLists = async () => {
      if (debouncedSearch === "") {
        getLists("trending/all/day?language=en-US");
      } else {
        getLists(`search/multi?query=${debouncedSearch}&page=1`);
      }
    };
    setLists();
  }, [debouncedSearch]);

  return (
    <div
      ref={searchBarRef}
      className="w-full flex-col z-50  absolute top-0 items-center bg-white border-b-2 border-y-slate-200 text-slate-500 flex justify-center"
    >
      <div className="w-[100%] lg:w-[85%] xl:w-[70%] italic py-3 px-10 gap-5">
        <i
          className="fa fa-search text-black hover:text-teal-400 cursor-pointer"
          aria-hidden="true"
        ></i>
        <input
          type="text"
          className="md:w-[95%] w-[85%]  outline-none px-5"
          placeholder="search for a movie"
          value={searchValue}
          onChange={(e) => {
            handleInputChange(e);
            setShowSearches(true);
          }}
        />
        <i
          className="fa fa-times cursor-pointer"
          aria-hidden="true"
          onClick={() => {
            setShowTrending(true);
            setSearchValue("");
          }}
        ></i>
      </div>

      {showSearches && (
        <div className="w-full flex-col justify-center items-center">
          {showTrending && (
            <div className=" bg-gray-50 m-auto p-1 block  sm:px-10 ">
              <p className="w-[95%] lg:w-[85%] xl:w-[65%] m-auto md:text-2xl text-xl text-black font-bold">
                <i className="fa fa-line-chart mr-2" aria-hidden="true"></i>
                Trending
              </p>
            </div>
          )}

          <div className="m-auto p-1 flex flex-col justify-center items-center overflow-auto">
            {searchesArray.length < 1 ? (
              <>no search results</>
            ) : (
              searchesArray.map((search) => {
                return (
                  <div
                    className="w-full border-b-2 border-slate-100 bg-white py-1 sm:px-10 z-50"
                    key={search.id}
                  >
                    <p className="w-[95%] lg:w-[85%] max-h-[30px] whitespace-nowrap overflow-x-auto xl:w-[65%] m-auto text-black italic">
                      <i
                        className="fa fa-search text-black hover:text-teal-400 cursor-pointer mr-2"
                        aria-hidden="true"
                      ></i>{" "}
                      {search.name ? search.name : search.title}
                    </p>
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;

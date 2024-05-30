import React from "react";
import Loader from "./Loader";

const Card = ({ data, loading }) => {
  return (
    <>
      {loading ? (
        <div className="flex flex-col gap-10 min-w-[170px]">
          <Loader />
        </div>
      ) : (
        <div className="flex flex-col gap-5 min-w-[170px] card-transition">
          <div
            className="relative h-[225px] w-[150px] bg-no-repeat bg-cover bg-center object-cover object-center rounded-xl "
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original/${data.backdrop_path})`,
            }}
          >
            <img
              src={"https://image.tmdb.org/t/p/original/" + data.backdrop_path}
              className=" rounded-xl h-full absolute top-0 "
            />
          </div>

          <div>
            <p className="font-bold">
              {data.media_type == "tv" ? data.name : data.title}
            </p>
            <p className="text-gray-400 text-sm">
              {data.media_type == "tv"
                ? data.first_air_date
                : data.release_date}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;

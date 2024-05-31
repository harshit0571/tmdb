import React from "react";
import Loader from "./Loader";
import { Link } from "react-router-dom";

const Card = ({ data, loading, page }) => {
  console.log(data);
  return (
    <>
      {loading ? (
        <div className="flex flex-col gap-10 min-w-[170px]">
          <Loader />
        </div>
      ) : (
        <Link to={data?.title? `/movie/${data.id}`:`/tv/${data.id}`}>
          <div className="flex flex-col gap-5 min-w-[170px] card-transition w-full">
            <div className="relative bg-no-repeat bg-cover bg-center object-cover object-center rounded-xl w-full">
              <img
                src={
                  "https://image.tmdb.org/t/p/original/" + data.poster_path
                }
                className=" rounded-xl w-[200px]"
                style={{ height: "calc(150px * 1.5)" }}
              />
            </div>

            <div>
              <p className="font-bold">{data.name || data.title}</p>
              <p className="text-gray-400 text-sm">
                {data.first_air_date || data.release_date}
              </p>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default Card;

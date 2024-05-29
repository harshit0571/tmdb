import React from "react";

const Card = ({ data }) => {
  return (
    <div className="flex flex-col gap-5 min-w-[170px] card-transition">
      <img
        src={"https://image.tmdb.org/t/p/w500/" + data.backdrop_path}
        className="h-[225px] w-[150px] rounded-xl"
      />

      <div>
        <p className="font-bold">
          {data.media_type == "tv" ? data.name : data.title}
        </p>
        <p className="text-gray-400 text-sm">
          {data.media_type == "tv" ? data.first_air_date : data.release_date}
        </p>
      </div>
    </div>
  );
};

export default Card;

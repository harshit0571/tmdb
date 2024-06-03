import React from "react";

const SavedCard = ({ card, removeCard }) => {
  return (
    <li
      key={card.id}
      className="flex flex-col md:flex-row items-start p-4 bg-white rounded-lg shadow-md w-full md:w-[60%]"
    >
      <img
        src={"https://image.tmdb.org/t/p/original/" + card.img}
        alt={card.name}
        className="w-full md:w-32 h-[350px] md:h-48 rounded-lg mb-4 md:mb-0"
      />
      <div className="md:ml-4">
        <h2 className="text-xl font-bold">{card.name}</h2>
        <p className="text-gray-500 text-sm">{card.date}</p>
        <p className="text-gray-700 mt-2">{card.overview}</p>
      </div>
      <div className="flex items-center py-2">
        {/* <i className="fa fa-heart text-red-500 mr-4 cursor-pointer"></i> */}
        <i
          className="fa fa-trash text-gray-500 cursor-pointer"
          onClick={() => {
            removeCard(card.id);
          }}
        ></i>
      </div>
    </li>
  );
};

export default SavedCard;

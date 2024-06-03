import React from "react";
import { useFavorites } from "../context/FavouritesContext";

const Favorites = () => {
  const { favorites, removeFavourite } = useFavorites();
  return (
    <div className="p-4 flex flex-col items-center min-h-[400px] md:min-h-[700px]">
      <div className="flex items-center mb-4">
        <i className="fa fa-heart text-xl text-red-500 mr-2"></i>
        <h1 className="text-2xl font-bold">My Favorites</h1>
      </div>
      {favorites.length === 0 ? (
        <div className="flex flex-col items-center">
          <img
            src="https://img.freepik.com/premium-vector/nothing-here-flat-illustration_418302-77.jpg"
            alt="Empty Favorites"
            className="w-[450px] mb-4"
          />
          <p className="text-darkBlue font-bold text-2xl text-center">
            Nothing to show! Add to your Favorites.
          </p>
        </div>
      ) : (
        <ul className="space-y-4 w-full flex justify-center items-center flex-col">
          {favorites.map((favorite) => (
            <li
              key={favorite.id}
              className="flex flex-col md:flex-row items-start p-4 bg-white rounded-lg shadow-md w-full md:w-[60%]"
            >
              <img
                src={"https://image.tmdb.org/t/p/original/" + favorite.img}
                alt={favorite.name}
                className="w-full md:w-32 h-[350px] md:h-48 rounded-lg mb-4 md:mb-0"
              />
              <div className="md:ml-4">
                <h2 className="text-xl font-bold">{favorite.name}</h2>
                <p className="text-gray-500 text-sm">{favorite.date}</p>
                <p className="text-gray-700 mt-2">{favorite.overview}</p>
              </div>
              <div className="flex items-center py-2">
                <i
                  className="fa fa-trash text-gray-500 cursor-pointer"
                  onClick={() => {
                    removeFavourite(favorite.id);
                  }}
                ></i>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Favorites;

import React, { useEffect } from "react";
import { useBookmark } from "../context/BookmarksContext";
import NotFound from "../components/WatchList/NotFound";
import SavedCard from "../components/WatchList/Savedcard";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Bookmark = () => {
  const { bookmarks, removeBookmark } = useBookmark();
  const { user } = useAuth();
  const navigation = useNavigate();

  useEffect(() => {
    const checkUser = () => {
      if (!user) {
        navigation("/login");
      }
    };
    checkUser();
  }, [user]);

  return (
    <div className="p-4 flex flex-col items-center min-h-[400px] md:min-h-[700px]">
      <div className="flex items-center mb-4">
        <i className="fa fa-bookmark text-xl mr-2"></i>
        <h1 className="text-2xl font-bold">My Watch List</h1>
      </div>
      {bookmarks.length === 0 ? (
        <NotFound title="Watch List" />
      ) : (
        <ul className="space-y-4 w-full flex justify-center items-center flex-col">
          {bookmarks.map((bookmark) => (
            <SavedCard
              key={bookmark.id}
              card={bookmark}
              removeCard={removeBookmark}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Bookmark;

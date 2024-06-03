import React, { createContext, useContext, useEffect, useState } from "react";

const BookmarksContext = createContext();
export const useBookmark = () => {
  return useContext(BookmarksContext);
};
const BookmarksProvider = ({ children }) => {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const fetchBookmarks = () => {
      const storedBookmarks = localStorage.getItem("bookmarks");
      if (storedBookmarks) {
        setBookmarks(JSON.parse(storedBookmarks));
      }
    };
    fetchBookmarks();
  }, []);

  const addBookmark = (bookmark) => {
    const updatedBookmarks = [...bookmarks, bookmark];
    setBookmarks(updatedBookmarks);
    localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
  };
  const removeBookmark = (bookmarkToRemove) => {
    const updatedBookmarks = bookmarks.filter(
      (bookmark) => bookmark.id !== bookmarkToRemove.id
    );
    setBookmarks(updatedBookmarks);
    localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
  };

  return (
    <BookmarksContext.Provider value={{ bookmarks, setBookmarks, addBookmark, removeBookmark }}>
      {children}
    </BookmarksContext.Provider>
  );
};

export default BookmarksProvider;

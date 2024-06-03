import React from "react";
import {
  Route,
  Routes,
  BrowserRouter as Router,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Movie from "./pages/Movie";
import PersonWrapper from "./wrapper/PersonWrapper";
import Login from "./pages/Login";
import AuthProvider from "./context/AuthContext";
import Bookmark from "./pages/Bookmark";
import BookmarksProvider from "./context/BookmarksContext";
import Favourites from "./pages/Favourites";
import FavoritesProvider from "./context/FavouritesContext";
import TV from "./pages/TV";

const AppContent = () => {
  const location = useLocation();
  const showNavbarAndFooter = location.pathname !== "/login";

  return (
    <>
      {showNavbarAndFooter && <Navbar />}
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/person/:id" element={<PersonWrapper />} />
        <Route path="/login" element={<Login />} />
        <Route path="/watchlist" element={<Bookmark />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/tv/:id" element={<TV />} />
      </Routes>
      {showNavbarAndFooter && <Footer />}
    </>
  );
};

const App = () => (
  <AuthProvider>
    <BookmarksProvider>
      <FavoritesProvider>
        <Router>
          <AppContent />
        </Router>
      </FavoritesProvider>
    </BookmarksProvider>
  </AuthProvider>
);

export default App;

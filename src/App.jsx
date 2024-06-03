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
        <Route path="/bookmark" element={<Bookmark />} />
      </Routes>
      {showNavbarAndFooter && <Footer />}
    </>
  );
};

const App = () => (
  <AuthProvider>
    <BookmarksProvider>
      <Router>
        <AppContent />
      </Router>
    </BookmarksProvider>
  </AuthProvider>
);

export default App;

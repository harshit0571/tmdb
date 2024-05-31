import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Movie from "./pages/Movie";
import PersonWrapper from "./wrapper/PersonWrapper";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/movie/:id" element={<Movie />} />
        <Route index path="/person/:id" element={<PersonWrapper />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

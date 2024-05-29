import React from "react";
import Navbar from "../components/Navbar";
import { Jumbotron } from "../components/Jumbotron";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Navbar />
      <Jumbotron />
    </div>
  );
};

export default Home;

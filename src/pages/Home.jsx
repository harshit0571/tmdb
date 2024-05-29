import React from "react";
import Navbar from "../components/Navbar";
import { Jumbotron } from "../components/Jumbotron";
import TabButtons from "../components/ListContainer/TabButtons";
import DisplaySection from "../components/ListContainer/DisplaySection";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Navbar />
      <Jumbotron />
      <DisplaySection />
      
    </div>
  );
};

export default Home;

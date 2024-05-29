import React from "react";
import Navbar from "../components/Navbar";
import { Jumbotron } from "../components/Jumbotron";
import DisplaySection from "../components/ListContainer/DisplaySection";

const Home = () => {
  const data2 = ["", "", "", "", "", "", "", ""];
  return (
    <div className="flex flex-col justify-center items-center">
      <Navbar />
      <Jumbotron />
      <DisplaySection
        title="Trending"
        tabs={[
          { name: "today", api: "/trending/all/day?language=en-US" },
          { name: "this week", api: "/trending/all/week?language=en-US" },
        ]}
        data={data2}
      />
    </div>
  );
};

export default Home;

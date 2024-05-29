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

      <DisplaySection
        title="What's Popular"
        tabs={[
          { name: "movies", api: "/movie/popular?language=en-US&page=1" },
          { name: "on tv", api: "/tv/popular?language=en-US&page=1" },
          {
            name: "in theatre",
            api: "/movie/now_playing?language=en-US&page=1",
          },
        ]}
        data={data2}
      />
    </div>
  );
};

export default Home;

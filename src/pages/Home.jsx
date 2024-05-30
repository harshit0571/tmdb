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
          { name: "Today", api: "/trending/all/day?language=en-US" },
          { name: "This Week", api: "/trending/all/week?language=en-US" },
        ]}
        data={data2}
      />

      <DisplaySection
        title="What's Popular"
        tabs={[
          { name: "Movies", api: "/movie/popular?language=en-US&page=1" },
          { name: "On tv", api: "/tv/popular?language=en-US&page=1" },
          {
            name: "In theatre",
            api: "/movie/now_playing?language=en-US&page=1",
          },
        ]}
        data={data2}
      />
      <DisplaySection
        title="Free to watch"
        tabs={[
          { name: "Movies", api: "/movie/popular?language=en-US&page=1" },
          { name: "TV", api: "/tv/popular?language=en-US&page=1" },
        ]}
        data={data2}
      />
    </div>
  );
};

export default Home;

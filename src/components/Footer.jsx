import React from "react";

const Footer = () => {
  return (
    <div className="bg-darkBlue w-full h-max p-10 gap-10 flex md:flex-row flex-col justify-center items-center">
      <div className="flex flex-col gap-6">
        <img
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
          className="w-[150px]"
        />
        <div className="py-2 px-5 bg-white  w-max rounded-lg text-cl text-cyan-400 font-bold">
          Hi Harshit!
        </div>
      </div>

      <div className="flex md:flex-row flex-col flex-wrap gap-10">
        <div className="flex flex-col text-white">
          <h1 className="font-bold">THE BASICS</h1>
          <p>About TMDB</p>
          <p>Contect Us</p>
          <p>Support Forums</p>
          <p>API</p>
          <p>System Status</p>
        </div>
        <div className="flex flex-col text-white">
          <h1 className="font-bold">GET INVOLVED</h1>
          <p>Contribution Bible</p>
          <p>Add New Movie</p>
          <p>Add New TV Show</p>
        </div>
        <div className="flex flex-col text-white">
          <h1 className="font-bold">COMMUNITY</h1>
          <p>Guidelines</p>
          <p>Discussions</p>
          <p>Leaderboard</p>
        </div>
        <div className="flex flex-col text-white">
          <h1 className="font-bold">LEGAL</h1>
          <p>Terms Of Use</p>
          <p> API Terms of Use</p> <p>Privacy Policy</p>
          <p>DMCA Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

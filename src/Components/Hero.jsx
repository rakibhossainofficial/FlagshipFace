import React from "react";

const Hero = () => {
  return (
    <>
      <div className="py-12 ">
        <img className="w-1/3 mx-auto" src="../public/images/banner.png" />

        <div className="text-center space-y-4 ">
          <h1 className="font-thin text-7xl">Browse, Search, View, Buy</h1>
          <p className="text-gray-500 ">
            Best place to browse, search, view details and purchase of top
            flagship phones of the current time - FlagshipFaceOff
          </p>

          <form className="flex-col md:flex-row p-3 items-center justify-center my-5">
            <input
              className=" w-2/3 p-4 text-[17px] shadow-sm  h-12 rounded-md border-gray-500 focus:outline-none focus:shadow-outline  mr-3 mt-0"
              type="search"
              placeholder="Search Phone By Name"
              required
            />

            <button className="px-4 text-white shadow-sm cursor-pointer h-12 bg-indigo-600 rounded-lg ">Search</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Hero;

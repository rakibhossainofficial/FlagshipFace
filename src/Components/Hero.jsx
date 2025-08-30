import React, { useState } from "react";

const Hero = ({ handleSearch }) => {
  const [searchText, setSearchText] = useState("");
  // console.log(searchText);

  return (
    <>
      <div className="py-12 ">
        <img className="md:w-1/3 mx-auto" src="/images/banner.png" />

        <div className="text-center space-y-4 ">
          <h1 className="text-5xl font-thin md:text-7xl">
            Browse, Search, View, Buy
          </h1>
          <p className="text-gray-500 ">
            Best place to browse, search, view details and purchase of top
            flagship phones <br /> of the current time - FlagshipFaceOff
          </p>

          <form
            onSubmit={(e) => {
              handleSearch(e, searchText);

              setSearchText("");
            }}
            className="flex  gap-3 w-full md:flex-row  items-center justify-center my-5"
          >
            <input
              onChange={(e) => setSearchText(e.target.value)}
              value={searchText}
              className="w-full md:w-2/3 p-4 text-[17px] shadow-sm  h-12 rounded-md border border-gray-500 focus:outline-none focus:shadow-outline  mr-3 mt-0"
              type="search"
              placeholder="Search Phone By Name"
              required
            />

            <button
              type="submit"
              className="px-4 text-white shadow-sm cursor-pointer h-12 bg-indigo-600 rounded-lg "
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Hero;

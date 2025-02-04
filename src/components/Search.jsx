import React from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
const Search = () => {
  return (
    <>
      <section className="flex-grow flex items-center gap-2 tablet:max-w-sm mobile:max-w-[12rem] max-[428px]:w-12 max-[428px]:justify-center max-[376px]:mr-14 max-[321px]:mr-16">
        <input
          type="search"
          placeholder="Search the products"
          className="relative flex-grow outline-none bg-gray-800 border border-white rounded-full px-8 py-2 text-sm placeholder:text-white placeholder:font-thin"
        />
        <button className="absolute text-white rounded-full h-10 px-2 flex items-center justify-center max-[428px]:h-8">
          <SearchRoundedIcon />
        </button>
      </section>
    </>
  );
};

export default Search;

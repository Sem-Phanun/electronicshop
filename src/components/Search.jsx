import React from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
const Search = () => {
  return (
    <>
      <section className="flex-grow flex items-center gap-2 max-w-md tablet:max-w-sm mobile:max-w-[12rem] small:w-6">
        <input
          type="search"
          placeholder="Search for products"
          className="flex-grow outline-none border border-blue-400 rounded-l-full h-10 pl-4 text-sm text-gray-500 small:h-8 small:placeholder:text-[.9rem] small:placeholder:pl-2"
        />
        <button className="bg-blue-400 text-white rounded-r-full h-10 px-4 flex items-center justify-center small:h-8 small:px-1">
          <SearchRoundedIcon />
        </button>
      </section>
    </>
  );
};

export default Search;

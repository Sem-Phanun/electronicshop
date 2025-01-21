import React from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
const Search = () => {
  return (
    <>
      <section className="flex-grow flex items-center gap-2 tablet:max-w-sm mobile:max-w-[12rem] max-[428px]:w-12 max-[428px]:justify-center max-[376px]:mr-14 max-[321px]:mr-16">
        <input
          type="search"
          placeholder="Search for products"
          className="flex-grow outline-none border border-primary rounded-l-full h-12 pl-2 text-sm text-gray-500 max-[428px]:h-8 small:placeholder:text-[.9rem] small:placeholder:pl-2"
        />
        <button className="bg-primary text-white rounded-r-full h-12 px-2 flex items-center justify-center max-[428px]:h-8">
          <SearchRoundedIcon />
        </button>
      </section>
    </>
  );
};

export default Search;

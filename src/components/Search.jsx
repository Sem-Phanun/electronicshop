import React, { useEffect, useState } from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import SearchResultList from "./SearchResultList";
import { categories } from "../data/data";
const Search = ({setToggleSearchBox, toggleSearchBox}) => {
  const [query, setQuery] = useState('')
  const [result, setResult] = useState([])
  const [isMobile, setIsMobile] = useState(false);

  // Check if the screen size is mobile
  const checkIfMobile = () => {
    setIsMobile(window.innerWidth <= 884); // Mobile screen width threshold
  };

  useEffect(()=> {
    checkIfMobile()
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile); 
  }, [])

  const searchHandler = (event) => {
    const value = event.target.value
    setQuery(value)

    if(value.trim() === ''){
      setResult([])
      return
    }else {
      const results = categories.filter((item)=>
        item.name.toLowerCase().includes(value.toLowerCase())
      )
      setResult(results)
      console.log(result)
    }
  }

  // const helperFilter = (query, like) => {
  //   let i = 0;
  //   for (let j = 0; j < like.length; j++) {
  //     if (query[i] === like[j]) {
  //       i++;
  //     }
  //   }
  //   return i === query.length;
  // };
  
  const handleToggleSearchBox = () => {
    if (query === '') {
      setToggleSearchBox(false); // Hide the search box if it's empty on mobile
    } else {
      setToggleSearchBox(!toggleSearchBox); // Toggle visibility if not empty
    }

  }
  // Handle mouse enter and leave events (only for mobile)
  const handleMouseEnter = () => {
    if (isMobile) setToggleSearchBox(true); // Keep search box visible when mouse enters on mobile
  };

  const handleMouseLeave = () => {
    if (isMobile && query === '') {
      setToggleSearchBox(false); // Hide search box if empty and mouse leaves (on mobile)
    }
  };

  return (
    <>
      <section className="flex-grow flex items-center gap-2 tablet:max-w-sm mobile:max-w-[12rem] max-[428px]:w-12 max-[428px]:justify-center max-[376px]:mr-14 max-[321px]:mr-16"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <input type="search"
          onChange={searchHandler}
          value={query}
          placeholder="Search the products"
          className={`relative flex-grow outline-none ${!toggleSearchBox ?'max-[884px]:hidden' : `max-[768px]:block`} bg-gray-800 border border-white rounded-full px-8 py-2 text-sm placeholder:text-white placeholder:font-thin`}
        />
        <button onClick={handleToggleSearchBox}  className={`absolute text-white rounded-full ${toggleSearchBox ? '-translate-x-[22rem]': 'translate-x-0'} h-10 px-2 flex items-center justify-center max-[884px]:ml-[22rem] max-[834px]:ml-[21rem] max-[768px]:ml-[20rem] max-[428px]:ml-[6rem] transition-all duration-300 ease-in-out`}>
          <SearchRoundedIcon/>
        </button>
      </section>
      <SearchResultList  setResult={setResult} setQuery={setQuery} result={result}/>
    </>
  );
};

export default Search;

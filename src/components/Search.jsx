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
      console.log(toggleSearchBox)
      setToggleSearchBox(!toggleSearchBox); // Toggle visibility if not empty

  }

  return (
    <>
      <section className="flex-grow flex items-center gap-2 max-w-sm max-[428px]:w-12 max-[375px]:mr-14 max-[320px]:mr-16"
      >
        <input type="search"
          onChange={searchHandler}
          value={query}
          placeholder="Search the products"
          className={`relative w-[40rem] ${!toggleSearchBox ? 'max-[800px]:hidden' : 'max-[768px]:inline-block'} outline-none bg-gray-800 border-white border-2 rounded-full px-8 py-2 text-sm placeholder:text-white placeholder:font-semibold max-[428px]:w-[12rem] max-[428px]:-mx-44 max-[428px]:placeholder:text-[12px] max-[320px]:ml-14 max-[320px]:w-[10rem] max-[320px]:placeholder:text-[8px]`}
        />
        <button onClick={handleToggleSearchBox} className={`absolute text-white rounded-full ${toggleSearchBox ? 'max-[768px]:-translate-x-[20rem] -translate-x-[22rem] max-[428px]:-translate-x-[9.5rem] max-[320px]:-translate-x-[6.8rem]': 'translate-x-0'} h-10 px-2 flex items-center justify-center max-[884px]:ml-[22rem] max-[834px]:ml-[21rem] max-[768px]:ml-[20rem] max-[428px]:ml-[6rem] transition-all duration-300 ease-in-out translate-x-0 max-[884px]:translate-auto`}>
          <SearchRoundedIcon/>
        </button>
      </section>
      <main className="absolute -right-48 shadow-lg rounded-md z-50">
        <SearchResultList  setResult={setResult} setQuery={setQuery} result={result}/>
      </main>
    </>
  );
};

export default Search;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import Icon from "./Icon";
const Header = () => {
    const [toggleSearchBox, setToggleSearchBox] = useState(false)

  return (
    <>
        <header className="w-full bg-gray-800 p-4 shadow-sm sticky top-0 z-50">
            <nav className="flex items-center mx-24 justify-between gap-4 max-[884px]:justify-evenly max-[884px]:mx-12  max-[428px]:mx-2 max-[376px]:-mx-1">
                {/* Logo */}
                <div className="w-20 mr-20 tablet:w-16 flex-shrink-0  max-[428px]:w-12  max-[321px]:w-12">
                    <Link to="/" className="">
                        <h1 className="text-white text-3xl text-bold max-[428px]:text-sm">BrightShop</h1>
                    </Link> 
                </div>

                {/* Search Bar */}
                <Search setToggleSearchBox={setToggleSearchBox} toggleSearchBox={toggleSearchBox}/>

                <Icon/>
            </nav>
        </header>
    </>
  );
};

export default Header;

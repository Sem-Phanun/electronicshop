import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Search from "./Search";
import Icon from "./Icon";
const Header = () => {
    const [toggleSearchBox, setToggleSearchBox] = useState(false)

  return (
    <>
        <header className="w-full bg-gray-800 p-4 shadow-sm sticky top-0 z-50">
            <nav className="flex items-center mx-24 justify-between gap-4 max-[884px]:justify-evenly max-[884px]:mx-12  max-[428px]:mx-2 max-[376px]:-mx-1 max-[320px]:gap-0">
                <div>
                    <FaBars/>
                </div>
                {/* Logo */}
                <div className="w-20 mr-20 tablet:w-16 flex-shrink-0  max-[428px]:w-12  max-[321px]:w-12">
                    <Link to="/" className="">
                        <h1 className="text-white text-3xl text-bold max-[428px]:text-sm">BShop</h1>
                    </Link> 
                </div>

                {/* Search Bar */}
                <main className="relative flex-1 flex justify-center">
                    <Search setToggleSearchBox={setToggleSearchBox} toggleSearchBox={toggleSearchBox}/>
                </main>

                {/* Icons */}
                <main className="flex items-center gap-4 max-[320px]:gap-2">
                    <Icon/>
                </main>
            </nav>
        </header>
    </>
  );
};

export default Header;

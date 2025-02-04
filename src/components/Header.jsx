import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import Icon from "./Icon";
const Header = () => {
  return (
    <>
        <header className="w-full bg-gray-800 p-4 shadow-sm sticky top-0 z-50">
            <nav className="flex items-center mx-24 justify-between gap-4 tablet:px-[3%] max-[428px]:mx-2 max-[376px]:-mx-1">
                {/* Logo */}
                <div className="w-20 mr-20 tablet:w-16 flex-shrink-0  max-[428px]:w-12  max-[321px]:w-12">
                    <Link to="/" className="">
                        <h1 className="text-white text-3xl text-bold">BrightShop</h1>
                    </Link> 
                </div>

                {/* Search Bar */}
                <Search/>

                <Icon/>
            </nav>
        </header>
    </>
  );
};

export default Header;

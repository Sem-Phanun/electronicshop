import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import Search from "./Search";
const Header = () => {
  return (
    <>
        <header className="w-full bg-white p-4 shadow-sm sticky top-0 z-50">
            <nav className="flex flex-wrap items-center mx-24 justify-between gap-4 tablet:px-[3%] max-[428px]:mx-2 max-[376px]:-mx-1">
                {/* Logo */}
                <div className="w-20 mr-20 tablet:w-16 flex-shrink-0  max-[428px]:w-12  max-[321px]:w-12">
                    <Link to="/" className="flex items-center gap-2">
                        <img src={Logo} alt="Logo"/>
                    </Link>
                </div>

                {/* Search Bar */}
                <Search/>
            </nav>
        </header>
    </>
  );
};

export default Header;

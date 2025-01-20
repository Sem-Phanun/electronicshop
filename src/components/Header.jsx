import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import Search from "./Search";
import UserType from "./UserType";
const Header = () => {
  return (
    <>
        <header className="w-full bg-white p-4 shadow-sm sticky top-0 z-50">
            <nav className="flex flex-wrap items-center justify-between gap-4 px-[5%] tablet:px-[3%] mobile:px-2">
                {/* Logo */}
                <div className="w-20 tablet:w-16 flex-shrink-0 mobileM:w-10 small:w-10">
                    <Link to="/" className="flex items-center gap-2">
                        <img src={Logo} alt="Logo"/>
                    </Link>
                </div>

                {/* Search Bar */}
                <Search/>
                {/* Icons */}
                <UserType/>
            </nav>
        </header>

    </>
  );
};

export default Header;

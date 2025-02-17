import React from 'react'
import { navbar } from '../data/data'
import { NavLink } from 'react-router-dom'
import { categories } from '../data/data'
import { TbCategoryFilled } from "react-icons/tb";
import { MdKeyboardArrowDown } from "react-icons/md";
const Navbar = () => {


  return (
    <>
        <nav className='bg-gray-800 text-white p-2 flex items-center justify-center gap-4'>
          <ul className='flex gap-4'>
            <li className='w-52 max-[884px]:w-40'>
              <span className='flex items-center gap-2'><span><TbCategoryFilled/></span> Category <span><MdKeyboardArrowDown/></span></span>
            </li>
            <li className='w-52 max-[884px]:w-40'>
              <NavLink to={""}>Best Sellers</NavLink>
            </li>
            <li className='w-52 max-[884px]:w-40'>
              <NavLink to={""}>Top Rated</NavLink>
            </li>
            <li className='w-52 max-[884px]:w-40'>
              <NavLink to={""}>New Arrivals</NavLink>
            </li>
          </ul>
        </nav>
    </>
  )
}

export default Navbar
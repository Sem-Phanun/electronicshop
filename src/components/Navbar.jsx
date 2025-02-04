import React from 'react'
import { navbar } from '../data/data'
import { NavLink } from 'react-router-dom'
const Navbar = () => {


  return (
    <>
      {/* <nav className='w-full bg-cyan-500 p-4 shadow-md'>
        <ul className='flex justify-evenly px-12 text-white'>
          {
            navbar.map((item, index)=> {
              return (
                <li key={index} className="group relative">
                  <NavLink to={item.route}
                    className={({ isActive }) =>
                      `flex flex-col items-center space-y-1 transition-all duration-300 ease-in-out ${
                        isActive ? "text-orange-400" : "hover:hover:text-orange-400"
                      }`
                    }>
                    {item.icon && (
                      <item.icon className="text-2xl group-hover:scale-110 transition-transform duration-300 max-[428px]:text-sm" />
                    )}
                    <p className='hidden group-hover:block absolute top-10 bg-neutral-dark text-white text-sm rounded-md px-2 py-1'>{item.name}</p>
                  
                  </NavLink>
                </li>
              )
            })
          }
        </ul>
      </nav> */}
    </>
  )
}

export default Navbar
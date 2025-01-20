import React, { useState } from 'react'
import { navbar } from '../data/data'
import { NavLink } from 'react-router-dom'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
const Navbar = () => {

  const [toggle, setToggle] = useState(false)

  return (
    <>
      <nav className='w-full bg-blue-400 p-4'>
        <ul className='flex justify-between px-12 text-white max-[428px]:block'>
          {
            navbar.map((item, index)=> {
              return (
                <li key={index}>
                  <NavLink to={item.route}>
                    {item.name}
                  </NavLink>
                </li>
              )
            })
          }
        </ul>
      </nav>
    </>
  )
}

export default Navbar
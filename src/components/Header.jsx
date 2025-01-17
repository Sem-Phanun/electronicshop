import React from 'react'
import { Link } from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import Logo from '../assets/Logo.png'
const Header = () => {
  return (
    <>
        <header className="w-full bg-white p-4 shadow-sm sticky top-0 z-50 tablet:p-2 tablet:w-screen">
            <nav className='flex justify-center items-center self-stretch gap-4 p-0 px-[9%] tablet:w-max-[100rem]'>
                <li className='mr-auto w-4 tablet:w-[70px]'>
                    <Link to='/'>
                        <img src={Logo} alt="logo" />
                    </Link>
                </li>
                <li className='flex w-8 mr-[40%] items-center gap-4 p-0 px-4 tablet:w-40 tablet:mr-[20%]'>
                    <input type="search" 
                        placeholder='search something....'
                        className='outline-none w-[20rem] p-[0.5rem] border border-blue-400 rounded-l-2xl gap-4 tablet:'    
                    />
                    <span className='bg-blue-400 rounded-r-2xl h-[40px] ml-[-.9rem] px-2'><SearchRoundedIcon className='gap-4 text-white mt-2 cursor-pointer'/></span>
                </li>
                <li><AccountCircleIcon className='text-slate-400'/></li>
                <li><FavoriteRoundedIcon className='text-slate-400'/></li>
                <li><LocalMallRoundedIcon className='text-slate-400'/></li>
            </nav>
        </header>
    </>
  )
}

export default Header

import React from 'react'
import { Link } from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const Header = () => {
  return (
    <>
        <header className="bg-white p-2 shadow-sm sticky top-0 z-50">
            <nav className='flex justify-center items-center gap-8 py-2 align-middle'>
                <figure className='mr-auto w-16'>
                    <Link to='/'>
                        <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt="logo" className="w-10 h-10" />
                    </Link>
                </figure>
                <section className='flex justify-center items-center gap-4 mr-24 h-5 px-6'>
                    <input type="search" 
                        placeholder='search something....'
                        className='outline-none px-2 py-1 border border-blue-400 rounded-l-md w-72'    
                    />
                    <span>search</span>
                </section>
                <li><AccountCircleIcon/></li>
                <li>heart</li>
                <li>account</li>
            </nav>
        </header>
    </>
  )
}

export default Header


// display: flex;
// height: 20px;
// padding: 0px 15px;
// justify-content: center;
// align-items: center;
// gap: 2px;
// margin-right: 6rem;
// outline: none;
// padding: 0.5rem;
// border-radius: 20px 0px 0px 20px;
// border: 1px solid #319dff;
// width: 24rem;
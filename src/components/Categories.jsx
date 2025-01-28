import React from 'react'
import Ip16 from '../assets/Ip16promax.png'
import { FaLongArrowAltRight } from "react-icons/fa";
import { categories } from '../data/data';
import { Link } from 'react-router-dom';
const Categories = () => {
  return (
    <>
        <section className='bg-slate-300'>
            <header className='mx-4 px-20 my-4 py-4'>
                <h1 className='font-bold text-2xl'>Categories</h1>
            </header>

            <main className='flex flex-wrap items-center px-20'>
                {
                    categories.map((category, index) => {
                        return (
                            <div key={index} className='mx-4 p-4 bg-slate-100 my-4 h-[17rem] w-60 rounded-2xl shadow-lg hover:shadow-xl transition duration-300'>
                                <header className='text-center'>
                                    <h1 className='text-sm font-semibold text-gray-800'>{category.name}</h1>
                                </header>
                                <figure className='mt-4'>
                                    <img src={category.image} alt="" className='h-40 rounded-lg mx-auto'/>
                                </figure>
                                <footer className='mt-2 flex justify-end'>
                                    <Link to={category.route} className='p-2 bg-gray-300 rounded-full hover:bg-gray-200'>
                                        <FaLongArrowAltRight className='text-white hover:text-gray-500'/>
                                    </Link>
                                </footer>
                            </div>
                        )
                    })
                }
                {/* <div className='mx-4 p-4 bg-slate-100 my-4 h-[18rem] w-60 rounded-2xl shadow-lg hover:shadow-xl transition duration-300'>
                    <header className='text-center'>
                        <h1 className='text-sm font-semibold text-gray-800'>PC set</h1>
                    </header>
                    <figure className='mt-4'>
                        <img src={Ip16} alt="" className='h-40 rounded-lg mx-auto'/>
                    </figure>
                    <footer className='mt-4 flex justify-end'>
                        <button className='p-2 bg-gray-300 rounded-full hover:bg-gray-200'>
                            <FaLongArrowAltRight className='text-white hover:text-gray-300'/>
                        </button>
                    </footer>
                </div> */}
            </main>
        </section>
    </>
  )
}

export default Categories
import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import { categories } from '../data/data';
import { Link } from 'react-router-dom';
const Categories = () => {
  return (
    <>
        <section className='bg-slate-300 py-8'>
            <header className='mx-4 px-20'>
                <h1 className='font-bold text-2xl'>Categories</h1>
            </header>

            <main className='flex flex-wrap justify-center items-center px-20'>
                {
                    categories.map((category, index) => {
                        return (
                            <Link to={category.route} key={index} className='mx-4 p-4 bg-slate-100 my-4 h-[14rem] w-60 rounded-2xl shadow-lg hover:shadow-xl transition duration-300'>
                                <header className='text-center'>
                                    <h1 className='text-sm font-semibold text-gray-800'>{category.name}</h1>
                                </header>
                                <figure className='mt-4'>
                                    <img src={category.image} alt="" className='h-[8rem] rounded-lg mx-auto'/>
                                </figure>
                                <footer className='mt-1 flex justify-end'>
                                    <Link to={category.route} className='p-2 bg-gray-300 rounded-full hover:bg-gray-200'>
                                        <FaLongArrowAltRight className='text-white hover:text-gray-500'/>
                                    </Link>
                                </footer>
                            </Link>
                        )
                    })
                }
            </main>
        </section>
    </>
  )
}

export default Categories
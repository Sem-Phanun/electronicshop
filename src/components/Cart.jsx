import React from 'react'
import { IoCloseOutline } from "react-icons/io5";
const Cart = ({ setIsHiddenCart }) => {
  return (
    <>
        {/* Overlay Background */}
        <div
            className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
            onClick={() => setIsHiddenCart(false)} // Clicking outside closes cart
        ></div>
        <section
            className={`fixed top-0 right-0 h-full w-96 bg-white shadow-lg p-6 transform translate-x-0 transition-transform duration-300`}
            onClick={(e) => e.stopPropagation()}
        >
            <main className='flex items-center border-b pb-2'>
                <h2 className='text-lg font-semibold'>My Cart</h2>
                <IoCloseOutline className="translate-x-64 text-2xl cursor-pointer"
                    onClick={() => setIsHiddenCart(false)}
                />
            </main>
        
        </section>
    </>
  )
}

export default Cart
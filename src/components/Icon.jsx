import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import Cart from './Cart';
const Icon = () => {
  const [isHiddenCart, setIsHiddenCart] = useState(false)

  return (
    <>
        <section className='flex items-center gap-8 relative max-[390px]:gap-6 max-[320px]:gap-4'>
          <li>
            <Link to={"/account"}>
              <FaUser className='text-white hover:text-gray-300 hover:ease-linear'/>
            </Link>
          </li>
          <li>
            <FaShoppingCart className='text-white hover:text-gray-300 hover:ease-linear'
              onClick={()=>setIsHiddenCart(!isHiddenCart)} 
            />
          </li>
        </section>

        {isHiddenCart && <Cart setIsHiddenCart={setIsHiddenCart} />}
    </>
  )
}

export default Icon
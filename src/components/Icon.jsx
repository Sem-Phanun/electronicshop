import React from 'react'
import Account from './Account'
import Cart from './Cart'
import { Link } from 'react-router-dom'

const Icon = () => {
  return (
    <>
        <section className='flex items-center gap-4'>
            <li>
                <Link>
                    <Account/>
                </Link>

            </li>
            <Cart/>
        </section>
    </>
  )
}

export default Icon
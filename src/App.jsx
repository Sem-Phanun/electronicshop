import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SmartPhone from './pages/SmartPhone'
import LaptopAndPc from './pages/LaptopAndPc'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Category from './pages/Category'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'
import Account from './pages/Account'
const App = () => {
  return (
    <>
      <Header/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/category' element={<Category/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
        <Route path='/cart' element={<Cart/>} />
        <Route path='/account' element={<Account/>}/>
        <Route path='*' element={"NotFound"}/>
      </Routes>
    </>
  )
}

export default App
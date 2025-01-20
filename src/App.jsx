import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop'
import TvAndAudio from './pages/TvAndAudio'
import SmartPhone from './pages/SmartPhone'
import LaptopAndPc from './pages/LaptopAndPc'
import Accessory from './pages/Accessory'
import Header from './components/Header'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <>
      <Header/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/tvandaudio' element={<TvAndAudio/>}/>
        <Route path='/laptopandpcs' element={<LaptopAndPc/>} />
        <Route path='/smartphones' element={<SmartPhone/>}/>
        <Route path='/accessory' element={<Accessory/>}/>
        <Route path='*' element={"NotFound"}/>
      </Routes>
    </>
  )
}

export default App
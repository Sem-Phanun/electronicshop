import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='*' element={"NotFound"}/>
      </Routes>
    </>
  )
}

export default App
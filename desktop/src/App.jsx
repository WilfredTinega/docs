import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Outlet, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Services from './Pages/Services'
import NotFound from './Pages/NotFound'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App
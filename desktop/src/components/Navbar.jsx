import React, { useEffect, useState } from 'react'
import {NavLink, Link} from "react-router-dom"

const Navbar = () => {

    const [visible, setVisible] = useState(false)

  return (
    <div className='flex flex-row justify-evenly items-center bg-gray-800 text-gray-50'>
        <NavLink className='text-2xl text-amber-300' to="/">Logo</NavLink>

        {/** Desktop*/}
        <div className='hidden md:flex gap-2 items-center justify-between'>
            <ul className='flex flex-row justify-between items-center gap-2 text-2xl capitalize' >
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/services">Services</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contacts</NavLink>
                </li>
            </ul>
        </div>
        
        <span onClick={()=>{setVisible(true)}} className='md:hidden font-serif' >List</span>

        {/** mobile*/}
        <div className={`fixed top-0 bottom-0 left-0 right-0 bg-gray-950 min-h-screen ${visible ? "translate-x-0" : "translate-x-full"}`}>
            <div onClick={()=>setVisible(false)}>
                back
            </div>
            <hr />
            <ul className='flex-row justify-between items-center gap-2' >
                <li>
                    <NavLink onClick={()=>setVisible(false)} to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink onClick={()=>setVisible(false)} to="/services">Services</NavLink>
                </li>
                <li>
                    <NavLink onClick={()=>setVisible(false)} to="/contact">Contacts</NavLink>
                </li>
            </ul>
        </div>
        
    </div>
  )
}

export default Navbar
import React from 'react'

const Footer = () => {

    const today = new Date().getFullYear();
  return (
    <div className='flex flex-col-reverse bg-gray-800 text-gray-50 font-bold justify-center items-center gap-4'>
        <div>
            &copy;{today} Cast LTD
        </div>
        
        <ul className="flex items-center justify-between gap-3 capitalize ">
            <li><a href="/">x</a></li>
            <li><a href="home">facebook</a></li>
            <li><a href="/about">glassdoor</a></li>
            <li><a href="/services">telephone</a></li>
        </ul>
    </div>
  )
}

export default Footer
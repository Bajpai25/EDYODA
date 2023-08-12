import React from 'react'
import {AiOutlineDown,AiOutlineSearch} from "react-icons/ai"
function Header() {
  return (
    <div className='bg-white flex flex-col md:flex-row justify-between'>
     <div className='flex flex-col md:flex-row justify-between'>
        <p className='mt-2 ml-8 top-0 left-0 text-transparent bg-gradient-to-r from-blue-600 to-blue-400 
        bg-clip-text text-blue-600 tracking-[0.03em] font-black text-4xl'>
        EDYODA
        </p>
        <p className='mt-5 ml-20 mr-4 font-sans text-xl font-semibold'>Courses</p>
        <AiOutlineDown className=' mt-6 text-lg '></AiOutlineDown>
        <p className=' mt-5 ml-20 mr-4 font-sans text-xl  font-semibold'>Programs</p>
        <AiOutlineDown className=' mt-6 text-lg '></AiOutlineDown>
     </div>
     <div className='flex flex-col md:flex-row justify-between'>
    <AiOutlineSearch className=' mt-6 text-lg '></AiOutlineSearch>
    <p className='mt-5 ml-20 mr-4 font-sans text-xl font-semibold '>Log in</p>
    <button className='mt-3 ml-20 mr-4 mb-2 [background:linear-gradient(266.79deg,_#0048ff,_#0096ff)]
     text-white font-bold 
    h-10 rounded-full w-40'>JOIN NOW</button>
     </div>   
    </div>
  )
}

export default Header
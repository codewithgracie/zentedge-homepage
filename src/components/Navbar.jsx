import React, { useEffect, useState } from 'react'
import Logo from '../assets/Logo.png'
import { FaBars, FaTimes } from 'react-icons/fa'
// import { Link } from 'react-router-dom'

const Navbar = () => {
    const[showMobileMenu, setShowMobileMenu] = useState(false);

    useEffect(() => {
        if(showMobileMenu){
            document.body.style.overflow = 'hidden'
        }else{
            document.body.style.overflow = 'auto'
        }
        return () => {
            document.body.style.overflow = 'auto'
        }
    },[showMobileMenu])
  return (
    <div className='Absolute top-0 left-o w-full z-10'>
        <div className='container mx-auto flex justify-between items-center py-5 px-6 md:px-20 lg:px-32 bg-transparent' >
            <img src={Logo} alt="Logo" className="h-10 w-auto" />
            <ul className='hidden md:flex gap-7 text-white'>
                <a href="#Header" className='cursor-pointer hover:text-green-400'>Home</a>
                <a href="#About" className='cursor-pointer hover:text-green-400'>About</a>
                <a href="#Header" className='cursor-pointer hover:text-green-400'>Service</a>
                <a href="#Header" className='cursor-pointer hover:text-green-400'>Pricing</a>
                <a href="#Header" className='cursor-pointer hover:text-green-400'>Projects</a>
                <a href="#Header" className='cursor-pointer hover:text-green-400'>Contact</a>
            </ul>
            <button className='hidden md:block bg-white px-8 py-2 rounded-full'> Reach Out </button>
            <FaBars onClick={() => setShowMobileMenu(true)} className='md:hidden w-7 h-7 cursor-pointer text-white' />
        </div>
        {/* =========mobile-menu=============== */}
        <div className={`md:hidden ${showMobileMenu ? 'fixed w-full' : 'h-0 w-0'}fixed w-full right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}> 
            <div className='flex justify-end p-5 cursor-pointer'>
                <FaTimes onClick={() => setShowMobileMenu(false)} className='w-6 h-6 text-black' />
            </div>
            <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
                <a onClick={() => setShowMobileMenu(false)} href="#Header" className='px-4 py-2 rounded-full inline'>Home</a>
                <a onClick={() => setShowMobileMenu(false)} href="#About" className='px-4 py-2 rounded-full inline'>About</a>
                <a onClick={() => setShowMobileMenu(false)} href="#Header" className='px-4 py-2 rounded-full inline'>Services</a>
                <a onClick={() => setShowMobileMenu(false)} href="#Header" className='px-4 py-2 rounded-full inline'>Pricing</a>
                <a onClick={() => setShowMobileMenu(false)} href="#Header" className='px-4 py-2 rounded-full inline'>Projects</a>
                <a onClick={() => setShowMobileMenu(false)} href="#Header" className='px-4 py-2 rounded-full inline'>Contact</a>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
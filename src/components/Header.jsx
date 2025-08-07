import React from 'react'
import Navbar from './Navbar.jsx'

const Header = () => {
    return (
        <div
            className='min-h-screen mb-4 bg-cover bg-center w-full overflow-hidden'
            style={{ backgroundImage: "url('/BG-2.jpg')" }}
            id='Header'
        >
            <Navbar />

            <div className='flex flex-col items-center justify-center h-[calc(100vh-80px)] text-white text-center'>
                <h3 className="text-5xl sm:text-6xl md:text-[82px] inine-block max-w-3xl font-semibold pt-20">About Us</h3>
                <p className="text-4xl sm:text-4xl md:text-[42px] inine-block max-w-2xl font-semibold pt-10">"Get To Know About ZentEdge Solutions Limited"</p>
                {/* <div className="space-x-6 mt-16">
                    <a href="#" className='border border-white px-8 py-3 rounded'>Projects</a>
                    <a href="#" className='bg-green-500 px-8 py-3 rounded'>Contact Us</a>
                </div> */}
            </div>
        </div>
    )
}

export default Header

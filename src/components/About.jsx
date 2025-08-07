import React from 'react'
import CountUp from 'react-countup'
import BG3 from '../assets/BG-3.jpg'

const About = () => {
  return (
    <div className='container mx-auto px-6 py-16 md:px-20 lg:px-32'>
      {/* Top Heading */}
      <div className='text-center mb-12'>
        <h1 className='text-3xl sm:text-4xl font-bold'>
          Why You Should Choose <span className='underline underline-offset-4 decoration-1 font-light'>ZentEdge</span>
        </h1>
        <p className='text-2xl sm:text-3xl text-gray-500 max-w-2xl mx-auto mt-4'>
          Unlock the potential of your business.
        </p>
      </div>

      {/* Content Row */}
      <div className='flex flex-col md:flex-row items-start gap-12'>
        {/* Image */}
        <div className='md:w-1/2 flex justify-center md:justify-start'>
          <img
            src={BG3}
            alt="brand"
            className='h-[400px] sm:h-[500px] md:h-[600px] w-auto object-cover rounded-lg shadow-lg'
          />
        </div>

        {/* Text */}
        <div className='md:w-1/2'>
          <h2 className='text-xl text-gray-600 mb-2'>Best Creative IT Company And Solutions</h2>
          <h3 className='text-2xl font-bold mb-4'>Since 2019.</h3>
          <p className='text-gray-700 mb-6 leading-relaxed'>
            Transform your business with innovative IT solutions tailored to your needs.
            Our creative approach blends cutting-edge technology with expert strategy,
            ensuring success and growth in an ever-evolving digital world.
          </p>
          <p className='text-gray-700 leading-relaxed'>
            ZentEdge Solutions Limited is a UK-registered company specializing in software development and digital solutions.
            We build mobile and desktop apps, high-performance websites, and intuitive UI/UX designs.
            Our expertise includes selling premium themes and scripts to help businesses grow.
          </p>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 px-6 py-6  text-white">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-400">#1</h1>

            <button className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border border-gray-500 flex items-center justify-center group overflow-hidden">
              <span className="text-xs sm:text-sm text-white group-hover:underline tracking-wide whitespace-nowrap flex items-center gap-1">
                <span className="text-gray-400">ABOUT MORE</span>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center gap-6 px-6 py-6 mt-16 text-white">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-indigo-600">
            <CountUp end={19} duration={2} />%
          </h2>
          <p className="text-gray-700 mt-2 font-medium">Strategy</p>
          <p className="text-gray-500 text-sm max-w-xs">
            Crafting results-driven strategies that align with your business goals, ensuring growth and long-term success.
          </p>
        </div>

        <div className="text-center ">
          <h2 className="text-4xl font-bold text-indigo-600">
            <CountUp end={22} duration={2} />%
          </h2>
          <p className="text-gray-700 mt-2 font-medium">Audience</p>
          <p className="text-gray-500 text-sm max-w-xs">
            Understanding your audience's needs to deliver personalized, engaging solutions that foster loyalty.
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-4xl font-bold text-indigo-600">
            <CountUp end={22} duration={2} />%
          </h2>
          <p className="text-gray-700 mt-2 font-medium">Keyword</p>
          <p className="text-gray-500 text-sm max-w-xs">
            Targeting the right keywords to boost visibility, enhance SEO, and drive relevant traffic.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About

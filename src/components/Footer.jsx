import React from 'react'
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import Logo from '../assets/Logo.png' 

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-6 md:px-20 lg:px-32">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-y-12 gap-x-12">
        
 
        <div className="flex-1 min-w-[220px] flex flex-col">
          <img src={Logo} alt="ZentEdge Logo" className="h-10 w-auto max-w-[120px] mb-6" />
          <div className="flex space-x-4 text-gray-400">
            <a href="#" aria-label="Facebook" className="hover:text-white"><FaFacebookF size={20} /></a>
            <a href="#" aria-label="Twitter" className="hover:text-white"><FaTwitter size={20} /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-white"><FaLinkedinIn size={20} /></a>
            <a href="#" aria-label="Instagram" className="hover:text-white"><FaInstagram size={20} /></a>
          </div>
        </div>


        <div className="flex-1 min-w-[220px]">
          <h3 className="text-white font-semibold mb-4 text-lg">Contact Us</h3>
          <p className="mb-2 flex items-center gap-2">
            <FaPhoneAlt /> Call Any Time
          </p>
          <p className="flex items-center gap-2"><FaPhoneAlt /> +234 906-897-0869</p>
          <p className="flex items-center gap-2"><FaPhoneAlt /> +44 7411 297471</p>
          <p className="mt-4 mb-2 flex items-center gap-2">
            <FaEnvelope /> Say Hello
          </p>
          <p className="flex items-center gap-2"><FaEnvelope /> info@zentedge.com</p>
          <p className="flex items-center gap-2"><FaEnvelope /> info@zentedge.co.uk</p>
          <p className="flex items-center gap-2"><FaEnvelope /> info@zentedge.com.ng</p>
          <p className="mt-4">Unit 7 Initial Business Centre, Wilson Business Park, Manchester, United Kingdom M40 8WN.</p>
          <p>Company Nr: 16296822</p>
        </div>


        <div className="flex-1 min-w-[220px]">
          <h3 className="text-white font-semibold mb-4 text-lg">About</h3>
          <p>
            ZentEdge Solutions Limited is a UK-registered company specializing in software development and digital solutions.
          </p>
          <p className="mt-2">
            We build mobile and desktop apps, high-performance websites, and intuitive UI/UX designs.
          </p>
          <p className="mt-2">
            Our expertise includes selling premium themes and scripts to help businesses grow.
          </p>
        </div>


        <div className="flex-1 min-w-[220px]">
          <h3 className="text-white font-semibold mb-4 text-lg">Our Solutions</h3>
          <ul className="space-y-2">
            <li>Web Development</li>
            <li>Mobile Development</li>
            <li>Desktop Development</li>
            <li>Software Development</li>
            <li>Digital Marketing</li>
            <li>SEO Optimization</li>
          </ul>
        </div>


        <div className="flex-1 min-w-[220px]">
          <h3 className="text-white font-semibold mb-4 text-lg">Company</h3>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Services</li>
            <li>Project</li>
            <li>Contact</li>
            <li>Career</li>
            <li>Pricing Plan</li>
          </ul>
        </div>


        <div className="flex-1 min-w-[220px]">
          <h3 className="text-white font-semibold mb-4 text-lg">Resources</h3>
          <ul className="space-y-2">
            <li>ZentHost</li>
            <li>Digital Marketplace</li>
            <li>Support Policy</li>
            <li>Refund Policy</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

      </div>

      <div className="text-center text-gray-500 mt-12 text-sm">
        &copy; {new Date().getFullYear()} ZentEdge Solutions Limited. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer

import React from 'react'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className='w-full overflow-hidden'>
      <Header />
      <About />
      <Footer />
    </div>
  )
}

export default App
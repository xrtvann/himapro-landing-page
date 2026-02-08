import React from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Programs from './components/sections/Programs'
import CTA from './components/sections/CTA'
import './index.css'

function App() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-100 selection:bg-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Programs />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App

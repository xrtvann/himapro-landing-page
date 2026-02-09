import React from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 glass-navbar"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="bg-primary p-2 rounded-lg">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" fill="currentColor" fillRule="evenodd"></path>
            </svg>
          </div>
          <h1 className="text-xl font-bold tracking-tight text-white">
            Hima<span className="text-primary">pro</span>
          </h1>
        </div>
        
        <div className="hidden md:flex items-center gap-10">
          <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Beranda</a>
          <a className="text-sm font-medium hover:text-primary transition-colors" href="#about">Tentang Kami</a>
          <a className="text-sm font-medium hover:text-primary transition-colors" href="#programs">Program Kerja</a>
          <a className="text-sm font-medium hover:text-primary transition-colors" href="#news">Berita</a>
        </div>
        
        <div>
          <button className="bg-primary hover:bg-red-700 text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-all shadow-lg shadow-primary/20">
            Join Us
          </button>
        </div>
      </div>
    </motion.nav>
  )
}


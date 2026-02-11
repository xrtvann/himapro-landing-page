import React from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 glass-navbar"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a
          href="#"
          className="flex items-center gap-3 group"
          aria-label="Himapro Homepage"
        >
          {/* Logo container - adjusted for image */}
          <div className="relative h-12 w-auto"> 
            <img 
              src="/images/logo128px.ico" 
              alt="Himapro Logo" 
              className="h-full w-auto object-contain"
            />
          </div>
          <span className="text-xl font-bold tracking-tight text-white hidden sm:block">
            Hima<span className="text-primary">pro</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-10" role="menubar">
          <li role="none">
            <a
              className="text-sm font-medium hover:text-primary transition-colors"
              href="#"
              role="menuitem"
            >
              Beranda
            </a>
          </li>
          <li role="none">
            <a
              className="text-sm font-medium hover:text-primary transition-colors"
              href="#tentang-kami"
              role="menuitem"
            >
              Tentang Kami
            </a>
          </li>
          <li role="none">
            <a
              className="text-sm font-medium hover:text-primary transition-colors"
              href="#program-kerja"
              role="menuitem"
            >
              Program Kerja
            </a>
          </li>
          <li role="none">
            <a
              className="text-sm font-medium hover:text-primary transition-colors"
              href="#berita"
              role="menuitem"
            >
              Berita
            </a>
          </li>
        </ul>

        <div>
          <button
            className="bg-primary hover:bg-red-700 text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-all shadow-lg shadow-primary/20"
            aria-label="Join Himapro"
          >
            Join Us
          </button>
        </div>
      </div>
    </motion.nav>
  );
}

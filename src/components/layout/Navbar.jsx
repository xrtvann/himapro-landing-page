import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        {/* Left Side: Hamburger & Logo */}
        <div className="flex items-center gap-4">
          {/* Hamburger Menu Button - Mobile Only */}
          <button
            className="md:hidden text-white p-1 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

          <Link
            to="/"
            className="hidden sm:flex items-center gap-3 group"
            aria-label="Himapro Homepage"
          >
            {/* Logo container - adjusted for image */}
            <div className="relative h-10 w-auto sm:h-12">
              <img
                src="/images/logo128px.ico"
                alt="Himapro Logo"
                className="h-full w-auto object-contain"
              />
            </div>
            <span className="text-xl font-bold tracking-tight text-white hidden sm:block">
              Hima<span className="text-primary">pro</span>
            </span>
          </Link>
        </div>

        {/* Center: Desktop Menu */}
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

        {/* Right Side: Join Us Button */}
        <div>
          <Link
            to="/recruitment"
            className="bg-primary hover:bg-red-700 text-white px-4 py-2 sm:px-6 sm:py-2.5 rounded-lg text-sm font-bold transition-all shadow-lg shadow-primary/20 inline-block"
            aria-label="Join Himapro"
          >
            Join Us
          </Link>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 bg-black z-[100] md:hidden flex flex-col"
          >
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between px-6 py-4 h-20">
              {/* Logo in Sidebar */}
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-auto">
                  <img
                    src="/images/logo128px.ico"
                    alt="Himapro Logo"
                    className="h-full w-auto object-contain"
                  />
                </div>
                <span className="text-xl font-bold tracking-tight text-white">
                  Hima<span className="text-primary">pro</span>
                </span>
              </div>

              {/* Close Button */}
              <button
                className="text-white p-2 focus:outline-none"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close mobile menu"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Mobile Menu Links */}
            <div className="flex flex-col p-6 gap-6 overflow-y-auto bg-black min-h-screen">
              <a
                href="#"
                className="text-xl font-medium text-white hover:text-primary transition-colors border-b border-white/10 pb-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Beranda
              </a>
              <a
                href="#tentang-kami"
                className="text-xl font-medium text-white hover:text-primary transition-colors border-b border-white/10 pb-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Tentang Kami
              </a>
              <a
                href="#program-kerja"
                className="text-xl font-medium text-white hover:text-primary transition-colors border-b border-white/10 pb-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Program Kerja
              </a>
              <a
                href="#berita"
                className="text-xl font-medium text-white hover:text-primary transition-colors border-b border-white/10 pb-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Berita
              </a>

              <div className="mt-4">
                <Link
                  to="/recruitment"
                  className="block w-full bg-primary hover:bg-red-700 text-white py-3.5 rounded-lg text-lg font-bold transition-all shadow-lg shadow-primary/20 text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Join Us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

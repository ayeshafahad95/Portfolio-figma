"use client"
import Link from "next/link"
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full flex items-center justify-between p-5 bg-colorDark">
      {/* Name on the start */}
      <div className="text-white text-2xl font-bold">
        Ayesha Fahad
      </div>

      {/* Hamburger Menu for small screens */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none"
        >
          {/* Hamburger icon */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Links for larger screens */}
      <div className="hidden md:flex space-x-8 text-white">
        <Link href="/" className="hover:text-gray-400">Home</Link >
        <Link href="/projects" className="hover:text-gray-400">Projects</Link>
        <Link href="/skills" className="hover:text-gray-400">Skills</Link>
      </div>

      {/* Dropdown Menu for small screens */}
      <div className={`absolute top-16 right-0 w-full bg-gray-800 text-white ${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <Link href="/" className="block px-4 py-2 hover:bg-gray-700">Home</Link>
        <Link href="/projects" className="block px-4 py-2 hover:bg-gray-700">Projects</Link>
        <Link href="/skills" className="block px-4 py-2 hover:bg-gray-700">Skills</Link>
      </div>
    </nav>
  );
};

export default Navbar;

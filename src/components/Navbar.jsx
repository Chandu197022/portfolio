import React from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" }
]

export default function Navbar() {
  return (
    <header className="fixed w-full z-40 top-0 bg-black">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Your name in gradient */}
        <Link to="/" className="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-purple-400 via-gray-300 to-gray-400 bg-clip-text text-transparent uppercase">
          RONGALI CHANDRA KIRAN
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-10 text-white text-lg font-medium">
          {navLinks.map((link) =>
            link.href.startsWith("#") ? (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-yellow-400 transition"
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                className="hover:text-yellow-400 transition"
              >
                {link.name}
              </Link>
            )
          )}
        </nav>
        {/* Mobile menu icon */}
        <div className="md:hidden text-gray-200 text-2xl">
          <FaBars />
        </div>
      </div>
    </header>
  )
}
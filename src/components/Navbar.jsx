import React from 'react'
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
        {/* Name, not a link, light blue */}
        <span
          className="text-3xl font-extrabold tracking-wide uppercase"
          style={{ color: "#7dd3fc" }}
        >
          RONGALI CHANDRA KIRAN
        </span>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-10 text-white text-lg font-medium">
          {navLinks.map((link) =>
            link.href.startsWith("#") ? (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-Skyblue-400 transition"
              >
                {link.name}
              </a>
            ) : (
              <span key={link.name}>{link.name}</span>
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

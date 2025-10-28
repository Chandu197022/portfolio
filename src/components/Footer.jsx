import React from 'react'
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from 'react-icons/fa'
import { motion } from 'framer-motion'

const contacts = [
  {
    icon: <FaGithub size={36} />,
    link: "https://github.com/Chandu197022",
    aria: "GitHub"
  },
  {
    icon: <FaWhatsapp size={36} />,
    link: "https://wa.me/918919829303",
    aria: "WhatsApp"
  },
  {
    icon: <FaLinkedin size={36} />,
    link: "https://www.linkedin.com/in/chandrakiran-rongali-573185246",
    aria: "LinkedIn"
  },
  {
    icon: <FaEnvelope size={36} />,
    link: "mailto:chandrakiranrongali@gmail.com",
    aria: "Email"
  }
]

export default function ContactIconsOnly() {
  return (
    <section className="min-h-[40vh] flex flex-col items-center justify-center py-12 bg-black">
      <h2 className="text-5xl font-extrabold mb-14 bg-gradient-to-r from-purple-400 via-gray-300 to-gray-400 bg-clip-text text-transparent drop-shadow-lg tracking-tight">
        CONTACT <span className="text-gray-400">ME</span>
      </h2>
      <div className="flex gap-10 mt-8">
        {contacts.map((c, idx) => (
          <motion.a
            key={c.aria}
            href={c.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={c.aria}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.13 }}
            className="rounded-full bg-[#232323] text-yellow-400 flex items-center justify-center w-[100px] h-[100px] hover:bg-[#444] hover:text-white shadow-lg transition"
          >
            {c.icon}
          </motion.a>
        ))}
      </div>
    </section>
  )
}
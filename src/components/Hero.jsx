import React from 'react'
import { motion } from 'framer-motion'
import profile from '../assets/profile.jpg'   // 👈 Import your image directly

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-[#0b0b0b] text-white font-poppins"
    >
      <div className="max-w-6xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-8 items-center">
        
        {/* ---------- LEFT CONTENT ---------- */}
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-sm text-green-300 mb-2 tracking-wide">
            Hello, I'm
          </h2>
          <h1 className="text-2xl md:text-3xl font-extrabold leading-tight" style={{ color: "#7dd3fc" }}>
            RONGALI CHANDRA KIRAN
          </h1>
          <p className="mt-4 text-gray-300 text-base leading-relaxed max-w-lg">
            📚 ECE Graduate passionate about{" "}
            IoT,{" "}
            Data Analytics, and{" "}
            Web Development. I enjoy building
            innovative tech solutions and exploring opportunities in{" "}
            Research & Development.
          </p>

          <div className="mt-6 flex gap-3">
            <a
              href="#projects"
              className="px-5 py-2 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold hover:scale-105 transition-transform duration-200"
            >
              View Projects
            </a>
          </div>
        </motion.div>

        {/* ---------- RIGHT IMAGE BOX ---------- */}
        <motion.div
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="flex items-center justify-center"
        >
          {/* Gradient frame wrapper */}
          <div className="w-72 h-72 rounded-2xl p-[3px] bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-600 shadow-[0_0_25px_rgba(0,255,255,0.4)] hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full rounded-2xl overflow-hidden bg-[#0b0b0b]">
              <img
                src={profile}
                alt="Profile"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

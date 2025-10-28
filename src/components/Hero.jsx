import React from 'react'
import { motion } from 'framer-motion'

export default function Hero(){
  return (
    <section className="min-h-screen flex items-center bg-[#0b0b0b] text-white" id="home">
      <div className="max-w-6xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-8 items-center">
        <motion.div initial={{x:-30, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:0.7}}>
          <h2 className="text-sm text-green-300 mb-2">Hello, I'm</h2>
          <h1 className="text-4xl md:text-5xl font-extrabold">RONGALI CHANDRA KIRAN</h1>
          <p className="mt-4 text-gray-300">
            📚 ECE Graduate | IoT, Data Analytics & Web Development Learner | Exploring Opportunities in Tech & Research
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#projects" className="px-4 py-2 rounded-lg bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] text-black font-semibold">
              View Projects
            </a>
            <a href="#contact" className="px-4 py-2 rounded-lg border border-gray-700 text-gray-200">
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div initial={{x:30, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:0.7}} className="flex items-center justify-center">
          <div className="w-72 h-72 rounded-2xl glass p-4 flex items-center justify-center">
            <img src="/assets/profile.jpg" alt="profile" className="w-full h-full object-cover"/>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
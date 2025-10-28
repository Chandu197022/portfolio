import React from 'react'
import { motion } from 'framer-motion'
import { FaMicrochip, FaRobot, FaReact, FaPython, FaChartLine } from 'react-icons/fa'
import { SiTailwindcss, SiJavascript, SiPandas, SiPowerbi } from "react-icons/si"

const skills = [
  {
    icon: <FaMicrochip size={58} color="#0097A7" />,
    label: "Embedded Systems & IoT"
  },
  {
    icon: <FaRobot size={58} color="#43a047" />,
    label: "Machine Learning for Signal Processing"
  },
  {
    icon: <FaReact size={58} color="#61dafb" />,
    label: "React"
  },
  {
    icon: <SiTailwindcss size={58} color="#38bdf8" />,
    label: "Tailwind CSS"
  },
  {
    icon: <SiJavascript size={58} color="#ffd600" />,
    label: "JavaScript"
  },
  {
    icon: <FaPython size={58} color="#4B8BBE" />,
    label: "Python"
  },
  {
    icon: <SiPandas size={58} color="#e70494" />,
    label: "Pandas"
  },
  {
    icon: <SiPowerbi size={58} color="#ffc000" />,
    label: "Power BI"
  }
]

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-4 py-14">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-3xl font-extrabold text-center mb-14 bg-gradient-to-r from-purple-400 via-gray-300 to-gray-400 bg-clip-text text-transparent tracking-tight"
        style={{ color: "#7dd3fc" }}
      >
        MY SKILLS
      </motion.h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
        {skills.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.09 }}
            className="flex flex-col items-center"
          >
            <div className="mb-4">{s.icon}</div>
            <div className="mt-1 text-lg font-semibold text-white text-center">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/projects'
import { motion } from 'framer-motion'

export default function ProjectPage() {
  const { id } = useParams()
  const p = projects.find(x => x.id === id)
  if (!p) return <div className="min-h-screen pt-28 p-6">Project not found.</div>

  return (
    <div className="min-h-screen pt-24 text-gray-200">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link to="/#projects" className="text-sm underline text-blue-400 hover:text-blue-300">
          ← Back
        </Link>

        <motion.h1
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mt-4 text-blue-400"
        >
          {p.title}
        </motion.h1>

        <img src={p.image} alt={p.title} className="mt-6 rounded-xl object-cover w-full h-64 shadow-lg" />

        <div
          className="mt-6 text-gray-300 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: p.description }}
        />

        <div className="mt-8 flex gap-2 flex-wrap">
          {p.tools.map(t => (
            <span key={t} className="px-3 py-1 bg-blue-900/30 border border-blue-600/30 rounded-lg text-sm text-blue-300">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
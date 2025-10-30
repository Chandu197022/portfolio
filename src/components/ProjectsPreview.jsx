import React from 'react';
import { projects } from '../data/projects';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ProjectsPreview() {
  
  const weatherAppLiveLink = "https://weather-app-black-xi.vercel.app/";
  const solarDashboardLiveLink = "https://solar-dashboard-c16k.onrender.com/";

  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-20">
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center text-blue-400 mb-12 tracking-wide"
      >
        Featured Projects
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((p, idx) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.15, duration: 0.6 }}
            whileHover={{ scale: 1.03 }}
            className="rounded-2xl bg-gradient-to-b from-white/10 to-transparent border border-white/10 overflow-hidden shadow-md hover:shadow-blue-400/30 transition-all duration-300 backdrop-blur-md"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={p.image}
                alt={p.title}
                className="h-48 w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
            </div>
            
            {/* Content */}
            <div className="p-5">
              <h3 className="text-xl font-semibold text-blue-300 mb-2">{p.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                {p.short}
              </p>

              <div className="mt-5 flex justify-between items-center gap-2">
                {/* Show Live Link Button for Weather App and Solar Logger */}
                {(p.title === "Dynamic Weather Web App" || p.title === "Solar Data Logger Dashboard") && (
                  <a
                    href={p.title === "Dynamic Weather Web App"
                      ? weatherAppLiveLink
                      : solarDashboardLiveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-1.5 rounded-lg bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold transition-all duration-300"
                  >
                    Live Link
                  </a>
                )}

                {/* Details Button */}
                <Link
                  to={`/projects/${p.id}`}
                  className="px-4 py-1.5 rounded-lg bg-blue-400 text-black text-sm font-semibold hover:bg-blue-300 transition-all duration-300"
                >
                  Details
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

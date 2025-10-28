import React from 'react';
import { motion } from 'framer-motion';

export default function Experience() {
  const experiences = [
    {
      role: 'Trainee Engineer',
      company: 'Greentek India Limited',
      period: 'Jan – July 2025',
      description: [
        'Worked on solar data logging, system performance tracking, and inverter analytics using IoT-based sensors and tools.',
        'Assisted in solar site evaluation, installation, and energy efficiency optimization.',
        'Collaborated with engineers to prepare system performance reports and enhance predictive maintenance workflows.',
        'Developed practical knowledge in sustainable power systems and real-time monitoring applications.',
      ],
    },
    {
      role: 'Intern',
      company: 'APEPDCL (SCADA Department)',
      period: 'May – June 2024',
      description: [
        'Acquired hands-on experience in power system automation and energy monitoring through SCADA networks.',
        'Studied real-time data acquisition, control protocols, and distribution system performance.',
        'Learned about system integration, alarm handling, and grid stability management.',
        'Contributed to understanding energy analytics and IoT-based monitoring technologies.',
      ],
    },
  ];

  return (
    <section id="experience" className="min-h-screen bg-[#0b0b0b] text-gray-200 px-6 py-20 font-poppins">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-12 text-[var(--accent)]"
        >
          Experience
        </motion.h2>

        <div className="space-y-10">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="relative p-6 rounded-2xl bg-gray-900/60 border border-gray-700 hover:border-[var(--accent)] transition duration-300 shadow-lg"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-2xl font-semibold text-[var(--accent)]">{exp.role}</h3>
                <span className="text-sm text-gray-400 mt-1 md:mt-0">{exp.period}</span>
              </div>
              <h4 className="text-gray-300 font-medium">{exp.company}</h4>

              <ul className="mt-4 space-y-2 list-disc ml-5 text-gray-400 leading-relaxed">
                {exp.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center bg-[#0b0b0b] text-gray-200 px-4 py-16 font-poppins"
    >
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-extrabold mb-10 bg-gradient-to-r from-purple-400 via-gray-300 to-gray-300 bg-clip-text text-transparent tracking-tight"
      >
        ABOUT <span className="text-purple-400">ME</span>
      </motion.h1>
      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="
          max-w-4xl w-full
          border-4 rounded-3xl shadow-xl
          bg-[#18151d]/80
          p-8 md:p-14
          border-gradient-to-r from-purple-400 via-gray-300 to-purple-400
        "
        style={{
          borderImage: 'linear-gradient(to right, #a78bfa, #d1d5db, #a78bfa) 1',
          borderColor: '#a78bfa'
        }}
      >
        <p>
          I’m <b>Rongali Chandra Kiran</b>, an Electronics and Communication Engineering graduate driven by a passion for innovation and technology. I enjoy transforming ideas into real-world applications through IoT systems,
          data analytics, and modern web development.
        </p>
        <p className="mt-4">
          My journey began with curiosity about data-device interaction. I designed an IoT-based Smart Parking System to optimize urban parking and an Electrolyte Anomaly Detection model with machine learning for ECG health analysis.
          These taught me to integrate hardware, software, and intelligence for scalable systems.
        </p>
        <p className="mt-4">
          Professionally, I worked as a Trainee Engineer at Greentek Solar, contributing to solar data logging, performance analysis,
          and field installation. This strengthened my technical problem-solving and data interpretation in real-world environments.
        </p>
        <p className="mt-4">
          I’m constantly learning and exploring new technologies to build impactful, sustainable, and intelligent solutions.
          My goal: join forward-thinking teams that leverage data and IoT to make our world smarter.
        </p>
        {/* Personal Details */}
        <div className="mt-8 grid grid-cols-1 gap-2 text-[17px]">
          <div>
            <span className="font-bold text-purple-300">Name:</span>
            <span className="ml-2">Rongali Chandra Kiran</span>
          </div>
          <div>
            <span className="font-bold text-purple-300">Address:</span>
            <span className="ml-2">Visakhapatnam, Andhra Pradesh</span>
          </div>
          <div>
            <span className="font-bold text-purple-300">Email:</span>
            <span className="ml-2">chandrakiranrongali@gmail.com</span>
          </div>
          <div>
            <span className="font-bold text-purple-300">Phone:</span>
            <span className="ml-2">+91-8919829303</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
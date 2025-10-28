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
        className="text-4xl font-extrabold mb-10 tracking-tight"
        style={{ color: '#7dd3fc' }}
      >
        ABOUT ME
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
        "
        style={{
          borderColor: "#7dd3fc"
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
            <span className="font-bold" style={{ color: '#7dd3fc' }}>Name:</span>
            <span className="ml-2">Rongali Chandra Kiran</span>
          </div>
          <div>
            <span className="font-bold" style={{ color: '#7dd3fc' }}>Address:</span>
            <span className="ml-2">Visakhapatnam, Andhra Pradesh</span>
          </div>
          <div>
            <span className="font-bold" style={{ color: '#7dd3fc' }}>Email:</span>
            <span className="ml-2">chandrakiranrongali@gmail.com</span>
          </div>
          <div>
            <span className="font-bold" style={{ color: '#7dd3fc' }}>Phone:</span>
            <span className="ml-2">+91-8919829303</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

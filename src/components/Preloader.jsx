import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// You can use your logo, initials, or a slick SVG here
const SpinnerLogo = () => (
  <svg width="66" height="66" viewBox="0 0 66 66" fill="none">
    <circle cx="33" cy="33" r="30" stroke="#24c6ff" strokeWidth="6" opacity="0.18" />
    <motion.circle
      cx="33"
      cy="33"
      r="30"
      stroke="url(#spinGradient)"
      strokeWidth="6"
      strokeDasharray="188.5"
      strokeDashoffset="188.5"
      strokeLinecap="round"
      initial={{ strokeDashoffset: 188.5 }}
      animate={{ strokeDashoffset: 0, rotate: 360 }}
      transition={{
        duration: 1.25,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: "circInOut"
      }}
    />
    <defs>
      <linearGradient id="spinGradient" x1="3" y1="3" x2="63" y2="63" gradientUnits="userSpaceOnUse">
        <stop stopColor="#24c6ff"/>
        <stop offset="1" stopColor="#4856FF"/>
      </linearGradient>
    </defs>
  </svg>
);

export default function Preloader() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1750);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-50 flex flex-col items-center justify-center"
          style={{
            background: "radial-gradient(circle at 55% 40%, #25c0ff 10%, #1d2253 85%, #01052f 100%)",
            minHeight: "100vh"
          }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98, transition: { duration: 0.5 } }}
        >
          <div className="mb-8 flex items-center justify-center select-none" style={{height: 80}}>
            <SpinnerLogo />
          </div>
          <motion.h1
            initial={{ opacity: 0, scale: 0.86, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.02, delay: 0.18, type: "spring", stiffness: 110 }}
            className="text-4xl md:text-5xl font-extrabold tracking-wider"
            style={{
              color: '#fff',
              letterSpacing: '0.08em',
              textShadow: '0 0 38px #2dc2ff, 0 0 32px #4856ff'
            }}
          >
            RONGALI CHANDRA KIRAN
          </motion.h1>
          <motion.p
            className="mt-4 text-base font-medium tracking-wide"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 0.77, y: 0 }}
            transition={{ delay: 0.5, duration: 0.9 }}
            style={{ color: "#b1e4fa", textShadow: "0 0 18px #207bbd85" }}
          >
            Portfolio&nbsp;•&nbsp;Developer&nbsp;•&nbsp;Innovation
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

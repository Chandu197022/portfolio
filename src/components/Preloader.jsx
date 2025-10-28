import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Preloader(){ 
  const [show, setShow] = useState(true)
  useEffect(()=>{
    const t = setTimeout(()=> setShow(false), 1400)
    return ()=>clearTimeout(t)
  },[])
  if(!show) return null
  return (
    <div className="preloader-center">
      <motion.h1 initial={{opacity:0, scale:0.95}} animate={{opacity:1, scale:1}} transition={{duration:0.9}} className="text-3xl md:text-4xl font-bold tracking-wider" style={{color:'white', textShadow:'0 0 24px rgba(0,173,181,0.25)'}}>
        RONGALI CHANDRA KIRAN
      </motion.h1>
    </div>
  )
}

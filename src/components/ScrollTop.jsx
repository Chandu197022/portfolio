import React, {useState, useEffect} from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ScrollTop(){
  const [show, setShow] = useState(false)
  useEffect(()=>{
    const onScroll = ()=> setShow(window.scrollY>400)
    window.addEventListener('scroll', onScroll)
    return ()=> window.removeEventListener('scroll', onScroll)
  },[])
  return (
    <AnimatePresence>
      {show && (
        <motion.button initial={{opacity:0, y:20}} animate={{opacity:1,y:0}} exit={{opacity:0,y:20}} onClick={()=>window.scrollTo({top:0, behavior:'smooth'})} className="fixed right-6 bottom-8 p-3 rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] text-black shadow-lg">↑</motion.button>
      )}
    </AnimatePresence>
  )
}

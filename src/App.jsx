import React from 'react'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import ProjectsPreview from './components/ProjectsPreview'
import Footer from './components/Footer'
import ScrollTop from './components/ScrollTop'

export default function App(){
  return (
    <div>
      <Preloader />
      <Navbar />
      <main className="pt-20">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <ProjectsPreview />
        <Footer />
        <ScrollTop />
      </main>
    </div>
  )
}
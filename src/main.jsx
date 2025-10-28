import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App'
import Projects from './pages/Projects'
import ProjectPage from './pages/ProjectPage'
import './index.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/projects/:id' element={<ProjectPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
)

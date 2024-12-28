import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Projects from './Projects/Projects'
import Resume from './About/Resume'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <BrowserRouter>
    <Routes>
    <Route path="/" element={<App />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/resume" element={<Resume />} />
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)

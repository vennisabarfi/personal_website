import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Redesign/Home'
import Blog from './Redesign/Blog'
import About from './Redesign/About'


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/about" element={<About />} />
   
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)

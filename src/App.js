import React from 'react'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Nav from './components/Nav'
import './App.css'
import './index.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import {Slider} from './components/portContent'

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/services' element={<Services />} />
          <Route path='/portfolio' element={<Portfolio slides={Slider} />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;

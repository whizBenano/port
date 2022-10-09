import React from 'react'
import { motion } from 'framer-motion'
import frontend from '../mages/one.png'
import webapp from '../mages/webapp.png'
import mobile from '../mages/mobileapp.png'

const Services = () => (
  <motion.div
    className='services'
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    exit={{ opacity: 0, scale: 0 }}
  >
    <motion.h2
        initial={{ x: '1180px', y: '230px', scale: 0 }} 
        animate={{ x: 0, y: 0, scale: 1 }} 
        transition={{ duration: 1 }}
    >
        Services
    </motion.h2>
    <h3 className='header3'>what I do</h3>
    
    <div className='card-holder'>
      <div className='card'>
        <img src={frontend} alt='' />
        <h3>UI/UX Design</h3>
      </div>

      <div className='card'>
        <img src={webapp} atl='' />
        <h3>Frontend Dev</h3>
      </div>

      <div className='card'>
        <img src={mobile} alt='' />
        <h3>Mobile App</h3>
      </div>
    </div>

  </motion.div>
)

export default Services
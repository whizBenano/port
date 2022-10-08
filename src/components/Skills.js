import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Bash from '../mages/Linux-Logo.svg'
import AWS from '../mages/AWS-Logo.svg'
import ReactJS from '../mages/ReactJS-Logo.svg'
import Cpp from '../mages/C++-Logo.svg'
import Illustrator from '../mages/Illustrator-Logo.svg'
import XD from '../mages/XD-Logo.svg'
import Figma from '../mages/Figma-Logo.svg'
import Git from '../mages/Git-Logo.png'
import DL from '../mages/Download-Logo.svg'

const Skills = () => {
    return (
        <AnimatePresence>
            <motion.div
                className='skills'
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                exit={{ opacity: 0, scale: 0 }}
            >
                <motion.h2
                    initial={{ x: '1200px', y: '170px', scale: 0 }} 
                    animate={{ x: 0, y: 0, scale: 1 }} 
                    transition={{ duration: 1 }}
                >
                    Skills
                </motion.h2>
                
                <div className='first'>
                    <div className='grid-child'>
                        <img src={ReactJS} alt='' />
                        <p>ReactJS</p>
                    </div>

                    <div className='grid-child'>
                        <img src={Bash} alt='' />
                        <p>Bash</p>
                    </div>

                    <div className='grid-child'>
                        <img src={AWS} alt='' />
                        <p>AWS</p>
                    </div>

                    <div className='grid-child'>
                        <img src={Git} alt='' />
                        <p>Git</p>
                    </div>

                    <div className='grid-child'>
                        <img src={Cpp} alt='' />
                        <p>C++</p>
                    </div>

                    <div className='grid-child'>
                        <img src={Illustrator} alt='' />
                        <p>Adobe Illustrator</p>
                    </div>

                    <div className='grid-child'>
                        <img src={XD} alt='' />
                        <p>Adobe XD</p>
                    </div>

                    <div className='grid-child'>
                        <img src={Figma} alt='' />
                        <p>Figma</p>
                    </div>

                </div>

                <a href='../mages/BenjaminMichaels.pdf' download >
                    Resume &nbsp;
                    <img src={DL} style={{width: '1rem'}} alt='' />
                </a>

            </motion.div>
        </AnimatePresence>
    )
}

export default Skills
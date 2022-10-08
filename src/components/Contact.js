import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const Contact = ({ isVisible }) => {
    return (
        <AnimatePresence>
            { !isVisible && (
            <motion.div
                className='contact'
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                exit={{ opacity: 0, scale: 0 }}
            >
                <motion.h2
                    initial={{ x: '1180px', y: '330px', scale: 0 }} 
                    animate={{ x: 0, y: 0, scale: 1 }} 
                    transition={{ duration: 1 }}
                >
                    Contact
                </motion.h2>
                <form className='contain'>
                    <div className='first'>
                        <p className='report'>...leave me a message</p>
                        <div className='enter'>
                            <input type='text' required />
                            <label>Name</label>
                        </div>
                        <div className='enter'>
                            <input type='text' required />
                            <label>E-mail</label>
                        </div>
                        <p>Any other information can be included in the message box</p>
                    </div>
                    <div className='second'>
                        <textarea placeholder='Your message here'></textarea>
                        <motion.button
                            whileHover={{ letterSpacing: '2px', transition: 0.5 }}
                            whileTap={{ background: 'red' }}
                        >Send</motion.button>
                    </div>
                </form>
            </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Contact
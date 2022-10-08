import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Home = () => {
    const [headText, setHeadText] = React.useState('')
    React.useEffect(() => setHeadText(window.innerWidth <= 991 ?
         'Benjamin Michaels' : 'Ben Michaels'), [])

    return (
        <AnimatePresence exitBeforeEnter>
            <motion.div className='land'
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                exit={{ opacity: 0, scale: 0 }}
            >
                <div className='can'>
                    <h2>Hi, I'm</h2>
                    <motion.h1
                        initial={{ x: '-500px', scale: 0 }}
                        animate={{ x: 0, scale: 1 }}
                        transition={{ type: 'spring', stiffness: 100, duration: 1, delay: 0.5 }}
                    >
                        {headText}
                    </motion.h1>
                    <h3>UI/UX Designer &amp; Developer</h3>
                    <p>
                        I design and build professional UI/UX 
                        for web and mobile platforms
                    </p>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}

export default Home
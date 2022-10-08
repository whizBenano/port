import React from 'react'
import { motion } from 'framer-motion'
import { Slider } from './portContent'

const Portfolio = ({ slides }) => {
    const [current, setCurrent] = React.useState(0)
    const length = slides.length

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null
    }

    const nextSlide = () => setCurrent(current === length - 1 ? 0 : current + 1)
    const prevSlide = () => setCurrent(current === 0 ? length - 1 : current -1)

    console.log(current)

    return (
        <motion.div
            className='portfolio'
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0, scale: 0 }}
        >
            <motion.h2
                initial={{ x: '1180px', y: '270px', scale: 0 }} 
                animate={{ x: 0, y: 0, scale: 1 }} 
                transition={{ duration: 1 }}
            >
                Portfolio
            </motion.h2>
            <div className='container'>
                <span className='left' onClick={prevSlide} >&#10094;</span>

                <div className='pic'>
                    {Slider.map((slider, index) => {
                        return (
                            <div className={index === current ? 'slide active' : 'slide'} key={index}>
                                {index === current && (<img src={slider.picture} alt='' className='image' />)}
                                {index === current && (
                                    <div className='overlay'>
                                        {index === current && (<p> {slider.info} </p>)}
                                        {index === current && (
                                            <motion.a 
                                                whileHover={{ letterSpacing: '2px' }}
                                                whileTap={{ background: 'red' }}
                                                href={slider.anchor} 
                                                target='_blank' 
                                                rel='noreferrer'>
                                                    View
                                            </motion.a>)
                                        }
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </div>

                <span className='right' onClick={nextSlide} >&#10095;</span>
            </div>
        </motion.div>
    )
}

export default Portfolio
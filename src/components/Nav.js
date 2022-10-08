import React from 'react'
import { motion } from 'framer-motion'
import day from '../mages/day.svg'
import night from '../mages/night.svg'
import { Link } from 'react-router-dom'

const Nav = () => {
    React.useEffect(() => setActiveLink('home'), [])

    const [activeLink, setActiveLink] = React.useState('')
    const [called, setCalled] = React.useState('redirect')
    const [respond, setRespond] = React.useState('spain')

    const updateActiveLink = value => setActiveLink(value)

    let icon = document.querySelector('.switch')

    const swap = () => setCalled(called === 'redirect' ? 'redirect open' : 'redirect')
    const close = () => setRespond(respond === 'spain' ? 'spain close' : 'spain')

    const flip = () => {
        document.body.classList.toggle('light-theme')
        if(document.body.classList.contains('light-theme')) {
            icon.src = night
        } else {
            icon.src = day
        }
    }

    return (
        <div>
            <div className='menu' onClick={() => {
                swap() 
                close()
            }}>
                <span className={respond}></span>
                <span className={respond}></span>
                <span className={respond}></span>
            </div>

            <motion.div 
                className={called}
            >

                <Link 
                    to='/'
                    className={activeLink === 'home' ? 'nav active' : 'nav'}
                    onClick={() => {
                        updateActiveLink('home')
                        setCalled('redirect')
                        setRespond('spain')
                    }}
                >
                    Home
                </Link>

                <Link 
                    to='/about'
                    className={activeLink === 'about' ? 'nav active' : 'nav'}
                    onClick={() => {
                        updateActiveLink('about')
                        setCalled('redirect')
                        setRespond('spain')
                    }}
                >
                    About
                </Link>

                <Link
                    to='/skills' 
                    className={activeLink === 'skills' ? 'nav active' : 'nav'}
                    onClick={() => {
                        updateActiveLink('skills')
                        setCalled('redirect')
                        setRespond('spain')
                    }}
                >
                    Skills
                </Link>

                <Link
                    to='services' 
                    className={activeLink === 'services' ? 'nav active' : 'nav'}
                    onClick={() => {
                        updateActiveLink('services')
                        setCalled('redirect')
                        setRespond('spain')
                    }}
                >
                    Services
                </Link>

                <Link
                    to='/portfolio' 
                    className={activeLink === 'portfolio' ? 'nav active' : 'nav'}
                    onClick={() => {
                        updateActiveLink('portfolio')
                        setCalled('redirect')
                        setRespond('spain')
                    }}
                >
                    Portfolio
                </Link>

                <Link
                    to='/contact' 
                    className={activeLink === 'contact' ? 'nav active' : 'nav'}
                    onClick={() => {
                        updateActiveLink('contact')
                        setCalled('redirect')
                        setRespond('spain')
                    }}
                >
                    Contact
                </Link>

                <motion.img 
                    src={day} 
                    onClick={() => {
                        flip()
                        setCalled('redirect')
                        setRespond('spain')
                    }} 
                    initial={{ x: '0', y: '600px' }} 
                    animate={{ x: '0', y: 0 }} 
                    transition={{ duration: 1, delay: 3, rotate: 360 }} 
                    className='switch' 
                    alt='Switch'
                />
            
            </motion.div>
        </div>
    )
}

export default Nav
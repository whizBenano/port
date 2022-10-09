import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const About = () => {
    return (
        <AnimatePresence>
            <motion.div
                className='about'
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                exit={{ opacity: 0, scale: 0 }}
            >
                <motion.h2
                    initial={{ x: '1200px', y: '110px', scale: 0 }} 
                    animate={{ x: 0, y: 0, scale: 1 }} 
                    transition={{ duration: 1 }}
                >
                    About
                </motion.h2>
                <p>
                    I am a frontend developer, a product and experience designer
                    and my motto is "Keep it elegantly simple" because I so much 
                    love simple and meaningful designs. I am over 10 years experienced 
                    with designs and have a solid background in graphics design.
                    I use tools like XD or Figma for design and prototyping 
                    before doing the actual coding.
                </p>
                <p>
                    I strongly believe that continuous learning and challenging 
                    myself to do better will make all the difference, I am a fast 
                    learner and can easily pick up new skills. I am easily motivated,
                    inspired and also willing to follow my passion.
                    
                    I have a great sense of aesthetics which affects my colour choices 
                    and overall design in order to achieve user friendliness.
                </p>
                <p>
                    My abundant energy fuels me in the pursuit of many interests, 
                    hobbies, areas of study and artistic endeavors. I’m a fast 
                    learner, able to pick up new skills and juggle different 
                    projects and roles with relative ease.
                </p>
                {/* <p>
                    Hello, I am Oluwakemi Adeleke. . I perfectly balance user and business needs to create 
                    delightful products. Creating user engaging and immersive 
                    applications has always been a longstanding ambition of mine, I 
                    focus on designing complex and functional web and mobile products 
                    for B2C and B2B organizations. Finding ways to communicate to 
                    users in a visually and cohesively inviting way is important to 
                    me. I am adept at handling multiple design projects in a fast 
                    paced environment. Excellent at time management, organization, 
                    problem solving and meeting deadlines.
                </p> */}
            </motion.div>
        </AnimatePresence>
    )
}

export default About
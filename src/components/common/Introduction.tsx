import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import React from 'react';
import Button from '../ui/Button';
import TypingAnimation from './TypingAnimation';
import codingSherra from '../../assets/coding-me.json';
import DotsBackground from '../ui/DotsBackground';
const ROLE_LIST=[
    "Senior Front-end Developer",
    "Software Engineer",
    "UI Developer",
    "Web Developer"
]
 const DESCRIPTION = ` 
    Based in New Jersey, I've got a 9-year track record of building web apps that feel effortless and intuitive to use.           
 `;

const Introduction: React.FC = () => {

    return (
        <section className="flex items-center justify-center min-h-screen py-16 bg-transparent relative">
            
            <DotsBackground/>
        <div className="container mx-auto top-[-2em] px-5 sm:px-20 md:px-10 flex flex-col md:flex-row items-center justify-center gap-12 relative z-10">
            <div className="text-center md:text-left flex flex-col grow md:ms-24"> 
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="accent-font text-5xl sm:text-6xl md:text-8xl dark:text-white text-black grow">
                   <span className='pl-4 border-l-7 border-[#c40b0b]'>I&apos;m Sherra</span> 
                </motion.div>
               
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl sm:text-2xl mt-4 dark:text-gray-300 text-black"
                >
                   <TypingAnimation texts={ROLE_LIST} /> 
                </motion.div>
 
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mt-4 min-w-72 sm:w-md text-sm sm:text-[15px] font-sans dark:text-gray-300 text-black">
                   <span className=''>{DESCRIPTION}</span> 
                </motion.div>

                
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-5"
                >
                    <Button
                        variant="red"
                        size="lg"
                        className="transition-all duration-300"
                    >
                        <a href="mailto:sherrajayetuble@gmail.com">Hire Me</a>
                        
                    </Button>
                    
                </motion.div>
            </div>
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-auto md:me-20 sm:min-w-60"
            >
                <Lottie
                    animationData={codingSherra}
                    style={{ maxWidth: '400px', height: 'auto', margin: '0 auto' }}
                    loop={true}
                    autoplay={true}
                />
            </motion.div>
        </div>
    </section>

    );
  };
  
  export default Introduction;
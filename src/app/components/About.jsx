'use client'

import React, { useRef } from 'react'
import {motion, useInView} from 'framer-motion'
import Image from 'next/image'

const AboutVariants = {
  hidden:{
    opacity:0, y:40
  },
  visible:{
     opacity:1, y:0,
     transition:{delay:0.4, duration:0.4}
  }
}

const About = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 }); 


  return (
    <div ref={ref} id='About' className='w-full lg:h-[540px] h-[490px] bg-[#f6f6f6] absolute lg:top-[3700px] top-[4700px] flex flex-col items-center pt-12 gap-8'>
       <p className='font-bold font-[SFTSchriftedSansTRIAL-Medium] lg:text-5xl text-2xl'>About Me 🚀</p>
       <motion.div 
       variants={AboutVariants} initial='hidden' animate={isInView ? 'visible' : 'hidden'}
       className='w-[80%] lg:h-[450px] h-[400px] flex relative'>
           <div className='lg:w-[50%] w-[30%] h-full absolute left-0'>
             <Image src='/laptop.png' alt='laptop' width={500} height={100} className='lg:ml-24 lg:mt-4 mt-24'/>
           </div>
           <div className='lg:w-[50%] w-[70%] absolute h-full lg:left-[50%] left-[30%] lg:px-8 px-2 lg:py-12 flex flex-col lg:gap-4 gap-0'>
           <p className='lg:font-semibold font-bold lg:text-2xl text-base'>
            I'm a full-stack web developer based in Mumbai, India, passionate about creating modern,
            user-friendly apps with AI integration. From front-end finesse to robust backend
            systems, I bring ideas to life with precision and creativity.
            </p>
            <p className="mt-4 lg:text-lg text-sm">
            Outside coding, I enjoy cricket, video editing, and brainstorming ideas for my future startup.
            </p>
           </div>
       </motion.div>
    </div>
  )
}

export default About 
'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import {motion, useInView} from 'framer-motion'

const ProjectVariants = {
   hidden:{
     opacity:0, y:-30
   },
   visible:{
      opacity:1, y:0,
      transition:{delay:0.4, duration:0.4}
   }
 }

const Projects = () => {

   
 const ref = useRef(null);
 const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 }); 

  return (
    <div ref={ref} id='Productivity' className='w-full lg:h-full h-[1000px] top-[760px] lg:top-[740px] absolute text-black bg-[#f6f6f6] flex justify-center'>
       <p className='lg:text-5xl text-black font-bold font-[SFTSchriftedSansTRIAL-Medium] absolute lg:left-[153px] left-6 top-6 lg:top-12 text-3xl'>Unique Productivity</p>
       <div className='w-[80%] h-[80%] lg:mt-32 mt-28 flex flex-col lg:flex-row'> 
         <motion.div 
         variants={ProjectVariants} initial='hidden' animate={isInView ? 'visible' : 'hidden'}
         className='lg:w-[62%] w-full h-full flex flex-col gap-0'>
             <div className='lg:bottom-5 bottom-12 lg:mr-4 mr-0 lg:ml-0 flex lg:justify-center items-center relative right-4 cursor-pointer w-[345px] lg:w-auto group'>
              <Image alt='image' src='/gifs/event-image.jpg' width={550} height={150} className='hover:brightness-50 hover:duration-300 rounded-xl object-cover lg:w-[95%] w-[420px] lg:mb-0 mb:8 lg:h-[90%] h-[75%] shadow-[0_10px_20px_rgba(0,_0,_0,_0.7)]'/>
              <button className="absolute inset-0 m-auto w-fit h-fit px-6 py-2 bg-[#f1f1f1] text-black font-semibold rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 cursor-pointer">
                <a href="https://event-frontend-ekff.onrender.com" className='link link-underline'>See Project</a>
               </button>
             </div>
             <div className='flex flex-col lg:gap-2 lg:ml-2 ml-0 relative lg:bottom-6 bottom-16'>
                <p className='lg:text-3xl text-xl font-bold'>Event Booking System</p>
                <p className='text-[#313235] lg:text-lg text-sm'>Seamless event discovery & booking with real-time AI Event Suggestions!</p>
             </div>
         </motion.div> 
         <div className='lg:w-[40%] w-[345px] h-full flex flex-col gap-7 lg:items-center lg:right-0 relative right-4 lg:bottom-0 bottom-11'>
             <motion.div 
             variants={ProjectVariants} initial='hidden' animate={isInView ? 'visible' : 'hidden'}
             className='lg:w-[95%] w-full h-[50%] flex flex-col gap-1'>
                 <div className='mt-2 cursor-pointer group'>
                  <Image alt='image' src='/gifs/ecom.gif' width={400} height={100} className='hover:brightness-50 hover:duration-300 lg:w-[95%] w-full bg-[#151515] h-[100%] rounded-xl shadow-[0_5px_15px_rgba(0,_0,_0,_0.7)]'/>
                  <button className="absolute inset-0 m-auto w-fit h-fit px-6 py-2 lg:mt-24 mt-16 lg:ml-[165px] ml-[130px] bg-[#f1f1f1] text-black font-semibold rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 cursor-pointer">
                     <a href="https://ecommerce-frontend-qoyp.onrender.com" className='link link-underline'>See Project</a>
                     </button>
                 </div>
                 <div className='flex flex-col gap-0 lg:ml-2 ml-4 lg:mt-0 mt-3'>
                    <p className='lg:text-2xl text-xl font-bold'>Football Ecommerce Store</p>
                    <p className='text-[#313235] text-sm lg:text-base'>Modern e-commerce platform for FTBL fans with AI Chatbot</p>
                </div>
             </motion.div>
           <motion.div 
           variants={ProjectVariants} initial='hidden' animate={isInView ? 'visible' : 'hidden'}
           className='lg:w-[95%] w-full h-[50%] flex flex-col gap-1'>
              <div className='mt-0 cursor-pointer group'>
                <Image alt='image' src='/gifs/task.gif' width={400} height={100} className='hover:brightness-50 hover:duration-300 lg:w-[95%] w-full bg-[#151515] h-[100%] rounded-xl shadow-[0_5px_15px_rgba(0,_0,_0,_0.7)]'/>
                <button className="absolute inset-0 m-auto w-fit h-fit px-6 py-2 kg:mb-40 mb-32 lg:ml-[165px] ml-[130px] bg-[#f1f1f1] text-black font-semibold rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 cursor-pointer">
                 <a href="https://task-frontend-1vda.onrender.com" className='link link-underline'>See Project</a>
                </button>
              </div>
                 <div className='flex flex-col gap-1 lg:ml-2 ml-4 lg:mt-0 mt-3'>
                    <p className='lg:text-2xl text-xl font-bold'>Task Management System</p>
                    <p className='text-[#313235] text-sm lg:text-base'>Organize tasks effortlessly with AI Voice Command.</p>
                </div>
             </motion.div>
         </div>
   
       </div>
    </div>
  )
}

export default Projects


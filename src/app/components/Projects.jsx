'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import {motion, useInView} from 'framer-motion'
import Link from 'next/link'

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
 const isInView = useInView(ref, { once: true, threshold: 0.2 }); 

  return (
     <div ref={ref} id="Productivity" className="w-full lg:h-[1400px] h-[2600px] top-[760px] lg:top-[740px] absolute bg-[#f6f6f6] text-black font-poppins px-6 lg:px-24 py-20">
      <h2 className="text-3xl lg:text-5xl font-bold mb-16 text-left">Build Smarter With My Flagship Tools</h2>

      {/* Top Featured Projects */}
      <div className="flex flex-col lg:flex-row gap-12 mb-14">
        {/* Project 1 - Micro Personal Brand Builder */}
        <motion.div
          variants={ProjectVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="w-full lg:w-1/2 bg-white rounded-2xl shadow-[0_10px_20px_rgba(0,0,0,0.1)] overflow-hidden border border-neutral-300"
        >
          <Image src="https://res.cloudinary.com/di2dodral/image/upload/q_auto:best,f_auto,c_fill,dpr_auto,w_1100,h_605/v1751969293/project1_nkgkjv.png" alt="Personal Brand Builder" width={800} height={400} className="w-full h-72 object-cover border-b border-neutral-500 object-top" />
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-2">AI-Powered Personal Brand Builder</h3>
            <p className="text-[#313235] text-sm lg:text-base mb-4">
              Instantly generate polished resumes & portfolios with AI-powered content. Choose from modern templates, export PDFs, or host your portfolio online — all in minutes.
            </p>
            <Link href="https://personacraft-five.vercel.app/" target='_blank'>
              <button className="px-6 py-2 bg-[#8200DB] text-white rounded-md hover:bg-[#6e00c3] transition duration-300">
                Explore Tool
              </button>
            </Link>
          </div>
        </motion.div>

        {/* Project 2 - AI Interview Questions Generator */}
        <motion.div
          variants={ProjectVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="w-full lg:w-1/2 bg-white rounded-2xl shadow-[0_10px_20px_rgba(0,0,0,0.1)] overflow-hidden border border-neutral-300"
        >
          <Image src="https://res.cloudinary.com/di2dodral/image/upload/q_auto:best,f_auto,c_fill,dpr_auto,w_1100,h_605/v1751969294/project2_djejku.png" alt="AI Interview Questions" width={800} height={400} className="w-full h-72 object-cover object-top border-b border-neutral-500" />
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-2">AI Interview Questions Generator</h3>
            <p className="text-[#313235] text-sm lg:text-base mb-4">
              Get job-ready with role-specific, difficulty-based, and company-targeted questions. Export your questions to PDF and save them to your dashboard.
            </p>
            <Link href="https://interview-generator-henna.vercel.app/" target='_blank'>
              <button className="px-6 py-2 bg-[#8200DB] text-white rounded-md hover:bg-[#6e00c3] transition duration-300">
                Try It Now
              </button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Existing Projects (Smaller Grid) */}
      <h2 className="text-2xl lg:text-4xl font-bold mb-8">More AI Integrated Projects</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Event Booking System */}
        <motion.div variants={ProjectVariants} initial="hidden" animate={isInView ? 'visible' : 'hidden'} className="bg-white rounded-xl overflow-hidden shadow-[0_8px_15px_rgba(0,0,0,0.15)]">
          <div className="relative group">
            <Image src="https://res.cloudinary.com/di2dodral/image/upload/q_auto:best,f_auto,c_fill,dpr_auto,w_800,h_375/v1751969295/event-image_qzrytj.jpg" priority width={400} height={200} alt="Event" className="object-cover w-full h-48 group-hover:brightness-50 transition duration-300" />
            <Link href="https://event-frontend-ekff.onrender.com" target='_blank'>
              <button className="absolute inset-0 m-auto w-fit h-fit px-6 py-2 bg-white text-black font-semibold rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                See Project
              </button>
            </Link>
          </div>
          <div className="p-4">
            <h3 className="font-bold text-lg">Event Booking System</h3>
            <p className="text-sm text-[#313235]">Seamless event discovery & booking with real-time AI Event Suggestions!</p>
          </div>
        </motion.div>

        {/* Football Ecommerce Store */}
        <motion.div variants={ProjectVariants} initial="hidden" animate={isInView ? 'visible' : 'hidden'} className="bg-white rounded-xl overflow-hidden shadow-[0_8px_15px_rgba(0,0,0,0.15)]">
          <div className="relative group">
            <Image src="/gifs/ecom.gif" width={400} height={200} alt="Ecommerce" priority className="object-cover w-full h-48 group-hover:brightness-50 transition duration-300" />
            <Link href="https://ecommerce-frontend-qoyp.onrender.com" target='_blank'>
              <button className="absolute inset-0 m-auto w-fit h-fit px-6 py-2 bg-white text-black font-semibold rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                See Project
              </button>
            </Link>
          </div>
          <div className="p-4">
            <h3 className="font-bold text-lg">Football Ecommerce Store</h3>
            <p className="text-sm text-[#313235]">Modern e-commerce platform for FTBL fans with AI Chatbot.</p>
          </div>
        </motion.div>

        {/* Task Management System */}
        <motion.div variants={ProjectVariants} initial="hidden" animate={isInView ? 'visible' : 'hidden'} className="bg-white rounded-xl overflow-hidden shadow-[0_8px_15px_rgba(0,0,0,0.15)]">
          <div className="relative group">
            <Image src="/gifs/task.gif" width={400} height={200} alt="Task Manager" priority className="object-cover w-full h-48 group-hover:brightness-50 transition duration-300" />
            <Link href="https://task-frontend-1vda.onrender.com" target='_blank'>
              <button className="absolute inset-0 m-auto w-fit h-fit px-6 py-2 bg-white text-black font-semibold rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                See Project
              </button>
            </Link>
          </div>
          <div className="p-4">
            <h3 className="font-bold text-lg">Task Management System</h3>
            <p className="text-sm text-[#313235]">Organize tasks effortlessly with AI Voice Command.</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Projects


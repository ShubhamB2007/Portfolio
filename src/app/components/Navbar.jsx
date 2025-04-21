'use client'

import React from 'react'
import {motion} from 'framer-motion'

const NavVariants = {
  hidden:{
    opacity:0, y:-100
  },
  visible:{
     opacity:1, y:0,
     transition:{delay:0.4, duration:0.4}
  }
}

const Navbar = () => {

    const NavLinks = [
        {name:'Productivity',link:'#Productivity'},
        {name:'Skills',link:'#Skills'},
        {name:'Special Features',link:'#Special_Features'},
        {name:'About',link:'#About'},
    ]

    const scrollToSection = (id) => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    };

  return (
    <motion.div 
    variants={NavVariants} initial='hidden' animate='visible'
    className='lg:w-[80%] w-[88.2%] h-24 top-0 absolute z-50 flex items-center justify-between'>
          <p className='text-[#d9ebfe] font-bold font-custom cursor-pointer'>Shubham | Portfolio</p>
          <button onClick={()=>scrollToSection("Contact")} className='w-36 h-10 rounded-xl bg-[#f1f1f1] lg:mr-5 text-black font-semibold hover:bg-[#1d1c21] hover:duration-200 cursor-pointer hover:text-white'>Contact Me</button>
          <div className='w-[60%] h-full absolute left-[20%] flex justify-center items-center gap-8 text-[#d9ebfe] lg:visible invisible'>
             {NavLinks.map((item,index)=>(
               <a key={index} href={item.link} onClick={(e) => { e.preventDefault(); scrollToSection(item.link.replace('#', '')); }} >
                <span className='link link-underline hover:text-white hover:duration-1000 pb-1'>
                  {item.name}
                </span>
             </a>
             ))}
          </div>
    </motion.div>
  )
}

export default Navbar

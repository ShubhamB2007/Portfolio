"use client";

import React, { useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Model } from './Lost_programmer'
import { Group } from 'three';
import { useMediaQuery } from 'react-responsive';
import {motion} from 'framer-motion'

const TextVariants = {
  hidden:{
    opacity:0, y:50
  },
  visible:{
     opacity:1, y:0,
     transition:{delay:0.4, duration:0.4}
  }
}

const Hero = () => {

  const isMobile = useMediaQuery({query: '(max-width: 768px)'}) 

  const glowRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const button = btnRef.current;
    const glow = glowRef.current;
  
    const glowSize = 96;
    const halfGlow = glowSize / 2;
  
    const moveGlow = (e) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      glow.style.left = `${x - halfGlow}px`;
    };
  
    button.addEventListener("mousemove", moveGlow);
    return () => button.removeEventListener("mousemove", moveGlow);
  }, []);
    
  
  return (
    <div className='w-full h-full bg-[#111111] overflow-x-hidden'>
    
     <img src="/images.jpg" alt="image" className='w-[450px] mt-2 ml-0 absolute z-30 brightness-[0.20] shadow-[inset_0_0_25px_rgba(0,0,0,0.5)]]' />

      <motion.div 
      variants={TextVariants} initial='hidden' animate='visible'
      className='absolute top-28 lg:top-52 lg:left-[152px] left-6 z-30 font-[SFTSchriftedSansTRIAL-Medium]'>
         <div className='flex flex-col lg:gap-4 gap-2 text-white font-bold lg:text-6xl text-4xl'>
             <p>Building Digital</p>
             <p>Experience That</p>
             <p>Leave an Impact</p>
         </div>
         <p className='ml-1 lg:mt-6 mt-3 text-sm lg:text-base lg:w-[500px] w-84 text-[#d9ebfe]'>Hi, I’m Shubham, a passionate full stack developer based in India, <br /> building user-friendly apps with smart AI integration.</p>
         <button ref={btnRef} className='relative overflow-hidden bg-[#f1f1f1] text-[#4a2008] font-semibold w-56 h-12 rounded-full ml-1 mt-8 cursor-pointer group flex items-center justify-center shadow-[0_0_15px_rgba(255,184,108,0.25)]'>
         <span className="z-20 flex items-center gap-2 justify-center pointer-events-none">
              SEE MY WORK
              <span>→</span>
            </span>
            <span ref={glowRef} className="absolute top-0 left-0 w-24 h-full rounded-full opacity-80 bg-[radial-gradient(circle,_rgbargba(255,255,247,1)_40%,_rgba(255,209,138,0.2)_100%,_transparent_40%)] shadow-[0_0_55px_rgba(252,211,77,1)] pointer-events-none transition-all duration-150"></span>
         </button>
      </motion.div>  

      <div 
      className='absolute lg:left-[32%] left-[0%] lg:mr-0 lg:w-[1300px] lg:h-[750px] w-[400px] lg:-z-20 z-10 h-[450px] lg:top-[-20px] lg:bottom-2 top-[320px] bg-black overflow-x-hidden'>
        <Canvas camera={{position:[0,0,15], fov:45}}>
          <OrbitControls maxDistance={20} minDistance={5} minPolarAngle={Math.PI / 5} maxPolarAngle={Math.PI / 2} autoRotate enablePan={false} enableZoom={false}/>
          <group scale={isMobile ? 2 : 5}>
          <Model/>
          </group>
        </Canvas>
     </div>
=

     <div className="pointer-events-none absolute inset-0 lg:bg-[radial-gradient(ellipse_50%_80%_at_68%_50%,transparent_10%,black_60%)] bg-[radial-gradient(ellipse_at_50%_70%,transparent_40%,black_0%)]" />
    </div>
  )
}

export default Hero
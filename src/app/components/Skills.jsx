'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import {motion, useInView} from 'framer-motion'

const SkillsVariants = {
  hidden:{
    opacity:0, y:-30
  },
  visible:(index)=>({
     opacity:1, y:0,
     transition:{delay:0.2 + index * 0.4, duration:0.4}
  })
}


const Skills = () => {

   const Skills = [
    {name:"Next.Js Developer", logo:'https://res.cloudinary.com/di2dodral/image/upload/q_auto:best,f_auto,c_fill,dpr_auto,w_700,h_650/v1751969385/next_phvjwv.png'},
    {name:"MERN Stack Developer", logo:'https://res.cloudinary.com/di2dodral/image/upload/q_auto:best,f_auto,c_fill,dpr_auto,w_700,h_650/v1751969385/react_jxrywc.png'},
    {name:"AI Integrator", logo:'https://res.cloudinary.com/di2dodral/image/upload/q_auto:best,f_auto,c_fill,dpr_auto,w_700,h_650/v1751969383/AI_kg78uo.png'},
    {name:"Firebase & MongoDB", logo:'https://res.cloudinary.com/di2dodral/image/upload/q_auto:best,f_auto,c_fill,dpr_auto,w_700,h_650/v1751969384/MongoDB_je3d6r.png'},
    {name:"TypeScript", logo:'https://res.cloudinary.com/di2dodral/image/upload/q_auto:best,f_auto,c_fill,dpr_auto,w_700,h_650/v1751969383/typescript_mjc84w.png'}, 
   ]

   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, threshold: 0.2 }); 
   

  return (  
    <div ref={ref} id='Skills' className='bg-[#000000] w-full lg:min-h-screen min-h-[1500px] relative lg:top-[1940px] top-[3300px] text-white flex justify-center'>
        <p className='lg:text-5xl text-xl font-bold font-[SFTSchriftedSansTRIAL-Medium] absolute top-12'>Skills Bring To The Table ✍</p>
        <div className='w-[80%] lg:h-[450px] lg:mt-36 flex lg:flex-row flex-col justify-center items-center gap-4'>
            {Skills.map((item,index)=>(
               <motion.div
               variants={SkillsVariants} initial='hidden' animate={isInView ? 'visible' : 'hidden'} custom={index}
               key={index} className='lg:w-56 w-full lg:h-96 h-60 bg-[#0e0e10] lg:rounded-full rounded-xl flex flex-col items-center font-semibold text-lg justify-center border border-gray-800 relative lg:overflow-hidden group cursor-pointer'> 
                <div className="absolute bottom-0 left-0 w-full h-0 bg-[#2c3240] transition-all duration-500 ease-in-out group-hover:h-full z-0"></div>
                 <Image src={item.logo} alt="image" width={144} height={144} className='lg:mb-20 mb-10 floating' />
                 <p className='absolute lg:top-72 top-48'>{item.name}</p>
              </motion.div>
            ))}
        </div>
    </div>
  )
}

export default Skills
'use client'

import React, {useEffect,useRef} from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
gsap.registerPlugin(ScrollTrigger);
import {motion, useInView} from 'framer-motion'

const SkillsVariants = {
  hidden:{
    opacity:0, x:-50
  },
  visible:(index)=>({
     opacity:1, x:0,
     transition:{delay:0.2 + index * 0.4, duration:0.4}
  })
}

const Special = () => {

    const timelineRef = useRef(null);

  useEffect(() => {
    const segments = gsap.utils.toArray('.timeline-segment');

    gsap.set(segments, { scaleY: 0, transformOrigin: 'top center' });

    segments.forEach((segment, i) => {
      gsap.to(segment, {
        scaleY: 1,
        scrollTrigger: {
          trigger: segment,
          start: 'top 50%',
          end: 'bottom 100px',
          scrub: true,
        },
        duration: 3,
        ease: 'power2.out',
      });
    });
  }, []); 

  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 }); 

    const Features = [
        { name: 'Fully Responsive Design', desc1: 'Mobile-first and seamless layout across mobile & desktop devices', desc2: "Smooth user experience especially on mobile device", color: 'bg-sky-600', logo:'/MainLogos/responsive.png', image:'/SideLogos/responsive.png' },
        { name: 'Google Authentication', desc1: 'Secure login/signup using MongoDB database', desc2: "Easy authorization using Google Cloud Platform", color: 'bg-green-500', logo:'/MainLogos/auth.png', image:'/SideLogos/auth.png' },
        { name: 'Framer Motion', desc1: 'Smooth animations and transitions that improve UX', desc2: "User friendly animations on user hover", color: 'bg-pink-500', logo:'/MainLogos/motion.png', image:'/SideLogos/motion.png' },
        { name: 'Next.js Library', desc1: 'Optimized performance with Next 13', desc2: "Lazy loading and Image optimization", color: 'bg-yellow-500', logo:'/MainLogos/next.png', image:'/SideLogos/next.png' },
        { name: 'AI Integration', desc1: 'Integrated AI with free API available', desc2: "Easy user experience with help of AI", color: 'bg-purple-600', logo:'/MainLogos/AI.png', image:'/SideLogos/AI.png' },
        { name: 'Search & Cart functionality', desc1: 'User can find items with Search Functionality', desc2: "Items can be added to cart in one click with checkout option", color: 'bg-red-500', logo:'/MainLogos/cart.png', image:'/SideLogos/cart.png' },
      ];

  return (
    <div ref={ref} id='Special_Features' className='lg:w-full w-full lg:min-h-screen absolute lg:top-[2210px] top-[3260px] bg-black text-white flex justify-center pb-16'>
        <div className='lg:w-[80%] w-full relative min-h-full flex flex-col items-center gap-6'>
           <p className='lg:text-5xl text-xl font-bold font-[SFTSchriftedSansTRIAL-Medium] pb-8'>Special Features 💻</p>
          
          <div className='relative lg:w-full w-36 lg:right right-20 h-full flex overflow-visible'>
            <div className='absolute left-[47.1%] -translate-x-1/2 top-36 z-0'>
                <div className='timeline-segment w-0.5 h-56 origin-top scale-y-0 bg-gradient-to-b from-sky-600 to-green-500'></div>
                <div className='timeline-segment w-0.5 h-56 origin-top scale-y-0 bg-gradient-to-b from-green-500 to-pink-500'></div>
                <div className='timeline-segment w-0.5 h-56 origin-top scale-y-0 bg-gradient-to-b from-pink-500 to-yellow-600'></div>
                <div className='timeline-segment w-0.5 h-56 origin-top scale-y-0 bg-gradient-to-b from-yellow-600 to-purple-600'></div>
                <div className='timeline-segment w-0.5 h-56 origin-top scale-y-0 bg-gradient-to-b from-purple-600 to-red-500'></div>
            </div>  

           <div className='w-full h-full flex flex-col items-center z-10'>
          {Features.map((item,index)=>(
             <div key={index} className='w-full h-56 flex gap-6 relative'>
             <div className='lg:w-[50%] w-full flex items-center'> 
                <motion.div 
                variants={SkillsVariants} initial='hidden' animate={isInView ? 'visible' : 'hidden'} custom={index}
                className='w-[75%] h-[90%] rounded-xl flex justify-center items-center lg:visible invisible'>
                <Image alt='image' src={item.image} width={160} height={160}/>
                </motion.div>  
                <div className='w-24 h-24 bg-[#0e0e10] relative z-20 lg:left-[11.2%] left-0 lg:mr-10 mr-32 flex justify-center items-center rounded-full'>
                <div className={`w-16 h-16 rounded-full ${item.color} flex justify-center items-center`}>
                  <Image alt='image' width={32} height={32} src={item.logo}/>
                </div>
                </div>
             </div>    
             <div className='lg:w-[50%] w-60 lg:h-full h-48 absolute lg:left-[50%] left-0 flex flex-col gap-5 text-white lg:text-lg justify-center ml-20'>
                <p className='font-bold lg:text-3xl'>{item.name}</p>
                <p className='text-[#d9ebfe] lg:text-base text-sm'>&#183; {item.desc1}</p>
                <p className='text-[#d9ebfe] lg:text-base text-sm'>&#183; {item.desc2}</p>
             </div>
          </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Special

'use client'

import React, { useEffect, useRef, useState } from 'react'
import ContactModel from './ContactModel'
import { FaGithub,FaInstagram,FaLinkedin } from "react-icons/fa";
import {motion, useInView} from 'framer-motion'
import emailjs from '@emailjs/browser'
import Link from 'next/link';

const FormVariants = {
  hidden:{
    opacity:0, x:-50
  },
  visible:{
     opacity:1, x:0,
     transition:{delay:0.4, duration:0.4}
  }
}

const ModelVariants = {
  hidden:{
    opacity:0, x:50
  },
  visible:{
     opacity:1, x:0,
     transition:{delay:0.4, duration:0.4}
  }
}

const FooterVariants = {
  hidden:{
    opacity:0, y:50
  },
  visible:{
     opacity:1, y:0,
     transition:{delay:0.4, duration:0.4}
  }
}

const Contact = () => {

   const [formData, setFormData] = useState({
     name:'',
     email:'', 
     message:''
  })
   const [loading, setLoading] = useState(false)
   const formRef = useRef(null)

  const icons = [
    {icon:<FaGithub />, link:'https://github.com/ShubhamB2007' },
    {icon:<FaInstagram />, link:'https://www.instagram.com/coldeditz_17?igsh=NTBxcWtieHB0ZnZp' },
    {icon:<FaLinkedin />, link:'https://www.linkedin.com/in/shubham-budhakar-8a52382bb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },    
  ]

  const handleChange = (e)=>{
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]:value
    })
  }

  const handleSubmit = async(e)=>{
    e.preventDefault()
    console.log('Form Data:', formData)
    setLoading(true)
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      )
      setFormData({name:'',email:'',message:''})
    } catch (error) {
       console.log(error)
    } finally{
      setLoading(false)
    }
  }

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

    const ref = useRef(null);
    const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });



  return (
    <div ref={ref} id='Contact' className='bg-black w-full lg:h-full h-[1150px] absolute lg:top-[4240px] top-[5190px] text-white flex flex-col items-center pt-12 gap-8'>
        <p className='font-bold font-[SFTSchriftedSansTRIAL-Medium] lg:text-5xl text-2xl'>Get In Touch 📱</p>
        <div className='w-[80%] lg:h-[530px] h-[500px] flex lg:flex-row flex-col relative gap-4'>
        <motion.div 
        variants={FormVariants} initial='hidden' animate={isInView ? 'visible' : 'hidden'}
        className='lg:absolute lg:w-[38%] w-full bg-[#0e0e10] h-fit lg:h-full left-0 border-gray-800 border flex flex-col gap-6 py-4 px-9 rounded-xl z-10'>
               <form ref={formRef} onSubmit={handleSubmit} className='lg:h-[500px] h-[510px] flex flex-col gap-8'>
                  <div>
                    <label htmlFor="name">Name</label>
                    <input required onChange={handleChange} type="text" value={formData.name} name='name' className='bg-[#2d2d37] h-16 rounded-xl w-full pl-5 outline-none mt-2' placeholder='Your Name...' />
                  </div>
                  <div>
                    <label htmlFor="email">Email</label>
                    <input required onChange={handleChange} type="text" value={formData.email} name='email' className='bg-[#2d2d37] h-16 rounded-xl w-full pl-5 outline-none mt-2' placeholder='Your Email...' />
                  </div>
                  <div>
                    <label htmlFor="message">Your Message</label>
                    <textarea required onChange={handleChange} type="text" value={formData.message} rows='10' name='message' className='bg-[#2d2d37] h-28 rounded-xl w-full pl-5 outline-none mt-2 pt-3' placeholder='Your Message...' />
                  </div>
                  <div>
                  <button ref={btnRef} type='submit' disabled={loading} className='relative overflow-hidden bg-[#f1f1f1] text-[#4a2008] font-semibold h-16 w-full rounded-xl cursor-pointer group flex items-center justify-center shadow-[0_0_15px_rgba(255,184,108,0.25)]'>
                    <span className="z-20 flex items-center gap-2 justify-center pointer-events-none">
                          {loading? 'Sending...' : 'Send Message'}
                          <span>→</span>
                        </span>
                        <span ref={glowRef} className="absolute top-0 left-0 w-24 h-full rounded-full opacity-80 bg-[radial-gradient(circle,_rgbargba(255,255,247,1)_40%,_rgba(255,209,138,0.2)_100%,_transparent_40%)] shadow-[0_0_55px_rgba(252,211,77,1)] pointer-events-none transition-all duration-150"></span>
                    </button>
                  </div>
               </form>
            </motion.div>
            <motion.div 
           variants={ModelVariants} initial='hidden' animate={isInView ? 'visible' : 'hidden'}
            className='lg:absolute lg:w-[60%] w-full lg:left-[40%] left-0 lg:h-full h-[400px] rounded-xl border-gray-300 bg-orange-300 flex justify-center items-center z-0 lg:mt-0 mt-6'>
                 {isInView ? <ContactModel /> : <p className='text-2xl font-bold'>Loading...</p>}
             </motion.div>
        </div>

        <motion.div
        variants={FooterVariants} initial='hidden' animate={isInView ? 'visible' : 'hidden'}
        className='w-full h-16 lg:bottom-0 mt-96 lg:mt-0 flex justify-center items-center gap-5'>
           {icons.map((item,index)=>(
              <Link href={item.link} key={index} target="_blank" rel="noopener noreferrer">
                  <div className='w-12 h-12 bg-[#0e0e10] rounded-xl cursor-pointer hover:duration-200 hover:bg-[#1c1d1f] flex justify-center items-center'>
                  {item.icon}
                </div>
            </Link>
           ))}
        </motion.div>
         
    </div>
  )
}

export default Contact

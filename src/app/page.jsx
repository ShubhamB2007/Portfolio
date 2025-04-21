import Image from "next/image";
import Hero from "./components/HeroModels/Hero";
import Navbar from "./components/Navbar";
import './globals.css'
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Special from "./components/Special";
import About from "./components/About";
import Contact from "./components/ContactModels/Contact";

export default function Home() {
  return (
    <div className="w-screen min-h-screen flex flex-col items-center">      
          <Navbar/>
           <Hero/>
            <Projects/>
            <Skills/> 
            <Special/>
            <About/>
            <Contact/>
    </div>
  );
} 

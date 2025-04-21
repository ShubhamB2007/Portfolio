import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import { useMediaQuery } from 'react-responsive'
import LandlinePhone from './Landline'

const ContactModel = () => {

    const isMobile = useMediaQuery({query: '(max-width: 768px)'}) 

  return (
    <div className="w-full h-full min-h-[300px]">
      
     <Canvas
    dpr={[1, 1.5]} 
    gl={{ preserveDrawingBuffer: false }} 
    amera={{ position: [0, 15, 15], fov: 45 }}> 
       <Suspense fallback={null}>
      <ambientLight intensity={5} />
      <directionalLight intensity={4} position={[10, 10, 5]} />

       <OrbitControls maxDistance={20} minDistance={5} minPolarAngle={Math.PI / 5} maxPolarAngle={Math.PI / 2} autoRotate enablePan={false} enableZoom={false}/>
         <group scale={isMobile ? 35 : 35}>
           <LandlinePhone/>
         </group>
        </Suspense>
    </Canvas>
    </div>
  )
}

export default ContactModel

import { useGLTF } from '@react-three/drei'

export default function LandlinePhone(props) {
  const gltf = useGLTF('/models/landline_phone.glb')
  return <primitive object={gltf.scene} {...props} />
}
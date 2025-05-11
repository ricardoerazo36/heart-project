/* eslint-disable react/no-unknown-property */
import { useGLTF } from '@react-three/drei'
import { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'

export default function CloggedArtery(props) {
  const { nodes, materials, scene } = useGLTF('/models-3d/clogged-artery.glb')
  const cloggedArteryRef = useRef()

  // Animación de rotación + latido (sube y baja suavemente)
  useFrame((state, delta) => {
    if (cloggedArteryRef.current) {
      cloggedArteryRef.current.rotation.y += delta * 0.3 // rotación suave
      cloggedArteryRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.05 // latido suave
    }
  })

  // Activar sombras en las mallas
  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true
        child.receiveShadow = false
      }
    })
  }, [scene])

  console.log("llego modelo 1")
  return (
    <group ref={cloggedArteryRef} {...props} dispose={null} scale={[200,200,200]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CloggedArtery.geometry}
        material={materials.CloggedArteryMaterial}
      />
    </group>
  )
}

useGLTF.preload('/models-3d/clogged-artery.glb')

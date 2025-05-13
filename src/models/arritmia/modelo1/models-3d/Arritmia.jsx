/* eslint-disable react/no-unknown-property */
import { useGLTF } from '@react-three/drei'
import { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function Arritmia(props) {
  const { nodes, materials, scene } = useGLTF('/models-3d/human-heart.glb')
  const modelRef = useRef()
  const beatIntensity = useRef(0)
  const pulseSpeed = useRef(3) // Velocidad del latido

  // Animación avanzada del corazón
  useFrame((state, delta) => {
    if (!modelRef.current) return

    // 1. Rotación suave continua
    modelRef.current.rotation.y += delta * 0.2

    // 2. Latido cardíaco (usando curva de pulso más realista)
    const elapsed = state.clock.elapsedTime
    beatIntensity.current = Math.sin(elapsed * pulseSpeed.current) * 0.5 + 0.5
    
    // Aplicar escalado para simular latido
    const scaleFactor = 1 + beatIntensity.current * 0.05
    modelRef.current.scale.set(scaleFactor, scaleFactor, scaleFactor)

    // 3. Movimiento de bombeo (sube/baja con el latido)
    modelRef.current.position.y = Math.sin(elapsed * pulseSpeed.current) * 0.03

    // 4. Rotación síncrona con el latido (opcional)
    modelRef.current.rotation.z = Math.sin(elapsed * pulseSpeed.current * 0.5) * 0.02
  })

  // Configurar sombras y materiales
  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true
        child.receiveShadow = false
        
        // Mejorar apariencia del material
        if (child.material) {
          child.material.roughness = 0.3
          child.material.metalness = 0.1
        }
      }
    })
  }, [scene])

  return (
    <group ref={modelRef} {...props} dispose={null} scale={[200, 200, 200]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Heart.geometry}
        material={materials.HeartMaterial}
      />
    </group>
  )
}

useGLTF.preload('/models-3d/human-heart.glb')

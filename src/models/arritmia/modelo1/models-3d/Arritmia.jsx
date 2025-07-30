/* eslint-disable react/no-unknown-property */
import { useGLTF } from '@react-three/drei'
import { useRef, useEffect, useState } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

export default function Arritmia(props) {
  const { nodes, materials, scene } = useGLTF('/models-3d/human-heart.glb')
  const modelRef = useRef()
  const beatIntensity = useRef(0)
  const pulseSpeed = useRef(3) // Velocidad del latido
  const [isPaused, setIsPaused] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const { camera, mouse } = useThree()
  const previousMousePosition = useRef({ x: 0, y: 0 })

  // Manejo de teclado
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key.toLowerCase() === 'e') {
        setIsPaused(prev => !prev)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  // Eventos de ratón 3D
  const handlePointerOver = () => {
    setIsHovered(true)
    document.body.style.cursor = 'pointer'
  }

  const handlePointerOut = () => {
    setIsHovered(false)
    document.body.style.cursor = 'auto'
  }

  const handlePointerDown = (e) => {
    e.stopPropagation()
    setIsDragging(true)
    previousMousePosition.current = {
      x: e.clientX,
      y: e.clientY
    }
  }

  const handlePointerUp = () => {
    setIsDragging(false)
  }

  const handlePointerMove = (e) => {
    if (isDragging) {
      const deltaMove = {
        x: e.clientX - previousMousePosition.current.x,
        y: e.clientY - previousMousePosition.current.y
      }

      // Rotación basada en el movimiento del ratón
      modelRef.current.rotation.y += deltaMove.x * 0.01
      modelRef.current.rotation.x += deltaMove.y * 0.01

      previousMousePosition.current = {
        x: e.clientX,
        y: e.clientY
      }
    }
  }

  // Animación avanzada del corazón
  useFrame((state, delta) => {
    if (!modelRef.current) return

    if (isPaused && !isDragging) return

    // 1. Rotación suave continua (solo cuando no se está arrastrando)
    if (!isDragging) {
      modelRef.current.rotation.y += delta * 0.2
    }

    // 2. Latido cardíaco (usando curva de pulso más realista)
    const elapsed = state.clock.elapsedTime
    beatIntensity.current = Math.sin(elapsed * pulseSpeed.current) * 0.5 + 0.5
    
    // Aplicar escalado para simular latido (intensificar cuando está hover)
    const hoverFactor = isHovered ? 1.2 : 1.0
    const scaleFactor = (1 + beatIntensity.current * 0.05) * hoverFactor
    modelRef.current.scale.set(scaleFactor, scaleFactor, scaleFactor)

    // 3. Movimiento de bombeo (sube/baja con el latido)
    modelRef.current.position.y = Math.sin(elapsed * pulseSpeed.current) * 0.03

    // 4. Rotación síncrona con el latido (opcional)
    modelRef.current.rotation.z = Math.sin(elapsed * pulseSpeed.current * 0.5) * 0.02

    // Cambiar color cuando está hover
    if (materials.HeartMaterial) {
      materials.HeartMaterial.color.lerp(
        new THREE.Color(isHovered ? '#ff5555' : '#aa0000'),
        0.1
      )
    }
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
    <group 
      ref={modelRef} 
      {...props} 
      dispose={null} 
      scale={[200, 200, 200]}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerMove={handlePointerMove}
    >
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

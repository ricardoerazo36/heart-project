/* eslint-disable react/no-unknown-property */
import { useGLTF } from '@react-three/drei'
import { useState } from 'react'

export default function Runner(props) {
  const { nodes, materials } = useGLTF('/models-3d/runner.glb')
  const [hovered, setHovered] = useState(false)
  
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Runner.geometry}
        material={materials.RunnerMaterial}
        onPointerOver={() => {
          setHovered(true);
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={() => {
          setHovered(false);
          document.body.style.cursor = "default";
        }}
      />
    </group>
  )
}

useGLTF.preload('/models-3d/runner.glb')
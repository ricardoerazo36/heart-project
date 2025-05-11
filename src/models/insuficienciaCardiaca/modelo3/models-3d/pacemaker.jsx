/* eslint-disable react/no-unknown-property */
import { useGLTF } from '@react-three/drei'
import { useState } from 'react'

export default function Pacemaker(props) {
  const { nodes, materials } = useGLTF('/models-3d/pacemaker.glb')
  const [hovered, setHovered] = useState(false)
  
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PaceMaker.geometry}
        material={materials.PacemakerMaterial}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      />
    </group>
  )
}

useGLTF.preload('/models-3d/pacemaker.glb')
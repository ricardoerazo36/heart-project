/* eslint-disable react/no-unknown-property */
import { useGLTF } from '@react-three/drei'
import { useState } from 'react'

export default function Monitor(props) {
  const { nodes, materials } = useGLTF('/models-3d/monitor.glb')
  const [hovered, setHovered] = useState(false)
  
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Monitor.geometry}
        material={materials.monitorMaterial}
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

useGLTF.preload('/models-3d/monitor.glb')

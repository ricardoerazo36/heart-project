/* eslint-disable react/no-unknown-property */
import { useGLTF } from '@react-three/drei'
import { useState } from 'react'
import { useFrame } from '@react-three/fiber';

export default function DilatedHeart(props) {
  const { nodes, materials } = useGLTF('/models-3d/dilated-heart.glb')
  const [hovered, setHovered] = useState(false)
  
  // Clona el material para no afectar otras instancias
  const heartMaterial = materials.HeartMaterial.clone();
  
  // Cambia el color cuando está hovereado
  if (hovered) {
    heartMaterial.color.set('#2392FA');
    heartMaterial.emissive.set('#2392FA');
    heartMaterial.emissiveIntensity = 0.3;
  } else {
    heartMaterial.color.set(materials.HeartMaterial.color);
    heartMaterial.emissive.set('#000000');
    heartMaterial.emissiveIntensity = 0;
  }
  
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Heart.geometry}
        material={heartMaterial}
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

useGLTF.preload('/models-3d/dilated-heart.glb')
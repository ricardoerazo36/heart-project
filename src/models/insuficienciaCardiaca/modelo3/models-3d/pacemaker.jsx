/* eslint-disable react/no-unknown-property */
import { useGLTF } from '@react-three/drei'
import { useState } from 'react'

export default function Pacemaker(props) {
  const { nodes, materials } = useGLTF('/models-3d/pacemaker.glb')
  const [hovered, setHovered] = useState(false)
  
  // Clona el material para no afectar otras instancias
  const pacemakerMaterial = materials.PacemakerMaterial.clone();
  
  // Cambia el color cuando está hovereado
  if (hovered) {
    pacemakerMaterial.color.set('#2392FA');
    pacemakerMaterial.emissive.set('#2392FA');
    pacemakerMaterial.emissiveIntensity = 0.3;
  } else {
    pacemakerMaterial.color.set(materials.PacemakerMaterial.color);
    pacemakerMaterial.emissive.set('#000000');
    pacemakerMaterial.emissiveIntensity = 0;
  }
  
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PaceMaker.geometry}
        material={pacemakerMaterial}
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

useGLTF.preload('/models-3d/pacemaker.glb')
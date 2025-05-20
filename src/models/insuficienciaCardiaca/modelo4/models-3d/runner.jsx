/* eslint-disable react/no-unknown-property */
import { useGLTF } from '@react-three/drei'
import { useState } from 'react'

export default function Runner(props) {
  const { nodes, materials } = useGLTF('/models-3d/runner.glb')
  const [hovered, setHovered] = useState(false)
  
  // Clona el material para no afectar otras instancias
  const runnerMaterial = materials.RunnerMaterial.clone();
  
  // Cambia el color cuando está hovereado
  if (hovered) {
    runnerMaterial.color.set('#2392FA');
    runnerMaterial.emissive.set('#2392FA');
    runnerMaterial.emissiveIntensity = 0.3;
  } else {
    runnerMaterial.color.set(materials.RunnerMaterial.color);
    runnerMaterial.emissive.set('#000000');
    runnerMaterial.emissiveIntensity = 0;
  }
  
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Runner.geometry}
        material={runnerMaterial}
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
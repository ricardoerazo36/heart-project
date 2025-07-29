/* eslint-disable react/no-unknown-property */
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/models-3d/pill-2.glb')
  console.log("llego pildora 2")
  console.log("Nodos:", nodes);
console.log("Materiales:", materials);
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pill2White.geometry}
        material={materials.Pill2WhiteMaterial}
      />
    </group>
  )
}

useGLTF.preload('/models-3d/pill-2.glb')
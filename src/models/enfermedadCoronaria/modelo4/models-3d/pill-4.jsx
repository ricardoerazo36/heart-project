/* eslint-disable react/no-unknown-property */
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/models-3d/pill-4.glb')
  console.log("llego pildora 4")
  console.log("Nodos:", nodes);
console.log("Materiales:", materials);
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pill4_White_0.geometry}
        material={materials['White.001']}
        scale={0.001}
      />
    </group>
  )
}

useGLTF.preload('/models-3d/pill-4.glb')
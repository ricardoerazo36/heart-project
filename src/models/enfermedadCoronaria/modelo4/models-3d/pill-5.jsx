/* eslint-disable react/no-unknown-property */
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/models-3d/pill-5.glb')
  console.log("llego pildora 5")
  console.log("Nodos:", nodes);
console.log("Materiales:", materials);
  return (
    <group {...props} dispose={null}>
       <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pill5_RoundPill_0.geometry}
        material={materials['RoundPill.002']}
      />
    </group>
  )
}

useGLTF.preload('/models-3d/pill-5.glb')

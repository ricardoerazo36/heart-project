/* eslint-disable react/no-unknown-property */

import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";

export default function Strained(props) {
  const { nodes, materials } = useGLTF('/models-3d/strained-Heart.glb')

  useEffect(() => {
    console.log('Nodes:', nodes);
    console.log('Materials:', materials);
  }, [nodes, materials]);

  return (
    <group {...props} dispose={null}>
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.StrainedHeart.geometry}
      material={materials.StrainedHeartMaterial}
    />
  </group>
  )
}


useGLTF.preload('/models-3d/strained-Heart.glb');

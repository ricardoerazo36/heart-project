/*eslint-disable react/no-unknown-property */

import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect } from "react";
import { useRef } from 'react';

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models-3d/beating-heart.glb')
  const { actions } = useAnimations(animations, group)
  

  useEffect(() => {
    console.log('Nodes:', nodes);
    console.log('Materials:', materials);
    
  }, [nodes, materials]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene"></group>
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Heart.geometry}
      material={materials.HeartMaterial}
      morphTargetDictionary={nodes.Heart.morphTargetDictionary}
      morphTargetInfluences={nodes.Heart.morphTargetInfluences}
    />
  </group>
  )
}


useGLTF.preload('/models-3d/beating-heart.glb');
/* eslint-disable react/no-unknown-property */

import { useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function Treatment(props) {
  const { nodes, materials } = useGLTF('/models-3d/pillbox.glb')
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
    }
  });

  useEffect(() => {
    console.log('Nodes:', nodes);
    console.log('Materials:', materials);
  }, [nodes, materials]);

  return (
    <group ref={meshRef} {...props} dispose={null}>
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.PillBox.geometry}
      material={materials.PillBoxMaterial}
    />
  </group>
  )
}


useGLTF.preload('/models-3d/pillbox.glb');

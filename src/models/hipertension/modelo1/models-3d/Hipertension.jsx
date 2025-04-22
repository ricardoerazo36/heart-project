import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/Heart.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Heart001.geometry}
        material={materials.HeartMaterial}
      />
    </group>
  );
}

useGLTF.preload("/Heart.glb");

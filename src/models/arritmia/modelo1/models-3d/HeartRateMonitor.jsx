/* eslint-disable react/no-unknown-property */

import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";

export default function HearRatetMonitor(props) {
  const { nodes, materials } = useGLTF('/models-3d/heart-rate-monitor.glb')

  useEffect(() => {
    console.log('Nodes:', nodes);
    console.log('Materials:', materials);
  }, [nodes, materials]);

  return (
    <group {...props} dispose={null}>
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Monitor.geometry}
      material={materials.MonitorMaterial}
    />
    <mesh
        castShadow
        receiveShadow
        geometry={nodes.Monitor001.geometry}
        material={materials.MonitorMaterial}
      />
  </group>
  )
}


useGLTF.preload('/models-3d/heart-rate-monitor.glb');

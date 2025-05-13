/* eslint-disable react/no-unknown-property */

import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import Lights from "../modelo1/lights/Lights";
import Treatment from "../modelo1/models-3d/Treatment";


// Habilitamos usar <shadowMaterial /> en JSX

const Modelo3 = () => {

  return (
    <Canvas camera={{ position: [1, 1, 2] }} shadows={true}>
      <Lights />
      
      <Environment
        files={"/staging/hospital_room_2k.hdr"}
        ground = {{
          height: 60,
          radius: 100,
          scale: 3,
        }}
        background
      />

    <Treatment
      
      scale={2.5}
      position = {[0, 0, 0]}
    //rotation = {[1, Math.PI, 0]}
    />

      
      
      <mesh  receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} >
        <planeGeometry args={[5, 5]} />
        <shadowMaterial opacity={0.3} />
      </mesh>
    </Canvas>
  );
};

export default Modelo3;

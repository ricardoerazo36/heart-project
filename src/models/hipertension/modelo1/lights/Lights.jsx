/* eslint-disable react/no-unknown-property */

import { useRef } from "react";
import { useHelper } from "@react-three/drei";
import {  MathUtils } from "three";
import { useFrame } from "@react-three/fiber";
const Lights = () => {
  const directionalLightRef = useRef();

  //useHelper(mainLightRef, DirectionalLightHelper);
 

  return (
    <>
      <directionalLight position={[10, 10, 5]} intensity={2} />

      <directionalLight
        position={[-10, 10, 10]}
        intensity={18}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-radius = {2}
        ref={directionalLightRef}
      />
    </>
  );
};

export default Lights;

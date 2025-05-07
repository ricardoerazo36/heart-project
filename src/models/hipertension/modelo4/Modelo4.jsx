/* eslint-disable react/no-unknown-property */

import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import Lights from "../modelo1/lights/Lights";
import Care from "../modelo1/models-3d/Care";


// Habilitamos usar <shadowMaterial /> en JSX

const Modelo4 = () => {
  return (
    <Canvas camera={{ position: [0, 1, 2] }} shadows={true}>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <Lights />
      <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
      <Care/>
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
        <planeGeometry args={[5, 5]} />
        <shadowMaterial opacity={0.3} />
      </mesh>
    </Canvas>
  );
};

export default Modelo4;

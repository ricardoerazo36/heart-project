/* eslint-disable react/no-unknown-property */

import { Canvas } from "@react-three/fiber";
import { OrbitControls,  Sparkles } from "@react-three/drei";
import Lights from "../modelo1/lights/Lights";
import Care from "../modelo1/models-3d/Care";


// Habilitamos usar <shadowMaterial /> en JSX

const Modelo4 = () => {
  return (
    <Canvas camera={{ position: [1, 1, 2] }} shadows={true}>
      <Lights />
      <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />

      <Sparkles
        size={6}
        scale={1.2}
      />
      <Care
        scale={2}
      />
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[-1, -1, -1]}>
        <planeGeometry args={[5, 5]} />
        
        <shadowMaterial opacity={0.3} />
      </mesh>
    </Canvas>
  );
};

export default Modelo4;

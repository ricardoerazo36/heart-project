/* eslint-disable react/no-unknown-property */

import { Canvas } from "@react-three/fiber";
import { OrbitControls,  Sparkles } from "@react-three/drei";
import Lights from "../modelo1/lights/Lights";
import HeartRateMonitor from "../modelo1/models-3d/HeartRateMonitor";



// Habilitamos usar <shadowMaterial /> en JSX

const Modelo4 = () => {
  return (
    <Canvas camera={{ position: [7, 7, 4] }} shadows>
      <Lights />
      <OrbitControls enableZoom enablePan enableRotate />

      <Sparkles
        size={6}
        scale={5.2}
      />
      <HeartRateMonitor
        scale={0.1} 
        position={[0, 0, 0]}
      />
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
        <planeGeometry args={[10, 10]} />
        <shadowMaterial opacity={0.3} />
      </mesh>
    </Canvas>
  );
};

export default Modelo4;
/* eslint-disable react/no-unknown-property */

import { Canvas } from "@react-three/fiber";
import { OrbitControls} from "@react-three/drei";
import Hipertension from "./models-3d/Hipertension";
import Lights from "./lights/Lights";


// Habilitamos usar <shadowMaterial /> en JSX

const Modelo1 = () => {
  return (
    <Canvas camera={{ position: [0, 0, 2] }} shadows={true}>
      <Lights />
      <OrbitControls 
        enableZoom={true}
        enablePan={true}
        enableRotate={true}
        minDistance={1}
        maxDistance={4}
      />
      <Hipertension
        scale={2}
        postion = {[0, 0.2, 0]}
        rotation = {[0, Math.PI, 0]}
      />
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
        <planeGeometry args={[4, 4]} />
        <shadowMaterial opacity={0.6} />
      </mesh>
    </Canvas>
  );
};

export default Modelo1;

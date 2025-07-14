/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Lights from "./lights/Lights";
import Scene from "./scene/Scene";
import { Suspense } from "react";

const Modelo4 = () => {
  return (
    <Canvas shadows="soft" dpr={[1, 2]} camera={{ position: [0, 0, 16], fov: 35 }}>
      {/* Controles de cámara */}
      <OrbitControls 
        enableZoom={true} 
        enablePan={false} 
        enableRotate={true}
        minDistance={10}
        maxDistance={20}
        maxPolarAngle={Math.PI / 2.2}
        minPolarAngle={Math.PI / 6}
        target={[0, -1.5, 0]}
      />
      
      {/* Sistema de iluminación */}
      <Lights />
      
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  );
};

export default Modelo4;
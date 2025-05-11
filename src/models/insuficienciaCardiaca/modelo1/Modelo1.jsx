/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Stats } from "@react-three/drei";
import Lights from "./lights/Lights";
import Scene from "./scene/Scene";
import { Suspense } from "react";

const Modelo1 = () => {
  return (
    <Canvas shadows="soft" dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
      {/* Controles de cámara */}
      <OrbitControls 
        enableZoom={true} 
        enablePan={false} 
        enableRotate={true}
        minDistance={2}
        maxDistance={10}
        maxPolarAngle={Math.PI / 2}
        target={[0, 0, 0]}
      />
      
            
      {/* Sistema de iluminación */}
      <Lights />
      
      
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    
    </Canvas>
  );
};

export default Modelo1;
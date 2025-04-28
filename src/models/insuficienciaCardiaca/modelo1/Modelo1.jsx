/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import DilatedHeart from "./models-3d/dilatedHeart";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import Lights from "./lights/Lights";

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
      <DilatedHeart 
        scale={5} 
        position={[0, 0.2, 0]} // Elevamos ligeramente el corazón
        rotation={[0, Math.PI, 0]}  // 90 grados en Y
        />
      {/* Ajuste fino del plano de sombra */}
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
        <planeGeometry args={[4, 4]} />
        <shadowMaterial opacity={0.6} /> {/* Mayor opacidad para sombra más definida */}
      </mesh>
    </Canvas>
  );
};

export default Modelo1;
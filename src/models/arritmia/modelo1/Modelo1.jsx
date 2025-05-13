/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import Arritmia from "./models-3d/Arritmia";
import { OrbitControls } from "@react-three/drei";
import Lights from "./lights/Lights";

const Modelo1 = () => {
  return (
    <Canvas camera={{ position: [0, 1, 2] }} shadows={true}>
      <Lights />
      <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
      <Arritmia />
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
        <planeGeometry args={[5, 5]} />
        <shadowMaterial opacity={0.3} />
      </mesh>
    </Canvas>
  );
};

export default Modelo1;
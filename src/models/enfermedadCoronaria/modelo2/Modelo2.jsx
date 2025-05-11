/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import Artery from "./models-3d/artery";
import { OrbitControls } from "@react-three/drei";
import Lights from "./lights/Lights";

const Modelo2 = () => {
  return (
    <Canvas camera={{ position: [0, 1, 2] }} shadows={true}>
      <Lights/>
      <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
      <Artery />
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
        <planeGeometry args={[5, 5]} />
        <shadowMaterial opacity={0.3} />
      </mesh>
    </Canvas>
  );
};

export default Modelo2;
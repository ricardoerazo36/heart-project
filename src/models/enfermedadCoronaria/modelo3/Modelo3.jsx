/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import Artery from "./models-3d/heartCoronary";
import { OrbitControls } from "@react-three/drei";
import Lights from "./lights/Lights";
import Scene from "./scene/Scene";

const Modelo3 = () => {
  return (
    <Canvas camera={{ position: [0, 1, 2] }} shadows>
      <Scene />
      <Lights />
      <OrbitControls enableZoom enablePan enableRotate />
      <Artery />
      <mesh
        receiveShadow
        position={[0, -1.5, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="#202020" />
      </mesh>
    </Canvas>
  );
};

export default Modelo3;

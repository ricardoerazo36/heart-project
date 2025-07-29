/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
//import { Model as Pill1} from "./models-3d/pill-1"
import MedicineCarousel from "./models-3d/medicineCarousel";
import { OrbitControls } from "@react-three/drei";
import Lights from "./lights/Lights";
import Scene from "./scene/Scene";

const Modelo4 = () => {
  return (
    <Canvas camera={{ position: [0, 1, 3] }} shadows>
      <Scene />
      <Lights />
      <OrbitControls enableZoom enablePan enableRotate />
      {/*<Pill1/>*/}
      <MedicineCarousel scale={2} position={[0, 0.5, 0]} rotation={[0, Math.PI / 2, 0]} />

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

export default Modelo4;

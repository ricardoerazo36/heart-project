/* eslint-disable react/no-unknown-property */
import { Environment } from "@react-three/drei";

const Lights = () => {
  return (
    <>
      <hemisphereLight
        intensity={0.8}
        groundColor="#cccccc"
        skyColor="#ffffff"
      />

      <pointLight
        position={[1, 3, 1]}
        intensity={50}
        color="#ffeb3b"
        distance={10}
        decay={1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />

      <Environment preset="sunset" background={false} />
    </>
  );
};

export default Lights;

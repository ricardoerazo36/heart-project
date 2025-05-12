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
        position={[0, 3, 2]}
        intensity={25}
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

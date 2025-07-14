/* eslint-disable react/no-unknown-property */
import { Sky, Environment } from "@react-three/drei";

const Scene = () => {
  return (
    <>
      <Sky
        sunPosition={[5, 5, 5]}
        turbidity={5}
        rayleigh={1}
        mieCoefficient={0.003}
        mieDirectionalG={0.7}
      />

      <Environment preset="apartment" background blur={0.5} />

      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
        <planeGeometry args={[15, 15]} />
        <meshStandardMaterial color="#e0e0e0" roughness={0.8} metalness={0.2} />
      </mesh>
    </>
  );
};

export default Scene;

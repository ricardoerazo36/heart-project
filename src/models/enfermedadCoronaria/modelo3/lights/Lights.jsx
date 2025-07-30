/* eslint-disable react/no-unknown-property */
import { Environment } from "@react-three/drei";

const Lights = () => {
  return (
    <>
      {/* Luz ambiental suave */}
      <ambientLight intensity={0.4} />

      {/* Luz direccional principal */}
      <directionalLight
        position={[3, 5, 2]}
        intensity={1.2}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0001}
      />

      {/* Luz focal suave (simula lámpara médica) */}
      <spotLight
        position={[2, 5, 0]}
        angle={0.3}
        penumbra={0.5}
        intensity={1}
        castShadow
        color="#ffcccc"
      />

      {/* Entorno realista */}
      <Environment preset="city" background={false} />
    </>
  );
};

export default Lights;

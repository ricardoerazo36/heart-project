/* eslint-disable react/no-unknown-property */
import { Environment } from "@react-three/drei";

const Lights = () => {
  return (
    <>
      {/* Un ambient light suave para subir iluminación global */}
      <ambientLight intensity={2} />

      {/* Un directional light suave, como luz extra de relleno */}
      <directionalLight
        position={[5, 15, 10]}
        intensity={18}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-radius={2}
      />

      {/* Entorno HDRI para reflejos y atmósfera */}
      <Environment preset="sunset" background={false} />
    </>
  );
};

export default Lights;


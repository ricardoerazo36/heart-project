/* eslint-disable react/no-unknown-property */
import { useRef } from "react";

const Lights = () => {
  const directionalLightRef = useRef();

  return (
    <>
      {/* Luz ambiental suave para iluminación general */}
      <ambientLight intensity={1.5} />
      
      {/* Única luz direccional con sombra nítida */}
      <directionalLight
        ref={directionalLightRef}
        castShadow
        position={[5, 10, 8]}
        intensity={12}
        shadow-mapSize={[2048, 2048]}
        shadow-bias={-0.0001}
      >
        <orthographicCamera 
          attach="shadow-camera" 
          args={[-10, 10, 10, -10, 0.1, 50]} 
        />
      </directionalLight>
      
      {/* Luz de relleno frontal (sin sombras) */}
      <pointLight position={[0, 2, 8]} intensity={5} color="#ffffff" />
    </>
  );
};

export default Lights;
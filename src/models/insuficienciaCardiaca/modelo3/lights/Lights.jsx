/* eslint-disable react/no-unknown-property */
import { useRef } from "react";

const Lights = () => {
  const directionalLightRef = useRef();

  return (
    <>
      {/* Iluminación neutra y clínica para dispositivo médico */}
      <ambientLight intensity={1.4} color="#f8f8ff" />
      
      {/* Luz direccional principal neutra y brillante */}
      <directionalLight
        ref={directionalLightRef}
        castShadow
        position={[5, 10, 8]}
        intensity={13}
        color="#ffffff"
        shadow-mapSize={[2048, 2048]}
        shadow-bias={-0.0001}
      >
        <orthographicCamera 
          attach="shadow-camera" 
          args={[-10, 10, 10, -10, 0.1, 50]} 
        />
      </directionalLight>
      
      {/* Luz de relleno neutra */}
      <pointLight 
        position={[0, 2, 8]} 
        intensity={6} 
        color="#ffffff" 
      />
      
      {/* Luces laterales simétricas para iluminación uniforme */}
      <pointLight
        position={[6, 3, 3]}
        intensity={3}
        color="#f0f0f0"
      />
      <pointLight
        position={[-6, 3, 3]}
        intensity={3}
        color="#f0f0f0"
      />
      
      {/* Luz focal superior para destacar detalles técnicos */}
      <spotLight
        position={[0, 10, 2]}
        angle={0.5}
        penumbra={0.3}
        intensity={5}
        color="#ffffff"
      />
    </>
  );
};

export default Lights;

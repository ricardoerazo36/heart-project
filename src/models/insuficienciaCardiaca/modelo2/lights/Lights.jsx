/* eslint-disable react/no-unknown-property */
import { useRef } from "react";

const Lights = () => {
  const directionalLightRef = useRef();

  return (
    <>
      {/* Iluminación fría para corazón enfermo */}
      <ambientLight intensity={1.3} color="#e6f2ff" />
      
      {/* Luz direccional principal con tono azulado frío */}
      <directionalLight
        ref={directionalLightRef}
        castShadow
        position={[5, 10, 8]}
        intensity={11}
        color="#aaccff"
        shadow-mapSize={[2048, 2048]}
        shadow-bias={-0.0001}
      >
        <orthographicCamera 
          attach="shadow-camera" 
          args={[-10, 10, 10, -10, 0.1, 50]} 
        />
      </directionalLight>
      
      {/* Luz de relleno fría frontal */}
      <pointLight 
        position={[0, 2, 8]} 
        intensity={5} 
        color="#ccddff" 
      />
      
      {/* Luz posterior para crear dramatismo */}
      <directionalLight
        position={[-8, -3, -5]}
        intensity={2}
        color="#6699ff"
      />
      
      {/* Luz cenital para acentuar dilatación */}
      <spotLight
        position={[0, 8, 0]}
        angle={0.3}
        penumbra={0.6}
        intensity={4}
        color="#99bbff"
      />
    </>
  );
};

export default Lights;
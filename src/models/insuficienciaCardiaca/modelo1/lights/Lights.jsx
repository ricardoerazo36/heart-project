/* eslint-disable react/no-unknown-property */
import { useRef } from "react";

const Lights = () => {
  const directionalLightRef = useRef();

  return (
    <>
      
      <ambientLight intensity={1.2} color="#fff5e6" />
      
      <directionalLight
        ref={directionalLightRef}
        castShadow
        position={[5, 10, 8]}
        intensity={10}
        color="#ffccaa"
        shadow-mapSize={[2048, 2048]}
        shadow-bias={-0.0001}
      >
        <orthographicCamera 
          attach="shadow-camera" 
          args={[-10, 10, 10, -10, 0.1, 50]} 
        />
      </directionalLight>
      
      
      <pointLight 
        position={[0, 2, 8]} 
        intensity={4} 
        color="#ffeedd" 
      />
      
      
      <spotLight
        position={[-5, 5, 5]}
        angle={0.4}
        penumbra={0.8}
        intensity={3}
        color="#ffddbb"
      />
    </>
  );
};

export default Lights;
/* eslint-disable react/no-unknown-property */
import { useRef } from "react";

const Lights = () => {
  const spotLight1Ref = useRef();
  const spotLight2Ref = useRef();

  return (
    <>
      {/* Luz ambiental más cálida */}
      <ambientLight intensity={0.8} color="#ffeaa7" />
      
      {/* Luz principal lateral derecha */}
      <spotLight
        ref={spotLight1Ref}
        castShadow
        position={[8, 6, 4]}
        angle={0.4}
        penumbra={0.6}
        intensity={2.5}
        color="#ffffff"
        shadow-mapSize={[1024, 1024]}
        shadow-bias={-0.0001}
      />
      
      {/* Luz de relleno lateral izquierda */}
      <spotLight
        ref={spotLight2Ref}
        position={[-6, 4, 6]}
        angle={0.5}
        penumbra={0.8}
        intensity={1.8}
        color="#dff9fb"
      />
      
      {/* Luz trasera para crear silueta */}
      <directionalLight
        position={[0, 8, -10]}
        intensity={1.0}
        color="#ff7979"
      />
      
      {/* Luz de suelo para iluminar desde abajo */}
      <hemisphereLight
        skyColor="#81ecec"
        groundColor="#fab1a0"
        intensity={0.5}
      />
    </>
  );
};

export default Lights;
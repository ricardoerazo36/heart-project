/* eslint-disable react/no-unknown-property */


import { useRef } from "react";

const Lights = () => {
  const mainLightRef = useRef();

  //useHelper(mainLightRef, DirectionalLightHelper);
  

  return (
    <>
      <ambientLight intensity={10} />

      <directionalLight
        position={[10, 10, 25]}
        intensity={15}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
        shadow-camera-near={1}
        shadow-camera-far={50}
        ref={mainLightRef}
      />

      <directionalLight
        position = {[-10, -10, -25]}
        intensity={15}
        
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        ref={mainLightRef}
      />
    </>
  );
};

export default Lights;

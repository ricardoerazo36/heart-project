/* eslint-disable react/no-unknown-property */

import { useRef} from "react";

const Lights = () => {
  const directionalLightRef = useRef();   


  return (
    <>
      <ambientLight intensity={2} />
      <directionalLight
        ref={directionalLightRef}
        castShadow
        position={[5, 15, 10]}
        intensity={18}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-radius={2}
      />
    </>
  );
};

export default Lights;


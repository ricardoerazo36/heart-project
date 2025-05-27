/* eslint-disable react/no-unknown-property */

import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls} from "@react-three/drei";
import { useRef } from "react";
import { useState } from "react";
import Lights from "../modelo1/lights/Lights";
import Strained from "../modelo1/models-3d/Strained";
import Title from "../text/Title";



// Habilitamos usar <shadowMaterial /> en JSX



const Modelo2 = () => {

  const  [titleText, setTitleText] = useState("");

  const InteractiveStrained = () => {
    const strainedRef = useRef();
    const {camera} = useThree();
  
    const handleClick = () => {
  
      camera.position.set(-0.7, -2.4, -1.5);
      camera.lookAt(0, 0, 0);
      setTitleText("← Hipertrofia Articular");
    };
  
    return (
      <mesh ref={strainedRef} onClick={handleClick}>
        <Strained
          scale={2.5}
          position={[0.4, -0.2, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </mesh>
    );
  };

  return (
    <Canvas camera={{ position: [0, -1, -2] }} shadows={true}>
      <Lights />
      <OrbitControls

        enableZoom={true}
        enablePan={true}
        enableRotate={true}

      />
      <InteractiveStrained />

      {/* <Text
        position={[1, -0.5, 0.9]}
        rotation={[-1, 0.2, 2.5]}
        fontSize={0.5}
        
        anchorX="center"
        anchorY="middle"
      >
      →→
      <meshBasicMaterial attach="material" color="#2392fa" />
      </Text> */}

      <Title title={titleText} />

      
    </Canvas>
  );
};

export default Modelo2;

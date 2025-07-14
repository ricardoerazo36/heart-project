/* eslint-disable react/no-unknown-property */
import { useState, useEffect } from "react";
import { Sky, Environment, Text, Html, Text3D, Center} from "@react-three/drei";
import RealisticHeart from "../models-3d/realisticHeart";
import { useFrame } from "@react-three/fiber";


const Scene = () => {
  const [heartScale, setHeartScale] = useState(10);
  const [isAnimationPaused, setIsAnimationPaused] = useState(false);
  const [titlePosition, setTitlePosition] = useState([0, 2, 0]);

  
  // Manejo de teclado para pausar/reanudar la animación con la tecla E
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'e' || e.key === 'E') {
        setIsAnimationPaused(prev => !prev);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Nueva animación de palpitación cardíaca
  useFrame(({ clock }) => {
    if (isAnimationPaused) return;
    
    const time = clock.getElapsedTime();
    
    // Simulación de latido cardíaco
    const baseScale = 8;
    const beatIntensity = 0.4; // Intensidad del latido
    const beatSpeed = 1.2; // Velocidad del latido
    const heartBeat = Math.pow(Math.sin(time * beatSpeed) * 0.5 + 0.5, 2) * beatIntensity;
    
    setHeartScale(baseScale + heartBeat);
  });

  return (
    <>
      
      <Environment preset="apartment" background blur={0.5}/>

      <Sky 
        distance={450000}
        sunPosition={[0, 1, 0]}
        inclination={0}
        azimuth={0.25}
        turbidity={0.1}
        rayleigh={0.1}
        mieCoefficient={0.0005}
        mieDirectionalG={0.8}
      />
      
      <ambientLight intensity={0.6} />
      <directionalLight 
        position={[5, 10, 5]} 
        intensity={1.2} 
        castShadow 
        shadow-mapSize={[2048, 2048]}
        shadow-bias={-0.0001}
      />
      <spotLight 
        position={[0, 5, 5]} 
        angle={0.3} 
        penumbra={0.5} 
        intensity={1.5} 
        castShadow 
        shadow-mapSize={[2048, 2048]}
        shadow-bias={-0.0001}
      />
      
      {/* Modelo del corazón */}
      <RealisticHeart
        scale={[heartScale, heartScale, heartScale]}
        position={[0, 0.2, 0]}
        rotation={[0, -0.2, 0]}
        castShadow
        receiveShadow
      />
      
      {/* Título centrado */}
      <Center position={titlePosition}>
        <Text3D
          font={"/fonts/raleway-bold.json"}
          bevelEnabled
          bevelSize={0.01}
          bevelThickness={0.02}
          height={0.01}
          lineHeight={0.8}
          letterSpacing={0.02}
          size={0.3}
          rotation={[0, 0, 0]}
        >
          ¡Explora tu corazón!
          <meshStandardMaterial color="#000000" />
        </Text3D>
      </Center>
      
    </>
  );
};

export default Scene;
/* eslint-disable react/no-unknown-property */
import { useState, useEffect } from "react";
import { Sky } from "@react-three/drei";
import RealisticHeart from "../models-3d/realisticHeart";
import { useFrame } from "@react-three/fiber";

const Scene = () => {
  const [heartScale, setHeartScale] = useState(4);
  const [isAnimationPaused, setIsAnimationPaused] = useState(false);
  
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
    
    // Simulación de latido cardíaco con una función más pronunciada
    // Usa una combinación de funciones trigonométricas para simular el latido
    const baseScale = 4;
    const beatIntensity = 0.4; // Intensidad del latido
    const beatSpeed = 1.2; // Velocidad del latido (ajustar para latidos por minuto)
    
    // Ecuación que simula un latido cardíaco con una subida rápida y bajada más lenta
    const heartBeat = Math.pow(Math.sin(time * beatSpeed) * 0.5 + 0.5, 2) * beatIntensity;
    
    setHeartScale(baseScale + heartBeat);
  });

  return (
    <>
      {/* Fondo claro para mejor visibilidad */}
      <color attach="background" args={["#f8f8f8"]} />
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
      
      {/* Iluminación optimizada para el corazón */}
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
        rotation={[0, Math.PI / 2, 0]}
        castShadow
        receiveShadow
      />
    </>
  );
};

export default Scene;
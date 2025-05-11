/* eslint-disable react/no-unknown-property */
import { useState, useEffect, useRef } from "react";
import { Text, Html, Sky } from "@react-three/drei";
import Pacemaker from "../models-3d/pacemaker";
import { useFrame } from "@react-three/fiber";

const Scene = () => {
  const [pacemakerScale, setPacemakerScale] = useState(5);
  const [showInfo, setShowInfo] = useState(false);
  const [hoverText, setHoverText] = useState(false);
  // Estado para controlar la pausa de la animación
  const [isAnimationPaused, setIsAnimationPaused] = useState(false);
  
  // Manejo de teclado solo para pausar/reanudar la animación
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'm' || e.key === 'M') {
        setIsAnimationPaused(prev => !prev);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Animación que simula un pulso eléctrico pequeño y regular cada 1.2 segundos
  useFrame(({ clock }) => {
    if (isAnimationPaused) {
      return;
    }
        const time = clock.getElapsedTime();
    const pulseCycle = time % 1.2; // Ciclo de 1.2 segundos (50 pulsos por minuto)
    
    let pulseScale = 1;
    
    if (pulseCycle < 0.15) {
      // Simulando el impulso eléctrico
      pulseScale = 1 + 0.03 * Math.sin(pulseCycle * Math.PI / 0.15);
    }
    
    setPacemakerScale(5 * pulseScale);
  });

  return (
    <>
      <color attach="background" args={["#ffffff"]} />
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
      
      {/* Iluminación optimizada para sombras */}
      <ambientLight intensity={0.5} />
      <directionalLight 
        position={[5, 10, 5]} 
        intensity={0.8} 
        castShadow 
        shadow-mapSize={[2048, 2048]}
        shadow-bias={-0.0001}
      />
      <spotLight 
        position={[0, 8, 2]} 
        angle={0.25} 
        penumbra={0.5} 
        intensity={1.2} 
        castShadow 
        shadow-mapSize={[2048, 2048]}
        shadow-bias={-0.0001}
      />
      
      {/* Título centrado */}
      <Text
        position={[0, 1.5, 0]}
        fontSize={0.15}
        color="#FF6B6B"
        anchorX="center"
        anchorY="middle"
        onPointerOver={() => setHoverText(true)}
        onPointerOut={() => setHoverText(false)}
        onClick={() => setShowInfo(!showInfo)}
        scale={hoverText ? 1.2 : 1}
      >
        Marcapasos
      </Text>
      
      {/* Modelo del marcapasos */}
      <Pacemaker
        scale={pacemakerScale}
        position={[0, 0.0, 0]}
        rotation={[0, 1.2, 0]}
        onClick={() => setShowInfo(!showInfo)}
        castShadow
        receiveShadow
      />
      
      {/* Plataforma mejorada para mostrar sombras */}
      <mesh position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      
      
      {/* Elemento HTML interactivo */}
      {showInfo && (
        <Html position={[0, -0.4, 0]} center style={{ width: '220px' }}>
          <div style={{ 
            backgroundColor: 'white', 
            padding: '12px', 
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
            textAlign: 'center',
            fontFamily: 'Arial',
            fontSize: '14px',
            pointerEvents: 'auto'
          }}>
            <h3 style={{ 
              margin: '0 0 10px', 
              color: '#2b2d42',
              fontSize: '16px'
            }}>Marcapasos Cardíaco</h3>
            <p style={{ 
              margin: '0 0 12px', 
              fontSize: '13px',
              lineHeight: '1.4'
            }}>
              Este dispositivo médico envía impulsos eléctricos para regular el ritmo cardíaco.
            </p>
            <div style={{ marginBottom: '12px' }}>
              <p style={{ fontSize: '12px', margin: '0 0 8px' }}>Controles:</p>
              <ul style={{ fontSize: '11px', textAlign: 'left', paddingLeft: '20px', margin: '0' }}>
                <li>M: Pausar/reanudar animación</li>
              </ul>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <button 
                style={{ 
                  width: '100%',
                  maxWidth: '120px',
                  padding: '6px 0', 
                  background: '#FF6B6B', 
                  border: 'none', 
                  borderRadius: '4px', 
                  color: 'white',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
                onClick={() => setShowInfo(false)}
              >
                Cerrar
              </button>
            </div>
          </div>
        </Html>
      )}
    </>
  );
};

export default Scene;
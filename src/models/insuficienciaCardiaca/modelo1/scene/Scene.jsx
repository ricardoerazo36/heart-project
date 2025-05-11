/* eslint-disable react/no-unknown-property */
import { useState, useEffect } from "react";
import { Text, Html, Sky } from "@react-three/drei";
import RealisticHeart from "../models-3d/realisticHeart";
import { useFrame } from "@react-three/fiber";

const Scene = () => {
  const [heartScale, setHeartScale] = useState(4);
  const [showInfo, setShowInfo] = useState(false);
  const [hoverText, setHoverText] = useState(false);
  // Estado para controlar la pausa de la animación
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

  // Animación modificada para simular dilatación gradual del corazón
  useFrame(({ clock }) => {
    if (isAnimationPaused) return;
    
    const time = clock.getElapsedTime();
    
    const dilationFactor = 3.5 + Math.sin(time * 0.5) * 0.75;
    
    setHeartScale(dilationFactor);
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
      
      {/* Título centrado */}
      <Text
        position={[0, 2.0, 0]}
        fontSize={0.2}
        color="#FF4B4B"
        anchorX="center"
        anchorY="middle"
        onPointerOver={() => setHoverText(true)}
        onPointerOut={() => setHoverText(false)}
        onClick={() => setShowInfo(!showInfo)}
        scale={hoverText ? 1.2 : 1}
        fontWeight="bold"
      >
        Corazón con Insuficiencia Cardíaca
      </Text>
      
      {/* Modelo del corazón */}
      <RealisticHeart
        scale={[heartScale, heartScale, heartScale]}
        position={[0, 0.2, 0]}
        rotation={[0, Math.PI / 2, 0]}
        onClick={() => setShowInfo(!showInfo)}
        castShadow
        receiveShadow
      />
      
      {/* Plataforma mejorada con sombras */}
      <mesh position={[0, -2.0, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[15, 15]} />
        <meshStandardMaterial 
          color="#f0f0f0" 
          roughness={0.3} 
          metalness={0.1}
        />
      </mesh>
      
      {/* Panel informativo */}
      {showInfo && (
        <Html position={[0, -0.8, 0]} center style={{ width: '280px' }}>
          <div style={{ 
            backgroundColor: 'white', 
            padding: '16px', 
            borderRadius: '10px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
            textAlign: 'center',
            fontFamily: 'Arial',
            pointerEvents: 'auto'
          }}>
            <h3 style={{ 
              margin: '0 0 10px', 
              color: '#FF4B4B',
              fontSize: '18px'
            }}>Corazón con Insuficiencia Cardíaca</h3>
            <p style={{ 
              margin: '0 0 12px', 
              fontSize: '14px',
              lineHeight: '1.5'
            }}>
              La dilatación del corazón es un signo típico de la insuficiencia cardíaca. 
              El corazón se agranda al intentar compensar su reducida capacidad para bombear sangre.
            </p>
            <div style={{ marginBottom: '14px' }}>
              <p style={{ fontSize: '13px', margin: '0 0 8px', fontWeight: 'bold' }}>Controles:</p>
              <ul style={{ fontSize: '12px', textAlign: 'left', paddingLeft: '20px', margin: '0' }}>
                <li><b>E:</b> Pausar/reanudar la animación de dilatación</li>
                <li><b>Mouse:</b> Rotar la vista alrededor del modelo</li>
                <li><b>Rueda:</b> Acercar/alejar (zoom)</li>
              </ul>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <button 
                style={{ 
                  width: '100%',
                  maxWidth: '140px',
                  padding: '8px 0', 
                  background: '#FF4B4B', 
                  border: 'none', 
                  borderRadius: '6px', 
                  color: 'white',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
                  transition: 'all 0.2s ease'
                }}
                onClick={() => setShowInfo(false)}
                onMouseOver={(e) => e.target.style.background = '#FF3131'}
                onMouseOut={(e) => e.target.style.background = '#FF4B4B'}
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
/* eslint-disable react/no-unknown-property */
import { useState, useEffect } from "react";
import { Sky, Environment, Text, Html } from "@react-three/drei";
import DilatedHeart from "../models-3d/dilatedHeart";
import { useFrame } from "@react-three/fiber";

const Scene = () => {
  const [heartScale, setHeartScale] = useState(5);
  const [heartRotation, setHeartRotation] = useState([0, Math.PI, 0]);
  const [showInfo, setShowInfo] = useState(false);
  const [hoverText, setHoverText] = useState(false);
  
  // Tecla presionada para rotar el corazón
  useEffect(() => {
    const handleKeyDown = (e) => {
      switch(e.key) {
        case 'ArrowLeft':
          setHeartRotation([heartRotation[0], heartRotation[1] - 0.1, heartRotation[2]]);
          break;
        case 'ArrowRight':
          setHeartRotation([heartRotation[0], heartRotation[1] + 0.1, heartRotation[2]]);
          break;
        default:
          break;
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [heartRotation]);

  // Efecto de latido suave
  useFrame(({ clock }) => {
    const pulse = Math.sin(clock.getElapsedTime() * 1.5) * 0.05 + 1;
    setHeartScale(prev => prev * pulse / (prev / 5));
  });

  return (
    <>
      {/* Ambiente y cielo */}
      <Sky sunPosition={[0, 1, 0]} turbidity={10} rayleigh={0.5} mieCoefficient={0.005} mieDirectionalG={0.8} />
      <Environment preset="city" />
      
      {/* Suelo con sombra */}
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
        <planeGeometry args={[10, 10]} />
        <shadowMaterial opacity={0.4} />
      </mesh>
      
      {/* Texto 3D */}
      <Text
        position={[0, 1.2, 0]}
        rotation={[0, 0, 0]}
        fontSize={0.15}
        color="#000000"
        anchorX="center"
        anchorY="middle"
        onPointerOver={() => setHoverText(true)}
        onPointerOut={() => setHoverText(false)}
        onClick={() => setShowInfo(!showInfo)}
        scale={hoverText ? 1.2 : 1}
      >
        Corazón Dilatado
      </Text>
      
      
      {/* Modelo del corazón */}
      <DilatedHeart
        scale={heartScale}
        position={[0, 0.1, 0]}
        rotation={heartRotation}
        onClick={() => setShowInfo(!showInfo)}
      />
      
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
            }}>Corazón Dilatado</h3>
            <p style={{ 
              margin: '0 0 12px', 
              fontSize: '13px',
              lineHeight: '1.4'
            }}>
              La insuficiencia cardíaca provoca que el corazón se dilate para compensar 
              su debilidad. Esto reduce su eficiencia y empeora el problema a largo plazo.
            </p>
            <p style={{ 
              margin: '0 0 12px', 
              fontSize: '13px',
              lineHeight: '1.4'
            }}>
              Presiona las flechas ← y → para rotar.
            </p>
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
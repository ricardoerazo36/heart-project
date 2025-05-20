/* eslint-disable react/no-unknown-property */
import { useState, useEffect, useRef } from "react";
import { Text, Html, Environment, Stars, Sky } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import Runner from "../models-3d/runner";


const Scene = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [hoverText, setHoverText] = useState(false);
  const [titlePosition, setTitlePosition] = useState([0, 2.2, 0]);
  const { scene } = useThree();
  
  // Referencias para animaciones
  const runnerRef = useRef();
  const runnerGroupRef = useRef();
  
  
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
  
    
    // Animación para el corredor
    if (runnerRef.current) {
      // Movimiento de rebote suave para simular carrera
      runnerRef.current.position.y = -2.05 + Math.abs(Math.sin(time * 8)) * 0.08;
      
      // Ligera inclinación adelante y atrás para simular el movimiento de carrera
      runnerRef.current.rotation.x = Math.sin(time * 8) * 0.04;
    }
    
    // Animación para el grupo completo del corredor (rotación completa)
    if (runnerGroupRef.current) {
      // Movimiento de balanceo ligero
      runnerGroupRef.current.rotation.y = Math.PI / 4 + Math.sin(time * 1.5) * 0.05;
    }
  });

  return (
    <>
      <Environment preset="sunset" background={false} />
      <Sky
        distance={450000}
        sunPosition={[5, 1, 8]}
        inclination={0.49}
        azimuth={0.25}
        turbidity={8}
        rayleigh={1}
        mieCoefficient={0.005}
        mieDirectionalG={0.8}
      />

      {/* Estrellas */}
      <Stars
        radius={100}
        depth={50}
        count={1000}
        factor={4}
        saturation={0.6}
        fade
        speed={1}
      />

      <ambientLight intensity={0.4} />
      <directionalLight
        position={[5, 10, 7.5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <mesh
        receiveShadow
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -5.5, 0]}
      >
        <planeGeometry args={[1000, 1000]} />
        <meshStandardMaterial
          color="#3AFC7B"
          roughness={0.9}
          metalness={0.05}
        />
      </mesh>

      
      {/* Título centrado */}
      <Text
        position={titlePosition}
        rotation={[0, 0, 0]}
        fontSize={0.25}
        color="#000000"
        anchorX="center"
        anchorY="middle"
        onPointerOver={() => setHoverText(true)}
        onPointerOut={() => setHoverText(false)}
        onClick={() => setShowInfo(!showInfo)}
        scale={hoverText ? 1.2 : 1}
      >
        Descubre los Beneficios del Ejercicio
      </Text>

      {/* Grupo para animar el corredor completo */}
      <group 
        ref={runnerGroupRef}
        position={[0, 0, 0]}
        rotation={[0, 0, 0]}
      >
        {/* Modelo 3D */}
        <Runner
          ref={runnerRef}
          scale={3.5}
          position={[0, 0, 0]}
          rotation={[0, -0.8, 0]}
          onClick={() => setShowInfo(!showInfo)}
        />
                
      </group>

      {/* HTML informativo*/}
      {showInfo && (
        <Html position={[0, -0.5, 0]} center style={{ width: '260px' }}>
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
            }}>Beneficios del Ejercicio</h3>
            <p style={{ 
              margin: '0 0 12px', 
              fontSize: '13px',
              lineHeight: '1.4'
            }}>
              El ejercicio cardiovascular regular fortalece el músculo cardíaco, mejora la 
              circulación sanguínea y reduce el riesgo de insuficiencia cardíaca. Se recomienda 
              realizar al menos 150 minutos de actividad moderada a la semana.
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
/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import { Text, Html, Environment, Stars, Sky } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import Runner from "../models-3d/runner";


const Scene = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [hoverText, setHoverText] = useState(false);
  const { scene } = useThree();

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

      {/* Texto superior */}
      <Text
        position={[0, 1, 0]}
        rotation={[0, 0, 0]}
        fontSize={0.5}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        onPointerOver={() => setHoverText(true)}
        onPointerOut={() => setHoverText(false)}
        onClick={() => setShowInfo(!showInfo)}
        scale={hoverText ? 1.2 : 1}
        material-toneMapped={false}
        material-emissive="#ffffff"
        material-emissiveIntensity={0.5}
      >
        Ejercicio Regular
      </Text>

      {/* Texto inferior */}
      <Text
        position={[0, -3.5, 0]}
        rotation={[0, 0, 0]}
        fontSize={0.25}
        color="#dfe6e9"
        anchorX="center"
        anchorY="middle"
        material-toneMapped={false}
        material-emissive="#dfe6e9"
        material-emissiveIntensity={0.3}
      >
        Fortalece tu corazón
      </Text>

      {/* Modelo 3D */}
      <Runner
        scale={3.5}
        position={[0, -2.05, 0]}
        rotation={[0, Math.PI / 4, 0]}
        onClick={() => setShowInfo(!showInfo)}
      />

      {/* HTML informativo */}
      {showInfo && (
        <Html position={[0, -0.5, 0]} center style={{ width: '280px' }}>
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            padding: '16px',
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            textAlign: 'center',
            fontFamily: 'Arial, sans-serif',
            fontSize: '14px',
            pointerEvents: 'auto',
            backdropFilter: 'blur(10px)'
          }}>
            <h3 style={{
              margin: '0 0 12px',
              color: '#2d3436',
              fontSize: '18px',
              fontWeight: 'bold'
            }}>Ejercicio Regular</h3>
            <p style={{
              margin: '0 0 15px',
              fontSize: '13px',
              lineHeight: '1.5',
              color: '#636e72'
            }}>
              El ejercicio cardiovascular regular es fundamental para mantener un corazón saludable
              y prevenir la insuficiencia cardíaca. Actividades como correr, caminar y nadar
              fortalecen el músculo cardíaco y mejoran la circulación.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <button
                style={{
                  width: '120px',
                  padding: '8px 0',
                  background: 'linear-gradient(135deg, #74b9ff, #0984e3)',
                  border: 'none',
                  borderRadius: '6px',
                  color: 'white',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  transition: 'transform 0.2s'
                }}
                onClick={() => setShowInfo(false)}
                onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
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

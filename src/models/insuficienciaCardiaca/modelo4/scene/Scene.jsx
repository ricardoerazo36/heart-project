/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import { Text, Html, Environment } from "@react-three/drei";
import Runner from "../models-3d/runner";

const Scene = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [hoverText, setHoverText] = useState(false);
  
  return (
    <>
      {/* Ambiente HDRI para mayor realismo */}
      <Environment preset="sunset" background />
      
      
      {/* Modelo del corredor - sin animación */}
      <Runner
        scale={3.5}
        position={[0, -1.5, 0]}
        rotation={[0, Math.PI / 4, 0]}
        onClick={() => setShowInfo(!showInfo)}
      />
      
      {/* Elemento HTML informativo */}
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
            }}>Prevención - Ejercicio Regular</h3>
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
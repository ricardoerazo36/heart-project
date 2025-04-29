/* eslint-disable react/no-unknown-property */
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import HeartModel from './HeartModel';

const HeartViewer = ({ width = '100%', height = '400px' }) => {
  return (
    <div style={{ width, height }}>
      <Suspense fallback={<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        Cargando modelo 3D...
      </div>}>
        <Canvas 
          camera={{ position: [0, 0, 5], fov: 40 }}
          shadows
        >
          {/* Fondo */}
          <color attach="background" args={['#ffffff']} />
          
          {/* Sistema de iluminación mejorado */}
          <ambientLight intensity={1.2} />
          <spotLight 
            position={[10, 10, 10]} 
            intensity={2} 
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
          <spotLight position={[-10, 5, 10]} intensity={1.5} />
          <pointLight position={[0, 0, 5]} intensity={1} />
          
          {/* Modelo 3D */}
          <HeartModel />
          
          {/* Controles de cámara */}
          <OrbitControls 
            enableZoom={true}
            autoRotate
            autoRotateSpeed={0.5}
            minDistance={3}
            maxDistance={10}
          />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default HeartViewer;
/* eslint-disable react/no-unknown-property */
import { useGLTF } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense, useEffect, useRef } from 'react';

const Heart = () => {
  const { scene } = useGLTF('./models-3d/human-heart.glb');
  const heartRef = useRef();
  
  useEffect(() => {
    // Mejoras en materiales y texturas
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material.roughness = 0.4;
        child.material.metalness = 0.1;
        child.castShadow = true;
        child.receiveShadow = true;
        child.material.needsUpdate = true;
      }
    });
  }, [scene]);

  useFrame(() => {
    if (heartRef.current) {
      heartRef.current.rotation.y += 0.005;
    }
  });

  return <primitive ref={heartRef} object={scene} scale={1.7} position={[0, -0.5, 0]} />;
};

// Componente principal que maneja todo el visor
const HeartModel = ({ width = '100%', height = '400px' }) => {
  return (
    <div style={{ width, height }}>
      <Suspense fallback={<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        Cargando modelo 3D...
      </div>}>
        <Canvas 
          camera={{ position: [0, 0, 2], fov: 45 }}
          shadows
        >
          <color attach="background" args={['#f8f9fa']} />
          
          <ambientLight intensity={1.5} />
          <spotLight position={[10, 10, 10]} intensity={2.5} castShadow />
          <spotLight position={[-10, 5, 10]} intensity={2} />
          
          {/* Modelo del corazón */}
          <Heart />
          
          <OrbitControls 
            enableZoom={true}
            target={[0, -0.5, 0]}
            minDistance={2.5}
            maxDistance={8}
          />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default HeartModel;
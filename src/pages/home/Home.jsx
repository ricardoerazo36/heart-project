/* eslint-disable react/no-unknown-property */
import "./Home.css";
import { useNavigate } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import {Suspense} from 'react';

// 3D Model Component
const HeartModel = () => {
  const { scene } = useGLTF('./models-3d/human-heart.glb'); // Adjust path as needed
  return <primitive object={scene} scale={0.8} position={[0, -1, 0]} />;
};


const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Bienvenido a Heart Care</h1>
        <h2 className="subtitle">Explorando el corazón de una forma dinámica y visual</h2>
        <p className="app-description">
          Heart Care es una aplicación diseñada para ayudarte a aprender más sobre el 
          corazón humano, qué puede afectarlo y cómo puedes cuidar de él, utilizando consejos
          y datos avalados por la medicina, ilustrados utilizando modelos 3D.
        </p>
      </header>
      {/* 3D Model Banner */}
      <div className="model-banner">
        <Suspense fallback={<div className="model-loading">Cargando modelo 3D...</div>}>
          <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />
            <HeartModel />
            <OrbitControls enableZoom={true} />
          </Canvas>
        </Suspense>
      </div>

      <button 
        className="cta-button"
        onClick={() => navigate('/Quiz')} // Change '/explorar' to your desired route
      >
        Explorar las enfermedades
      </button>
    </div>
  );
};

export default Home;

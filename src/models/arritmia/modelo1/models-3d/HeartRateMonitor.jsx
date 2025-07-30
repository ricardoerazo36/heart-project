/* eslint-disable react/no-unknown-property */
import { useGLTF, Html } from "@react-three/drei";
import { useRef, useState } from "react";
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function HeartRateMonitor(props) {
  const { nodes, materials } = useGLTF('/models-3d/heart-rate-monitor.glb');
  const groupRef = useRef();
  const levitationOffset = useRef(0);
  const [color, setColor] = useState('#ffffff'); // Color por defecto

  // Crea un nuevo material con el color actual
  const coloredMaterial = new THREE.MeshStandardMaterial({
    ...materials.MonitorMaterial,
    color: new THREE.Color(color)
  });

  // Animacion para la levitacion
  useFrame((state, delta) => {
    if (!groupRef.current) return;
    
    // Levitacion
    levitationOffset.current += delta;
    
    // Levitacion
    const floatingHeight = Math.sin(levitationOffset.current * 1.5) * 0.05;
    groupRef.current.position.y = floatingHeight;
    
    // Rotacion sutil
    groupRef.current.rotation.z = Math.sin(levitationOffset.current * 0.7) * 0.02;
    groupRef.current.rotation.x = Math.cos(levitationOffset.current * 0.5) * 0.01;
  });

  // Evento de mouse para cambiar color
  const handleClick = () => {
    // Genera un color aleatorio de una lista de colores
    const colors = [
      '#ff0000', 
      '#00ff00', 
      '#0000ff', 
      '#ffff00', 
      '#ff00ff', 
      '#00ffff', 
      '#ffffff', 
    ];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setColor(randomColor);
  };

  return (
    <group ref={groupRef} {...props} dispose={null} onClick={handleClick}>
      {/* Pantalla del monitor */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Monitor.geometry}
        material={coloredMaterial}
      />
      
      {/* Parte secundaria del monitor */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Monitor001.geometry}
        material={coloredMaterial}
      />
      
      {/* Etiqueta HTML flotante */}
      <Html
        as='div'
        wrapperClass="label-container"
        position={[0, 5, 0]}
        distanceFactor={5}
        style={{
          pointerEvents: 'none',
          color: 'white',
          backgroundColor: 'rgba(0,0,0,0.7)',
          padding: '4px 8px',
          borderRadius: '4px',
          fontSize: '16px',
          whiteSpace: 'nowrap',
          fontFamily: 'Arial, sans-serif',
          fontWeight: 'bold'
        }}
      >
        Monitor de frecuencia
      </Html>
    </group>
  );
}

useGLTF.preload('/models-3d/heart-rate-monitor.glb');

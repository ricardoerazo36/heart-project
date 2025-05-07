/* eslint-disable react/no-unknown-property */
import { useGLTF } from '@react-three/drei';
import { useEffect } from 'react';

const HeartModel = ({ scale = 1.2, position = [0, 0, 0] }) => {
  const { scene } = useGLTF('./models-3d/human-heart.glb');

  // Mejoramos el modelo al montarse el componente
  useEffect(() => {
    // Mejoras en materiales y texturas
    scene.traverse((child) => {
      if (child.isMesh) {
        // Mejoramos las propiedades visuales del material
        child.material.roughness = 0.5;
        child.material.metalness = 0.2;
        
        // Para sombras más definidas si se necesitan
        child.castShadow = true;
        child.receiveShadow = true;
        
        // Aseguramos que los cambios se apliquen
        child.material.needsUpdate = true;
      }
    });
  }, [scene]);

  return <primitive object={scene} scale={scale} position={position} />;
};

export default HeartModel;
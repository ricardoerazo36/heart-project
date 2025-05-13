/* eslint-disable react/no-unknown-property */
import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

export default function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/models-3d/beating-heart.glb');
  const { actions, mixer } = useAnimations(animations, group);
  const manualBeatIntensity = useRef(0);

  // 1. Animaciones del GLB
  useEffect(() => {
    console.log('Animaciones disponibles:', Object.keys(actions));
    
    // Reproducir la primera animación encontrada en el modelo
    if (actions && Object.keys(actions).length > 0) {
      const animationName = Object.keys(actions)[0];
      actions[animationName].play();
      actions[animationName].setEffectiveTimeScale(1.5); // Acelerar un poco la animación
    }

    return () => {
      // Limpieza al desmontar
      if (mixer) mixer.stopAllAction();
    };
  }, [actions, mixer]);

  // 2. Animación programada adicional (para reforzar el efecto)
  useFrame((state) => {
    // Añadir un pulso adicional sincronizado con la animación
    const elapsed = state.clock.elapsedTime;
    manualBeatIntensity.current = Math.sin(elapsed * 5) * 0.5 + 0.5;
    
    // Aplicar a los morph targets si existen
    if (nodes.Heart.morphTargetInfluences) {
      nodes.Heart.morphTargetInfluences[0] = manualBeatIntensity.current * 0.3;
    }
    
    // Rotación suave opcional
    group.current.rotation.y = elapsed * 0.1;
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Heart.geometry}
          material={materials.HeartMaterial}
          morphTargetDictionary={nodes.Heart.morphTargetDictionary}
          morphTargetInfluences={nodes.Heart.morphTargetInfluences}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/models-3d/beating-heart.glb');
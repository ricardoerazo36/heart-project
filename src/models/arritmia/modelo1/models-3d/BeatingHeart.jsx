/* eslint-disable react/no-unknown-property */
import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';

export default function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/models-3d/beating-heart.glb');
  const { actions, mixer } = useAnimations(animations, group);
  const manualBeatIntensity = useRef(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const clockRef = useRef({ elapsedTime: 0 });
  const { camera } = useThree();
  const previousMousePosition = useRef({ x: 0, y: 0 });
  const originalScale = useRef(new THREE.Vector3(1, 1, 1));

  // Almacenar la escala original al montar el componente
  useEffect(() => {
    if (group.current) {
      originalScale.current.copy(group.current.scale);
    }
  }, []);

  // Manejo de teclado para pausar/reanudar
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key.toLowerCase() === 'e') {
        setIsPaused(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Control de animaciones GLB
  useEffect(() => {
    if (!actions || Object.keys(actions).length === 0) return;

    const animationName = Object.keys(actions)[0];
    const action = actions[animationName];

    if (isPaused) {
      action.paused = true;
      mixer.timeScale = 0; // Pausar el mixer
    } else {
      action.paused = false;
      mixer.timeScale = isHovered ? 2.0 : 1.5; // Aumentar velocidad al hacer hover
      action.play();
    }

    return () => {
      if (mixer) mixer.stopAllAction();
    };
  }, [actions, mixer, isPaused, isHovered]);

  // Eventos de ratón 3D
  const handlePointerOver = () => {
    setIsHovered(true);
    document.body.style.cursor = 'pointer';
  };

  const handlePointerOut = () => {
    setIsHovered(false);
    document.body.style.cursor = 'auto';
  };

  const handlePointerDown = (e) => {
    e.stopPropagation();
    setIsDragging(true);
    previousMousePosition.current = {
      x: e.clientX,
      y: e.clientY
    };
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  const handlePointerMove = (e) => {
    if (isDragging && group.current) {
      const deltaMove = {
        x: e.clientX - previousMousePosition.current.x,
        y: e.clientY - previousMousePosition.current.y
      };

      // Rotación basada en el movimiento del ratón
      group.current.rotation.y += deltaMove.x * 0.01;
      group.current.rotation.x += deltaMove.y * 0.01;

      previousMousePosition.current = {
        x: e.clientX,
        y: e.clientY
      };
    }
  };

  const handleWheel = (e) => {
    e.stopPropagation();
    const zoomIntensity = 0.001;
    const newScale = group.current.scale.x + (e.deltaY > 0 ? -zoomIntensity : zoomIntensity);
    
    // Limitar el zoom entre 0.5 y 2 veces el tamaño original
    const clampedScale = Math.max(0.5, Math.min(2, newScale));
    group.current.scale.set(clampedScale, clampedScale, clampedScale);
  };

  // Animación programada adicional
  useFrame((state) => {
    if (isPaused && !isDragging) {
      clockRef.current.elapsedTime = state.clock.elapsedTime;
      return;
    }

    // Añadir un pulso adicional sincronizado con la animación
    const elapsed = state.clock.elapsedTime;
    manualBeatIntensity.current = Math.sin(elapsed * 5) * 0.5 + 0.5;
    
    // Aplicar a los morph targets si existen
    if (nodes.Heart?.morphTargetInfluences) {
      nodes.Heart.morphTargetInfluences[0] = manualBeatIntensity.current * (isHovered ? 0.5 : 0.3);
    }
    
    // Rotación suave opcional (solo cuando no se está arrastrando)
    if (!isDragging) {
      group.current.rotation.y = elapsed * 0.1;
    }

    // Efecto de hover (levitación suave)
    if (isHovered && !isDragging) {
      group.current.position.y = Math.sin(elapsed * 3) * 0.05;
    } else {
      group.current.position.y = 0;
    }

    // Cambiar color del material cuando está hover
    if (materials.HeartMaterial) {
      materials.HeartMaterial.color.lerp(
        new THREE.Color(isHovered ? '#ff3333' : '#aa0000'),
        0.1
      );
      materials.HeartMaterial.emissiveIntensity = isHovered ? 0.3 : 0.1;
    }
  });

  return (
    <group 
      ref={group} 
      {...props} 
      dispose={null}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerMove={handlePointerMove}
      onWheel={handleWheel}
    >
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

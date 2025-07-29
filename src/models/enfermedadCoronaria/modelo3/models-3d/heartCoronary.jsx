/* eslint-disable react/no-unknown-property */
import { useGLTF, Html, Text, PositionalAudio } from "@react-three/drei";
import { useRef, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";

export default function HeartCoronary(props) {
  const { nodes, materials, scene } = useGLTF("/models-3d/heart-coronary.glb");
  const arteryRef = useRef();
  const audioRef = useRef();
  const [showInfo, setShowInfo] = useState(false);
  const [isBeating, setIsBeating] = useState(true);
  const [hovered, setHovered] = useState(false);

  // Tecla L para pausar/reanudar latido
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key.toLowerCase() === "l") {
        setIsBeating((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Animación de latido con escala
  useFrame((state) => {
    if (arteryRef.current && isBeating) {
      const scale = 150 + Math.sin(state.clock.elapsedTime * 3) * 5;
      arteryRef.current.scale.set(scale, scale, scale);
    }
  });

  useEffect(() => {
    if (audioRef.current) {
      if (isBeating) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isBeating]);

  // Activar sombras
  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [scene]);

  // Cambiar cursor cuando el mouse está sobre el modelo
  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "default";
  }, [hovered]);

  return (
    <group {...props} dispose={null} ref={arteryRef} scale={[150, 150, 150]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Heart.geometry}
        material={materials.HeartMaterial}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={(e) => {
          e.stopPropagation();
          setShowInfo(true);
        }}
      />
      <PositionalAudio ref={audioRef} url="/sounds/heart.mp3" distance={2} loop />
      <Text
        position={[0, 0.006, 0]}
        fontSize={0.0009}
        color="#000000"
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.00002}
        outlineColor="white"
      >
        Corazón (Simulación)
      </Text>

      {showInfo && (
        <Html center position={[0, 0, 0]}>
          <div
            style={{
              backgroundColor: "white",
              padding: "15px",
              borderRadius: "10px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              width: "auto",
              textAlign: "center",
              fontFamily: "Arial, sans-serif",
            }}
          >
            <h3>Corazón</h3>
            <p>
              Presiona <strong>L</strong> para pausar/reanudar el latido.
            </p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowInfo(false);
              }}
            >
              Cerrar
            </button>
          </div>
        </Html>
      )}
    </group>
  );
}

useGLTF.preload("/models-3d/heart-coronary.glb");

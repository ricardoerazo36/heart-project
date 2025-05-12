/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei";
import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";

export default function Artery(props) {
  const { nodes, materials, scene } = useGLTF("/models-3d/artery.glb");
  const arteryRef = useRef();

  // ---- Rotación con flechas del teclado ----
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (arteryRef.current) {
        if (e.key === "ArrowRight") {
          arteryRef.current.rotation.y += 0.1; 
        } else if (e.key === "ArrowLeft") {
          arteryRef.current.rotation.y -= 0.1; 
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Animación de latido 
  useFrame((state) => {
    if (arteryRef.current) {
      arteryRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.05;
    }
  });

  // Activar sombras
  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = false;
      }
    });
  }, [scene]);

  return (
    <group
      ref={arteryRef}
      {...props}
      dispose={null}
      scale={[200, 200, 200]}
      onClick={() => console.log("Modelo clickeado")}
      onPointerOver={() => (document.body.style.cursor = "pointer")}
      onPointerOut={() => (document.body.style.cursor = "default")}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Artery.geometry}
        material={materials.ArteryMaterial}
      />
    </group>
  );
}

useGLTF.preload("/models-3d/artery.glb");
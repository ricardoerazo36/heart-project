/* eslint-disable react/no-unknown-property */
import { useGLTF, Html } from "@react-three/drei";
import { useRef, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";

export default function Artery(props) {
  const { nodes, materials, scene } = useGLTF("/models-3d/artery.glb");
  const arteryRef = useRef();
  const [showInfo, setShowInfo] = useState(false);

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
      arteryRef.current.position.y =
        Math.sin(state.clock.elapsedTime * 2) * 0.05;
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

  // ---- Elemento HTML 3D: Etiqueta flotante ----
  const Label3D = () => (
    <Html
      position={[0, 0.005, 0]}
      center
      style={{
        background: "rgba(0, 0, 0, 0.7)",
        color: "white",
        padding: "6px 12px",
        borderRadius: "8px",
        fontSize: "14px",
        fontFamily: "Arial, sans-serif",
        whiteSpace: "nowrap",
      }}
    >
      Arteria Coronaria Sana (Simulación)
    </Html>
  );

  return (
    <group
      ref={arteryRef}
      {...props}
      dispose={null}
      scale={[200, 200, 200]}
      onClick={() => setShowInfo(true)}
      onPointerOver={() => (document.body.style.cursor = "pointer")}
      onPointerOut={() => (document.body.style.cursor = "default")}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Artery.geometry}
        material={materials.ArteryMaterial}
      />
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
            <h3
              
            >
              Arteria Coronaria
            </h3>
            <p>
              Usa las teclas ← y → para rotar el modelo.
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
      <Label3D />
    </group>
  );
}

useGLTF.preload("/models-3d/artery.glb");

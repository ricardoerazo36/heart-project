/* eslint-disable react/no-unknown-property */
import { Html, Text } from "@react-three/drei";
import { useEffect, useState } from "react";
import { Model as Pill1 } from "./pill-1";
import { Model as Pill2 } from "./pill-2";
import { Model as Pill3 } from "./pill-3";
import { Model as Pill4 } from "./pill-4";
import { Model as Pill5 } from "./pill-5";

const medicine = [
  { nombre: "Aspirina", Modelo: Pill1 },
  { nombre: "Atorvastatina", Modelo: Pill2 },
  { nombre: "Clopidogrel", Modelo: Pill3 },
  { nombre: "Enalapril", Modelo: Pill4 },
  { nombre: "Metoprolol", Modelo: Pill5 },
];

export default function MedicineCarousel(props) {
  const [index, setIndex] = useState(0);
  const [showInfo, setShowInfo] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key.toLowerCase() === "q") {
      setIndex((prev) => (prev - 1 + medicine.length) % medicine.length);
      setShowInfo(false);
    }
    if (e.key.toLowerCase() === "e") {
      setIndex((prev) => (prev + 1) % medicine.length);
      setShowInfo(false);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "default";
  }, [hovered]);

  const SelectedModel = medicine[index].Modelo;

  return (
    <group {...props} position={[0, -1, 0]}>
      {/* Modelo 3D clickeable */}
      <group
        onClick={(e) => {
          e.stopPropagation();
          setShowInfo(true);
        }}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <SelectedModel key={medicine[index].nombre} scale={2.5} position={[0, 0.5, 0]} />
      </group>

      {/* Texto flotante con nombre del medicamento */}
      <Text
        fontSize={0.3}
        position={[0, 1.2, 0]}
        rotation={[0, Math.PI, 0]} // para que siempre mire a la cámara
        color="#000000"
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.00002}
        outlineColor="white"
      >
        {medicine[index].nombre}
      </Text>

      {/* Información flotante al hacer clic */}
      {showInfo && (
        <Html center position={[0, 0.5, 0]}>
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
            <h3>{medicine[index].nombre}</h3>
            <p>
              Presiona <strong>Q</strong> o <strong>E</strong> para cambiar de medicamento.
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

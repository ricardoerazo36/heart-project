/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/models-3d/pill-3.glb");

  console.log("Llego pildora 3");
  console.log("Nodos pill3", nodes);
  console.log("Materiales pill3", materials);

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pill3_Pink_0.geometry}
        material={materials.Pink}
      />
    </group>
  );
}

useGLTF.preload("/models-3d/pill-3.glb");

/* eslint-disable react/no-unknown-property */
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/models-3d/pill-1.glb');
  console.log("Llego pildora 1");
  console.log("Nodos:", nodes);
  console.log("Materiales:", materials);

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pill1_WhiteSmooth_0.geometry}
        material={materials.WhiteSmooth}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pill1_Red_0.geometry}
        material={materials.material}
      />
    </group>
  );
}

useGLTF.preload('/models-3d/pill-1.glb')


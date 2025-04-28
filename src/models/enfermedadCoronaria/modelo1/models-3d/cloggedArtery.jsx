/* eslint-disable react/no-unknown-property */
import { useGLTF } from '@react-three/drei'

export default function CloggedArtery(props) {
  const { nodes, materials } = useGLTF('/models-3d/clogged-artery.glb')
  console.log("llego")
  return (
<<<<<<< HEAD
    <group {...props} dispose={null} scale={[150,150,150]}>
=======
    <group {...props} dispose={null} scale={[200,200,200]}>
>>>>>>> wxyz
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CloggedArtery.geometry} // Verifica que esta propiedad exista en el modelo
        material={materials.CloggedArteryMaterial} // Verifica que esta propiedad exista en el modelo
      />
    </group>
  )
}

useGLTF.preload('/models-3d/clogged-artery.glb')

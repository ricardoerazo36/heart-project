/* eslint-disable react/no-unknown-property */
import { useGLTF } from '@react-three/drei'

export default function CloggedArtery(props) {
  const { nodes, materials } = useGLTF('/models-3d/clogged-artery.glb')

  return (
    <group {...props} dispose={null} scale={[200,200,200]}>
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

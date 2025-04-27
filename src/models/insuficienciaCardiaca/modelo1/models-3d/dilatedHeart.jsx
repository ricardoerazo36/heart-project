/* eslint-disable react/no-unknown-property */
import { useGLTF } from '@react-three/drei'

export default function DilatedHeart(props) {
  const { nodes, materials } = useGLTF('/models-3d/dilated-heart.glb')

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Heart.geometry} // Verifica que esta propiedad exista en el modelo
        material={materials.HeartMaterial} // Verifica que esta propiedad exista en el modelo
      />
    </group>
  )
}

useGLTF.preload('/models-3d/dilated-heart.glb')

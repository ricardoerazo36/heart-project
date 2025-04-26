/* eslint-disable react/no-unknown-property */
import { useGLTF } from '@react-three/drei'

export default function Arritmia(props) {
  const { nodes, materials } = useGLTF('/models-3d/heart-rate-monitor.glb')

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.heartRateMonitor.geometry} // Verifica que esta propiedad exista en el modelo
        material={materials.heartRateMaterial} // Verifica que esta propiedad exista en el modelo
      />
    </group>
  )
}

useGLTF.preload('/models-3d/heart-rate-monitor.glb')
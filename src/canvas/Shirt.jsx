import React from 'react'
import { useSnapshot } from 'valtio'
import state from '../store'
import { Decal, useGLTF, useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'

const Shirt = (props) => {
  const snap = useSnapshot(state)
const { nodes, materials } = useGLTF('/shirt_baked.glb')
  
  const logoTexture = useTexture(snap.logoDecal)
  const fullTexture = useTexture(snap.fullDecal)
useFrame((state,delta)=>
  easing.dampC(materials.lambert1.color,snap.color,0.25,delta)
)

const stateString = JSON.stringify(snap)

return (
    <group {...props} dispose={null} key={stateString}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
      >
        {snap.isFullTexture && (<Decal position={[0,0,0]} rotation={[0,0,0]} scale={1} map={fullTexture} />)}
        {snap.isLogoTexture && (<Decal position={[0,0.04,0.15]} rotation={[0,0,0]} scale={0.15} depthWrite={true} depthTest={false}   map={logoTexture} />)}
      </mesh>
    </group>
  )
}

export default Shirt


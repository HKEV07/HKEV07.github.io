import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from 'three';

const Earth = () => {
  const meshRef = useRef();

  // Animation loop
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002; // Rotate the Earth
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[2, 32, 32]} /> 
      <meshPhongMaterial
        color={0xffffff} // White color (you can replace this with a texture)
        wireframe={true} // Show wireframe
        transparent={true}
        opacity={0.8}
      />
      {/* Lights */}
      <pointLight position={[10, 10, 10]} intensity={1} />
      <ambientLight intensity={0.2} />
    </mesh>
  );
};

const EarthCanvas = () => {
  return (
    <div style={{ width: '100%', height: '60vh' }}>
      <Canvas
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-4, 3, 6],
        }}
      >
        <Earth />
        <OrbitControls
          autoRotate 
          autoRotateSpeed={0.5}
          enableZoom={false} 
          maxDistance={50} 
          minDistance={3} 
        />
      </Canvas>
    </div>
  );
};

export default EarthCanvas;
import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from 'three';

const Earth = () => {
  const meshRef = useRef();
  const [hue, setHue] = useState(0);


  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
      

      setHue((prevHue) => (prevHue + 0.001) % 1);
      
      const color = new THREE.Color();
      color.setHSL(hue, 0.5, 0.5);
      meshRef.current.material.color = color;
    }
  });

  const initialColor = new THREE.Color();
  initialColor.setHSL(0, 0.5, 0.5);

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[2, 32, 32]} /> 
      <meshPhongMaterial
        color={initialColor}
        wireframe={true}
        transparent={true}
        opacity={0.8}
      />
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
          onUpdate: (self) => {
            self.lookAt(0, 0, 0);
            self.updateProjectionMatrix();
          }
        }}
      >
        <Earth />
      </Canvas>
    </div>
  );
};

export default EarthCanvas;
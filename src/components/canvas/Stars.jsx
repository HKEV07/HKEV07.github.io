import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = ({ 
  rotationSpeedX = 0.01,
  rotationSpeedY = 0.008, 
  starCount = 5000,
  starColor = '#f272c8',
  starSize = 0.0008,
  radius = 1.2
}) => {
  const ref = useRef();
  const [sphere] = useState(() => 
    random.inSphere(new Float32Array(starCount), { radius: radius })
  );

  useFrame((state, delta) => {
    // Slower rotation by reducing the division factors
    ref.current.rotation.x -= delta * rotationSpeedX;
    ref.current.rotation.y -= delta * rotationSpeedY;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points 
        ref={ref} 
        positions={sphere} 
        stride={3} 
        frustumCulled
      >
        <PointMaterial
          transparent
          color={starColor}
          size={starSize}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
import { useRef, useState } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import * as THREE from 'three';
import brainScan from '@/assets/brain-scan.jpg';

const BrainMeshGeometry = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  
  const texture = useLoader(TextureLoader, brainScan);

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();
      
      // Subtle floating animation
      meshRef.current.position.y = Math.sin(time * 0.5) * 0.2;
      
      // Gentle rotation
      meshRef.current.rotation.y = time * 0.1;
      
      // Distort vertices for broken/shattered effect
      const geometry = meshRef.current.geometry;
      const positionAttribute = geometry.attributes.position;
      
      for (let i = 0; i < positionAttribute.count; i++) {
        const x = positionAttribute.getX(i);
        const y = positionAttribute.getY(i);
        const z = positionAttribute.getZ(i);
        
        const distance = Math.sqrt(x * x + y * y);
        const wave = Math.sin(distance * 2 - time) * 0.05;
        
        positionAttribute.setZ(i, z + wave);
      }
      
      positionAttribute.needsUpdate = true;
    }
  });

  return (
    <mesh
      ref={meshRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.1 : 1}
    >
      <planeGeometry args={[3, 4, 32, 32]} />
      <meshStandardMaterial
        map={texture}
        transparent
        opacity={0.6}
        side={THREE.DoubleSide}
        wireframe={false}
        roughness={0.8}
        metalness={0.2}
      />
      <mesh>
        <planeGeometry args={[3, 4, 32, 32]} />
        <meshBasicMaterial
          wireframe
          color="#ffffff"
          transparent
          opacity={hovered ? 0.3 : 0.15}
          side={THREE.DoubleSide}
        />
      </mesh>
    </mesh>
  );
};

export const BrainMesh = () => {
  return (
    <div className="absolute top-1/4 right-10 w-[300px] h-[400px] opacity-30 pointer-events-auto">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <pointLight position={[-10, -10, -10]} intensity={0.3} />
        <BrainMeshGeometry />
      </Canvas>
    </div>
  );
};

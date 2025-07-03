import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Plane } from '@react-three/drei';
import * as THREE from 'three';

interface OceanFloorProps {
  scrollProgress: number;
}

export function OceanFloor({ scrollProgress }: OceanFloorProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.MeshStandardMaterial>(null);

  useFrame((state) => {
    if (materialRef.current) {
      // Animated ocean floor with waves
      const time = state.clock.elapsedTime;
      materialRef.current.displacementScale = 2 + Math.sin(time * 0.5) * 0.5;
      
      // Color transition based on depth
      const deepColor = new THREE.Color('#0f0f23');
      const shallowColor = new THREE.Color('#1a1a2e');
      materialRef.current.color.lerpColors(shallowColor, deepColor, scrollProgress);
    }
  });

  return (
    <Plane
      ref={meshRef}
      position={[0, -20, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
      args={[100, 100, 50, 50]}
    >
      <meshStandardMaterial
        ref={materialRef}
        color="#1a1a2e"
        roughness={0.8}
        metalness={0.2}
        transparent
        opacity={0.8}
        side={THREE.DoubleSide}
      />
    </Plane>
  );
}
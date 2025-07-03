import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Box, Torus, Octahedron } from '@react-three/drei';
import * as THREE from 'three';

interface FloatingElementsProps {
  scrollProgress: number;
  mousePosition: { x: number; y: number };
}

function FloatingOrb({ position, scale, color, speed }: {
  position: [number, number, number];
  scale: number;
  color: string;
  speed: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.MeshStandardMaterial>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += speed * 0.01;
      meshRef.current.rotation.y += speed * 0.015;
      
      // Floating motion
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.5;
      meshRef.current.position.x = position[0] + Math.cos(state.clock.elapsedTime * speed * 0.5) * 0.3;
    }

    if (materialRef.current) {
      // Pulsing emission
      const intensity = 0.5 + Math.sin(state.clock.elapsedTime * speed * 2) * 0.3;
      materialRef.current.emissiveIntensity = intensity;
    }
  });

  return (
    <Sphere ref={meshRef} position={position} scale={scale}>
      <meshStandardMaterial
        ref={materialRef}
        color={color}
        emissive={color}
        emissiveIntensity={0.5}
        roughness={0.2}
        metalness={0.8}
        transparent
        opacity={0.8}
      />
    </Sphere>
  );
}

function FloatingCrystal({ position, scale, color, speed }: {
  position: [number, number, number];
  scale: number;
  color: string;
  speed: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += speed * 0.008;
      meshRef.current.rotation.y += speed * 0.012;
      meshRef.current.rotation.z += speed * 0.005;
      
      // Floating motion
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed + 1) * 0.8;
    }
  });

  return (
    <Octahedron ref={meshRef} position={position} scale={scale}>
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.3}
        roughness={0.1}
        metalness={0.9}
        transparent
        opacity={0.7}
      />
    </Octahedron>
  );
}

function FloatingRing({ position, scale, color, speed }: {
  position: [number, number, number];
  scale: number;
  color: string;
  speed: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += speed * 0.01;
      meshRef.current.rotation.z += speed * 0.008;
      
      // Floating motion
      meshRef.current.position.y = position[1] + Math.cos(state.clock.elapsedTime * speed + 2) * 0.6;
      meshRef.current.position.z = position[2] + Math.sin(state.clock.elapsedTime * speed * 0.3) * 0.4;
    }
  });

  return (
    <Torus ref={meshRef} position={position} scale={scale} args={[1, 0.3, 16, 32]}>
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.4}
        roughness={0.3}
        metalness={0.7}
        transparent
        opacity={0.6}
      />
    </Torus>
  );
}

export function FloatingElements({ scrollProgress, mousePosition }: FloatingElementsProps) {
  const elements = useMemo(() => [
    // Orbs
    { type: 'orb', position: [-8, 5, -5] as [number, number, number], scale: 0.8, color: '#667eea', speed: 1.2 },
    { type: 'orb', position: [6, 8, -8] as [number, number, number], scale: 1.2, color: '#f093fb', speed: 0.8 },
    { type: 'orb', position: [-4, -2, -12] as [number, number, number], scale: 0.6, color: '#f5576c', speed: 1.5 },
    { type: 'orb', position: [10, -5, -15] as [number, number, number], scale: 1.0, color: '#4facfe', speed: 1.0 },
    
    // Crystals
    { type: 'crystal', position: [8, 3, -10] as [number, number, number], scale: 1.5, color: '#764ba2', speed: 0.9 },
    { type: 'crystal', position: [-6, -8, -18] as [number, number, number], scale: 1.8, color: '#667eea', speed: 0.7 },
    { type: 'crystal', position: [4, -12, -25] as [number, number, number], scale: 2.0, color: '#f093fb', speed: 0.6 },
    
    // Rings
    { type: 'ring', position: [-10, 0, -8] as [number, number, number], scale: 1.2, color: '#00f2fe', speed: 1.1 },
    { type: 'ring', position: [12, -10, -20] as [number, number, number], scale: 1.6, color: '#4facfe', speed: 0.8 },
    { type: 'ring', position: [-8, -15, -30] as [number, number, number], scale: 2.2, color: '#43e97b', speed: 0.5 },
  ], []);

  return (
    <group>
      {elements.map((element, index) => {
        // Adjust visibility and position based on scroll progress
        const depthFactor = (element.position[2] + 35) / 35; // Normalize depth
        const shouldShow = scrollProgress >= depthFactor * 0.3;
        
        if (!shouldShow) return null;

        const adjustedPosition: [number, number, number] = [
          element.position[0] + mousePosition.x * 2,
          element.position[1] + mousePosition.y * 1,
          element.position[2]
        ];

        switch (element.type) {
          case 'orb':
            return (
              <FloatingOrb
                key={index}
                position={adjustedPosition}
                scale={element.scale}
                color={element.color}
                speed={element.speed}
              />
            );
          case 'crystal':
            return (
              <FloatingCrystal
                key={index}
                position={adjustedPosition}
                scale={element.scale}
                color={element.color}
                speed={element.speed}
              />
            );
          case 'ring':
            return (
              <FloatingRing
                key={index}
                position={adjustedPosition}
                scale={element.scale}
                color={element.color}
                speed={element.speed}
              />
            );
          default:
            return null;
        }
      })}
    </group>
  );
}
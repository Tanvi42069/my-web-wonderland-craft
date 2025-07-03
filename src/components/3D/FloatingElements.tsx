import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Box, Torus, Octahedron, Icosahedron } from '@react-three/drei';
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
      meshRef.current.rotation.x += speed * 0.008;
      meshRef.current.rotation.y += speed * 0.012;
      
      // Gentle floating motion
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.3;
      meshRef.current.position.x = position[0] + Math.cos(state.clock.elapsedTime * speed * 0.7) * 0.2;
    }

    if (materialRef.current) {
      // Subtle pulsing emission
      const intensity = 0.2 + Math.sin(state.clock.elapsedTime * speed * 1.5) * 0.1;
      materialRef.current.emissiveIntensity = intensity;
    }
  });

  return (
    <Sphere ref={meshRef} position={position} scale={scale}>
      <meshStandardMaterial
        ref={materialRef}
        color={color}
        emissive={color}
        emissiveIntensity={0.2}
        roughness={0.1}
        metalness={0.9}
        transparent
        opacity={0.9}
      />
    </Sphere>
  );
}

function FloatingCube({ position, scale, color, speed }: {
  position: [number, number, number];
  scale: number;
  color: string;
  speed: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += speed * 0.006;
      meshRef.current.rotation.y += speed * 0.009;
      meshRef.current.rotation.z += speed * 0.004;
      
      // Floating motion
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed + 1) * 0.4;
      meshRef.current.position.z = position[2] + Math.cos(state.clock.elapsedTime * speed * 0.8) * 0.3;
    }
  });

  return (
    <Box ref={meshRef} position={position} scale={scale}>
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.15}
        roughness={0.2}
        metalness={0.8}
        transparent
        opacity={0.85}
      />
    </Box>
  );
}

function FloatingIcosahedron({ position, scale, color, speed }: {
  position: [number, number, number];
  scale: number;
  color: string;
  speed: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += speed * 0.005;
      meshRef.current.rotation.y += speed * 0.008;
      
      // Complex floating pattern
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed + 2) * 0.5;
      meshRef.current.position.x = position[0] + Math.cos(state.clock.elapsedTime * speed * 0.6) * 0.25;
    }
  });

  return (
    <Icosahedron ref={meshRef} position={position} scale={scale}>
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.25}
        roughness={0.15}
        metalness={0.85}
        transparent
        opacity={0.8}
      />
    </Icosahedron>
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
      meshRef.current.rotation.x += speed * 0.007;
      meshRef.current.rotation.z += speed * 0.005;
      
      // Orbital motion
      meshRef.current.position.y = position[1] + Math.cos(state.clock.elapsedTime * speed + 2) * 0.6;
      meshRef.current.position.z = position[2] + Math.sin(state.clock.elapsedTime * speed * 0.4) * 0.4;
    }
  });

  return (
    <Torus ref={meshRef} position={position} scale={scale} args={[1, 0.25, 16, 32]}>
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.3}
        roughness={0.1}
        metalness={0.9}
        transparent
        opacity={0.7}
      />
    </Torus>
  );
}

export function FloatingElements({ scrollProgress, mousePosition }: FloatingElementsProps) {
  const elements = useMemo(() => [
    // Sophisticated color palette inspired by Alma Digital
    // Orbs - primary elements
    { type: 'orb', position: [-6, 4, -4] as [number, number, number], scale: 0.6, color: '#6366f1', speed: 1.0 },
    { type: 'orb', position: [8, 6, -7] as [number, number, number], scale: 0.8, color: '#8b5cf6', speed: 0.8 },
    { type: 'orb', position: [-4, -3, -10] as [number, number, number], scale: 0.5, color: '#06b6d4', speed: 1.2 },
    { type: 'orb', position: [10, -4, -12] as [number, number, number], scale: 0.7, color: '#10b981', speed: 0.9 },
    
    // Cubes - geometric elements
    { type: 'cube', position: [5, 2, -6] as [number, number, number], scale: 0.8, color: '#f59e0b', speed: 0.7 },
    { type: 'cube', position: [-8, -6, -14] as [number, number, number], scale: 1.0, color: '#ef4444', speed: 0.6 },
    { type: 'cube', position: [6, -8, -18] as [number, number, number], scale: 1.2, color: '#8b5cf6', speed: 0.5 },
    
    // Icosahedrons - complex geometry
    { type: 'icosahedron', position: [-10, 1, -8] as [number, number, number], scale: 1.0, color: '#06b6d4', speed: 0.8 },
    { type: 'icosahedron', position: [12, -6, -16] as [number, number, number], scale: 1.3, color: '#6366f1', speed: 0.6 },
    { type: 'icosahedron', position: [-6, -12, -22] as [number, number, number], scale: 1.5, color: '#10b981', speed: 0.4 },
    
    // Rings - elegant accents
    { type: 'ring', position: [-12, 3, -5] as [number, number, number], scale: 1.0, color: '#f59e0b', speed: 1.1 },
    { type: 'ring', position: [14, -2, -11] as [number, number, number], scale: 1.4, color: '#ef4444', speed: 0.7 },
    { type: 'ring', position: [-8, -10, -20] as [number, number, number], scale: 1.8, color: '#8b5cf6', speed: 0.5 },
    { type: 'ring', position: [10, -14, -26] as [number, number, number], scale: 2.0, color: '#06b6d4', speed: 0.4 },
  ], []);

  return (
    <group>
      {elements.map((element, index) => {
        // Progressive reveal based on scroll depth
        const depthFactor = Math.abs(element.position[2]) / 30;
        const shouldShow = scrollProgress >= depthFactor * 0.2;
        
        if (!shouldShow) return null;

        // Subtle mouse interaction
        const adjustedPosition: [number, number, number] = [
          element.position[0] + mousePosition.x * 1.5,
          element.position[1] + mousePosition.y * 0.8,
          element.position[2]
        ];

        // Scale based on scroll progress for depth effect
        const scaleMultiplier = 1 + scrollProgress * 0.3;
        const adjustedScale = element.scale * scaleMultiplier;

        switch (element.type) {
          case 'orb':
            return (
              <FloatingOrb
                key={index}
                position={adjustedPosition}
                scale={adjustedScale}
                color={element.color}
                speed={element.speed}
              />
            );
          case 'cube':
            return (
              <FloatingCube
                key={index}
                position={adjustedPosition}
                scale={adjustedScale}
                color={element.color}
                speed={element.speed}
              />
            );
          case 'icosahedron':
            return (
              <FloatingIcosahedron
                key={index}
                position={adjustedPosition}
                scale={adjustedScale}
                color={element.color}
                speed={element.speed}
              />
            );
          case 'ring':
            return (
              <FloatingRing
                key={index}
                position={adjustedPosition}
                scale={adjustedScale}
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
import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface ParticleSystemProps {
  scrollProgress: number;
}

export function ParticleSystem({ scrollProgress }: ParticleSystemProps) {
  const pointsRef = useRef<THREE.Points>(null);
  const materialRef = useRef<THREE.PointsMaterial>(null);

  const particleCount = 2000;
  const positions = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 100; // x
      positions[i * 3 + 1] = Math.random() * 50 - 25; // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 100; // z
    }
    
    return positions;
  }, []);

  useFrame((state) => {
    if (pointsRef.current && materialRef.current) {
      // Animate particles
      const time = state.clock.elapsedTime;
      const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
      
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        positions[i3 + 1] += Math.sin(time + positions[i3]) * 0.01; // Floating motion
      }
      
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
      
      // Adjust opacity based on scroll progress
      materialRef.current.opacity = 0.3 + scrollProgress * 0.4;
      
      // Color transition
      const color = new THREE.Color();
      color.lerpColors(
        new THREE.Color('#667eea'),
        new THREE.Color('#f093fb'),
        scrollProgress
      );
      materialRef.current.color = color;
    }
  });

  return (
    <Points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        ref={materialRef}
        size={0.5}
        color="#667eea"
        transparent
        opacity={0.3}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}
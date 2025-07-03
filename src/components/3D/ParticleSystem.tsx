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

  const particleCount = 1500;
  const { positions, velocities } = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      // Distribute particles in a more organized pattern
      positions[i * 3] = (Math.random() - 0.5) * 80; // x
      positions[i * 3 + 1] = Math.random() * 60 - 30; // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 80; // z
      
      // Subtle velocities for organic movement
      velocities[i * 3] = (Math.random() - 0.5) * 0.02;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.01;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.02;
    }
    
    return { positions, velocities };
  }, []);

  useFrame((state) => {
    if (pointsRef.current && materialRef.current) {
      const time = state.clock.elapsedTime;
      const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
      
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        
        // Gentle floating motion with individual particle behavior
        positions[i3] += velocities[i3] * Math.sin(time * 0.5 + i * 0.01);
        positions[i3 + 1] += velocities[i3 + 1] * Math.cos(time * 0.3 + i * 0.01);
        positions[i3 + 2] += velocities[i3 + 2] * Math.sin(time * 0.4 + i * 0.01);
        
        // Boundary wrapping
        if (Math.abs(positions[i3]) > 40) positions[i3] *= -0.8;
        if (Math.abs(positions[i3 + 1]) > 30) positions[i3 + 1] *= -0.8;
        if (Math.abs(positions[i3 + 2]) > 40) positions[i3 + 2] *= -0.8;
      }
      
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
      
      // Sophisticated opacity and size changes
      materialRef.current.opacity = 0.4 + scrollProgress * 0.3;
      materialRef.current.size = 0.8 + Math.sin(time * 0.5) * 0.2;
      
      // Color evolution through scroll
      const color = new THREE.Color();
      if (scrollProgress < 0.33) {
        color.lerpColors(
          new THREE.Color('#6366f1'),
          new THREE.Color('#8b5cf6'),
          scrollProgress * 3
        );
      } else if (scrollProgress < 0.66) {
        color.lerpColors(
          new THREE.Color('#8b5cf6'),
          new THREE.Color('#06b6d4'),
          (scrollProgress - 0.33) * 3
        );
      } else {
        color.lerpColors(
          new THREE.Color('#06b6d4'),
          new THREE.Color('#10b981'),
          (scrollProgress - 0.66) * 3
        );
      }
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
        size={0.8}
        color="#6366f1"
        transparent
        opacity={0.4}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        vertexColors={false}
      />
    </Points>
  );
}
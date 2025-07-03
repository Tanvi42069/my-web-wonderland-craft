import { Canvas } from '@react-three/fiber';
import { Suspense, useRef } from 'react';
import { Environment, PerspectiveCamera, Fog } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { FloatingElements } from './FloatingElements';
import { OceanFloor } from './OceanFloor';
import { ParticleSystem } from './ParticleSystem';

interface SceneProps {
  scrollProgress: number;
  mousePosition: { x: number; y: number };
}

function CameraController({ scrollProgress }: { scrollProgress: number }) {
  const { camera } = useThree();
  const cameraRef = useRef<THREE.PerspectiveCamera>(camera as THREE.PerspectiveCamera);

  useFrame(() => {
    if (cameraRef.current) {
      // Smooth camera descent based on scroll
      const targetY = 10 - scrollProgress * 25; // Start at 10, go down to -15
      const targetZ = 5 - scrollProgress * 8; // Move forward as we descend
      
      cameraRef.current.position.y = THREE.MathUtils.lerp(cameraRef.current.position.y, targetY, 0.05);
      cameraRef.current.position.z = THREE.MathUtils.lerp(cameraRef.current.position.z, targetZ, 0.05);
      
      // Slight rotation for dynamic feel
      cameraRef.current.rotation.x = THREE.MathUtils.lerp(cameraRef.current.rotation.x, scrollProgress * 0.3, 0.05);
    }
  });

  return null;
}

function SceneContent({ scrollProgress, mousePosition }: SceneProps) {
  const fogRef = useRef<THREE.Fog>();

  useFrame(() => {
    if (fogRef.current) {
      // Dynamic fog based on depth
      const fogDensity = 0.02 + scrollProgress * 0.08;
      fogRef.current.density = fogDensity;
    }
  });

  return (
    <>
      <fog ref={fogRef} attach="fog" args={['#1a1a2e', 10, 100]} />
      
      <PerspectiveCamera makeDefault position={[0, 10, 5]} fov={75} />
      <CameraController scrollProgress={scrollProgress} />
      
      {/* Ambient lighting */}
      <ambientLight intensity={0.3} color="#4a5568" />
      
      {/* Dynamic directional light */}
      <directionalLight
        position={[10, 10, 5]}
        intensity={0.8}
        color={new THREE.Color().lerpColors(
          new THREE.Color('#667eea'),
          new THREE.Color('#764ba2'),
          scrollProgress
        )}
        castShadow
      />
      
      {/* Point lights for atmosphere */}
      <pointLight position={[-10, 5, -10]} intensity={0.5} color="#f093fb" />
      <pointLight position={[10, -5, 10]} intensity={0.3} color="#f5576c" />
      
      <Environment preset="night" />
      
      <FloatingElements scrollProgress={scrollProgress} mousePosition={mousePosition} />
      <OceanFloor scrollProgress={scrollProgress} />
      <ParticleSystem scrollProgress={scrollProgress} />
    </>
  );
}

export function Scene({ scrollProgress, mousePosition }: SceneProps) {
  return (
    <Canvas
      shadows
      gl={{ 
        antialias: true, 
        alpha: true,
        powerPreference: "high-performance"
      }}
      dpr={[1, 2]}
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        zIndex: 1,
        background: `linear-gradient(180deg, 
          hsl(${220 + scrollProgress * 40}, 70%, ${15 + scrollProgress * 10}%) 0%, 
          hsl(${240 + scrollProgress * 20}, 80%, ${8 + scrollProgress * 5}%) 100%)`
      }}
    >
      <Suspense fallback={null}>
        <SceneContent scrollProgress={scrollProgress} mousePosition={mousePosition} />
      </Suspense>
    </Canvas>
  );
}
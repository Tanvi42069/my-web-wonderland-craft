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
      // Smooth camera movement inspired by Alma Digital
      const targetY = 8 - scrollProgress * 20; // Gentle descent
      const targetZ = 6 - scrollProgress * 10; // Forward movement
      const targetX = Math.sin(scrollProgress * Math.PI * 0.5) * 2; // Subtle lateral movement
      
      cameraRef.current.position.y = THREE.MathUtils.lerp(cameraRef.current.position.y, targetY, 0.03);
      cameraRef.current.position.z = THREE.MathUtils.lerp(cameraRef.current.position.z, targetZ, 0.03);
      cameraRef.current.position.x = THREE.MathUtils.lerp(cameraRef.current.position.x, targetX, 0.03);
      
      // Smooth rotation for cinematic feel
      cameraRef.current.rotation.x = THREE.MathUtils.lerp(cameraRef.current.rotation.x, scrollProgress * 0.2, 0.03);
      cameraRef.current.rotation.y = THREE.MathUtils.lerp(cameraRef.current.rotation.y, scrollProgress * 0.1, 0.03);
    }
  });

  return null;
}

function SceneContent({ scrollProgress, mousePosition }: SceneProps) {
  const fogRef = useRef<THREE.Fog>();

  useFrame(() => {
    if (fogRef.current) {
      // Dynamic fog for depth perception
      const fogNear = 8 + scrollProgress * 5;
      const fogFar = 50 + scrollProgress * 30;
      fogRef.current.near = fogNear;
      fogRef.current.far = fogFar;
    }
  });

  // Dynamic background color based on scroll
  const backgroundColor = new THREE.Color().lerpColors(
    new THREE.Color('#0f172a'), // Dark slate
    new THREE.Color('#1e1b4b'), // Deep indigo
    scrollProgress
  );

  return (
    <>
      <fog ref={fogRef} attach="fog" args={[backgroundColor, 8, 50]} />
      
      <PerspectiveCamera makeDefault position={[0, 8, 6]} fov={60} />
      <CameraController scrollProgress={scrollProgress} />
      
      {/* Sophisticated lighting setup */}
      <ambientLight intensity={0.2} color="#475569" />
      
      {/* Main directional light */}
      <directionalLight
        position={[10, 15, 5]}
        intensity={0.6}
        color={new THREE.Color().lerpColors(
          new THREE.Color('#6366f1'),
          new THREE.Color('#8b5cf6'),
          scrollProgress
        )}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      
      {/* Accent lights for atmosphere */}
      <pointLight 
        position={[-15, 8, -10]} 
        intensity={0.4} 
        color="#06b6d4" 
        distance={30}
      />
      <pointLight 
        position={[15, -5, 15]} 
        intensity={0.3} 
        color="#10b981" 
        distance={25}
      />
      <pointLight 
        position={[0, -10, -20]} 
        intensity={0.5} 
        color="#8b5cf6" 
        distance={35}
      />
      
      {/* Rim lighting */}
      <directionalLight
        position={[-10, 5, -15]}
        intensity={0.3}
        color="#f59e0b"
      />
      
      <Environment preset="night" />
      
      <FloatingElements scrollProgress={scrollProgress} mousePosition={mousePosition} />
      <OceanFloor scrollProgress={scrollProgress} />
      <ParticleSystem scrollProgress={scrollProgress} />
    </>
  );
}

export function Scene({ scrollProgress, mousePosition }: SceneProps) {
  // Dynamic background gradient
  const backgroundStyle = {
    background: `linear-gradient(180deg, 
      hsl(${220 + scrollProgress * 30}, 85%, ${8 + scrollProgress * 4}%) 0%, 
      hsl(${240 + scrollProgress * 40}, 90%, ${4 + scrollProgress * 3}%) 50%,
      hsl(${260 + scrollProgress * 20}, 95%, ${2 + scrollProgress * 2}%) 100%)`
  };

  return (
    <Canvas
      shadows
      gl={{ 
        antialias: true, 
        alpha: true,
        powerPreference: "high-performance",
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 1.2
      }}
      dpr={[1, 2]}
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        zIndex: 1,
        ...backgroundStyle
      }}
    >
      <Suspense fallback={null}>
        <SceneContent scrollProgress={scrollProgress} mousePosition={mousePosition} />
      </Suspense>
    </Canvas>
  );
}
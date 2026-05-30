'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';
import type { Mesh, Points } from 'three';

// Holographic laptop
function HolographicLaptop() {
  const groupRef = useRef<THREE.Group>(null!);
  useFrame(({ clock }) => {
    groupRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.3;
    groupRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.7) * 0.2;
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Laptop base */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1.6, 0.06, 1]} />
        <meshStandardMaterial emissive="#D4AF37" emissiveIntensity={0.8} color="#0c152b" roughness={0.1} metalness={0.9} />
      </mesh>

      {/* Laptop screen */}
      <mesh position={[0, 0.6, 0.3]} rotation={[-0.4, 0, 0]}>
        <boxGeometry args={[1.4, 0.8, 0.04]} />
        <meshStandardMaterial emissive="#F3E5AB" emissiveIntensity={1.2} color="#000511" roughness={0.05} metalness={0.95} />
      </mesh>

      {/* Screen glow */}
      <mesh position={[0, 0.6, 0.35]} rotation={[-0.4, 0, 0]}>
        <planeGeometry args={[1.5, 0.9]} />
        <meshBasicMaterial color="#D4AF37" transparent opacity={0.15} />
      </mesh>
    </group>
  );
}

// Floating code window
function CodeWindow({ position, rotation }: { position: [number, number, number]; rotation: [number, number, number] }) {
  const ref = useRef<THREE.Group>(null!);
  const time = useRef(0);

  useFrame(({ clock }) => {
    time.current = clock.getElapsedTime();

    if (ref.current) {
      ref.current.position.y += Math.sin(time.current * 0.8 + position[0]) * 0.01;
      ref.current.rotation.z += 0.002;
    }
  });

  return (
    <group ref={ref} position={position} rotation={rotation}>
      {/* Window frame */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.8, 0.6, 0.02]} />
        <meshStandardMaterial emissive="#38BDF8" emissiveIntensity={0.7} color="#020d20" roughness={0.1} metalness={0.85} />
      </mesh>

      {/* Code lines glow */}
      <mesh position={[0, 0, 0.01]}>
        <planeGeometry args={[0.75, 0.55]} />
        <meshBasicMaterial color="#7DD3FC" transparent opacity={0.12} />
      </mesh>
    </group>
  );
}

// AI Brain/Neural network
function AIBrain() {
  const ref = useRef<Mesh>(null!);

  useFrame(({ clock }) => {
    ref.current.rotation.x += 0.003;
    ref.current.rotation.y += 0.004;
    ref.current.rotation.z += 0.002;
  });

  return (
    <mesh ref={ref} position={[0, -0.3, -0.5]}>
      <icosahedronGeometry args={[0.5, 4]} />
      <meshStandardMaterial emissive="#D4AF37" emissiveIntensity={0.9} color="#050B1A" wireframe={false} roughness={0.15} metalness={0.9} />
    </mesh>
  );
}

// Floating certificate card
function CertificateCard({ position, delay }: { position: [number, number, number]; delay: number }) {
  const ref = useRef<THREE.Group>(null!);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() + delay;
    ref.current.position.y = position[1] + Math.sin(t * 0.6) * 0.15;
    ref.current.rotation.x = Math.sin(t * 0.4) * 0.2;
    ref.current.rotation.z = Math.cos(t * 0.5) * 0.15;
  });

  return (
    <group ref={ref} position={position}>
      <mesh>
        <boxGeometry args={[0.6, 0.4, 0.02]} />
        <meshStandardMaterial emissive="#D4AF37" emissiveIntensity={0.6} color="#2a1f02" roughness={0.1} metalness={0.8} />
      </mesh>
      <mesh position={[0, 0, 0.015]}>
        <planeGeometry args={[0.55, 0.35]} />
        <meshBasicMaterial color="#F3E5AB" transparent opacity={0.1} />
      </mesh>
    </group>
  );
}

// Tech icons (rotating)
function TechIcon({ position, icon, color }: { position: [number, number, number]; icon: string; color: string }) {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    ref.current.rotation.y += 0.02;
    ref.current.position.z = Math.sin(clock.getElapsedTime() * 0.6) * 0.2;
  });

  return (
    <mesh ref={ref} position={position}>
      <boxGeometry args={[0.3, 0.3, 0.3]} />
      <meshStandardMaterial emissive={color} emissiveIntensity={0.8} color="#0a1f2e" roughness={0.15} metalness={0.85} />
    </mesh>
  );
}

// Particle system
function Particles() {
  const points = useRef<Points>(null!);
  
  const particlesCount = 100;
  const positions = useMemo(() => {
    const positions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return positions;
  }, []);

  useFrame(({ clock }) => {
    if (points.current) {
      points.current.rotation.x += 0.0001;
      points.current.rotation.y += 0.0002;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={particlesCount} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.04} color="#F3E5AB" sizeAttenuation transparent opacity={0.4} />
    </points>
  );
}

// Glowing 3D topological waving terrain grid
function WaveGrid() {
  const pointsRef = useRef<THREE.Points>(null!);
  const count = 35;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * count * 3);
    let i = 0;
    for (let x = 0; x < count; x++) {
      for (let z = 0; z < count; z++) {
        pos[i++] = (x - count / 2) * 0.18; // X coordinate
        pos[i++] = 0;                      // Y coordinate (height, animated)
        pos[i++] = (z - count / 2) * 0.18; // Z coordinate
      }
    }
    return pos;
  }, []);

  useFrame(({ clock }) => {
    if (!pointsRef.current) return;
    const t = clock.getElapsedTime() * 1.2;
    const posAttr = pointsRef.current.geometry.attributes.position;
    let i = 0;
    for (let x = 0; x < count; x++) {
      for (let z = 0; z < count; z++) {
        const xCoord = posAttr.getX(i);
        const zCoord = posAttr.getZ(i);
        // compute wave height
        const y = Math.sin(xCoord * 1.5 + t) * 0.12 + Math.cos(zCoord * 1.5 + t) * 0.12;
        posAttr.setY(i, y - 0.7); // offset below laptop base
        i++;
      }
    }
    posAttr.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count * count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.024} color="#38BDF8" sizeAttenuation transparent opacity={0.6} />
    </points>
  );
}

export default function ThreeScene() {
  return (
    <Canvas camera={{ position: [0, 0.5, 4], fov: 60 }} style={{ background: 'transparent' }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 3]} intensity={1.5} color="#D4AF37" />
      <directionalLight position={[-5, -5, -3]} intensity={0.8} color="#38BDF8" />

      {/* Particles background */}
      <Particles />

      {/* 3D Wave grid radar terrain */}
      <WaveGrid />

      {/* Main holographic laptop */}
      <HolographicLaptop />

      {/* Floating code windows */}
      <CodeWindow position={[-1.2, 1, 0.5]} rotation={[0.3, 0.5, 0.2]} />
      <CodeWindow position={[1.3, -0.5, 0.3]} rotation={[-0.2, -0.5, -0.3]} />

      {/* AI Brain */}
      <AIBrain />

      {/* Floating certificates */}
      <CertificateCard position={[-0.8, 1.5, -0.5]} delay={0} />
      <CertificateCard position={[0.8, -1, 0.2]} delay={0.5} />

      {/* Tech icons */}
      <TechIcon position={[-1.5, -1.2, 0]} icon="🤖" color="#F59E0B" />
      <TechIcon position={[1.5, 1.2, 0]} icon="💻" color="#06B6D4" />

      {/* Ring torus for depth */}
      <mesh rotation={[0.5, 0.7, 0.2]} position={[0, 0, -1]}>
        <torusGeometry args={[2, 0.15, 24, 100]} />
        <meshStandardMaterial emissive="#38BDF8" emissiveIntensity={0.3} roughness={0.3} metalness={0.85} wireframe={true} />
      </mesh>
    </Canvas>
  );
}

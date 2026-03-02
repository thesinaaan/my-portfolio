"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, Float, Environment } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function RotatingPlanet() {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += delta * 0.2;
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <Sphere args={[2.5, 64, 64]} ref={meshRef}>
                <MeshDistortMaterial
                    color="#4c1d95" // Deep violet base
                    emissive="#2e1065"
                    emissiveIntensity={0.5}
                    roughness={0.4}
                    metalness={0.8}
                    distort={0.3} // Subtle atmosphere distortion
                    speed={2}
                />
            </Sphere>
            {/* Satellite Removed per request */}
        </Float>
    );
}

export default function Planet3D() {
    return (
        <div className="w-full h-full min-h-[400px]">
            <Canvas camera={{ position: [0, 0, 8], fov: 45 }} gl={{ antialias: true, alpha: true }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 10]} intensity={2} color="#c084fc" />
                <pointLight position={[-10, -5, -5]} intensity={5} color="#06b6d4" />

                <RotatingPlanet />
                <Environment preset="city" />
            </Canvas>
        </div>
    );
}

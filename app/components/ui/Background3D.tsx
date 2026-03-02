"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Stars, Cloud, Float, Trail, Icosahedron, Torus } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function CursorComet() {
    const { viewport, mouse } = useThree();
    const ref = useRef<THREE.Mesh>(null);
    const lightRef = useRef<THREE.PointLight>(null);

    useFrame((state) => {
        if (ref.current) {
            const x = (mouse.x * viewport.width) / 2;
            const y = (mouse.y * viewport.height) / 2;

            // Smooth lerp
            ref.current.position.x += (x - ref.current.position.x) * 0.1;
            ref.current.position.y += (y - ref.current.position.y) * 0.1;
            ref.current.position.z = 0;
        }
    });

    return (
        <group>
            <mesh ref={ref}>
                <sphereGeometry args={[0.05, 16, 16]} />
                <meshBasicMaterial color="#00ffff" />
                <pointLight ref={lightRef} distance={10} decay={2} intensity={2} color="#00ffff" />
                <Trail width={2} length={8} color={new THREE.Color(0, 1, 1)} attenuation={(t) => t * t}>
                    <meshBasicMaterial color={[0, 10, 10]} toneMapped={false} />
                </Trail>
            </mesh>
        </group>
    );
}

function AbstractDebris() {
    return (
        <group>
            {/* Glass Icosahedron - Left - High Realism Material */}
            <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5} position={[-8, 2, -5]}>
                <Icosahedron args={[1.5, 0]}>
                    <meshPhysicalMaterial
                        color="#ffffff"
                        roughness={0}
                        metalness={0.1}
                        transmission={0.9} // Glass
                        thickness={1}
                        transparent
                        opacity={0.3}
                        side={THREE.DoubleSide}
                    />
                </Icosahedron>
            </Float>

            {/* Wireframe Torus - Right - Technical Look */}
            <Float speed={0.8} rotationIntensity={0.2} floatIntensity={0.2} position={[8, -3, -8]}>
                <Torus args={[3, 0.02, 16, 100]}>
                    <meshBasicMaterial color="#00ffff" transparent opacity={0.15} />
                </Torus>
            </Float>
        </group>
    )
}

function InterstellarScene() {
    const groupRef = useRef<THREE.Group>(null);
    const { mouse } = useThree();

    useFrame((state, delta) => {
        if (groupRef.current) {
            // Ultra-Slow Cinematic Rotation
            groupRef.current.rotation.y -= delta * 0.005;

            // Subtle Mouse Parallax
            const targetRotX = mouse.y * 0.02;
            const targetRotY = -mouse.x * 0.02;

            groupRef.current.rotation.x += (targetRotX - groupRef.current.rotation.x) * 0.05;
            groupRef.current.rotation.z += (targetRotY - groupRef.current.rotation.z) * 0.05;
        }
    });

    return (
        <group ref={groupRef}>
            <Stars
                radius={150}
                depth={60}
                count={8000}
                factor={4}
                saturation={0}
                fade
                speed={0.5}
            />

            <AbstractDebris />

            <Float speed={0.5} rotationIntensity={0.1} floatIntensity={0.2}>
                <Cloud opacity={0.04} speed={0.1} width={30} depth={2} segments={20} color="#4c1d95" position={[-15, 5, -25]} />
            </Float>

            <Float speed={0.4} rotationIntensity={0.1} floatIntensity={0.2}>
                <Cloud opacity={0.04} speed={0.1} width={30} depth={2} segments={20} color="#0e7490" position={[15, -5, -25]} />
            </Float>
        </group>
    );
}

export default function Background3D() {
    return (
        <div className="fixed inset-0 z-[-1] pointer-events-none bg-black">
            <Canvas
                camera={{ position: [0, 0, 10], fov: 45 }}
                dpr={[1, 1.5]}
                gl={{ antialias: false }}
            >
                <InterstellarScene />
                <CursorComet />
            </Canvas>
        </div>
    );
}

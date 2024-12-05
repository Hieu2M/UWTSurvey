import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Sphere, Torus } from '@react-three/drei';
import * as THREE from 'three';

export default function UrbanScene() {
    const buildingRef = useRef<THREE.Mesh>(null);
    const sphereRef = useRef<THREE.Mesh>(null);
    const torusRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (buildingRef.current) {
            buildingRef.current.rotation.y += 0.01;
            buildingRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2;
        }
        if (sphereRef.current) {
            sphereRef.current.rotation.x += 0.01;
            sphereRef.current.position.x = Math.sin(state.clock.elapsedTime) * 0.5;
        }
        if (torusRef.current) {
            torusRef.current.rotation.z += 0.01;
            torusRef.current.position.z = Math.cos(state.clock.elapsedTime) * 0.3;
        }
    });

    return (
        <>
            <Box
                ref={buildingRef}
                args={[1, 2, 1]}
                position={[3, 0, -2]}
            >
                <meshStandardMaterial color="#6d28d9" />
            </Box>

            <Sphere
                ref={sphereRef}
                args={[0.5, 32, 32]}
                position={[5, 2, -1]}
            >
                <meshStandardMaterial color="#7c3aed" metalness={0.5} roughness={0.2} />
            </Sphere>

            {/*<Torus*/}
            {/*    ref={torusRef}*/}
            {/*    args={[1, 0.2, 16, 32]}*/}
            {/*    position={[4, 0, 0]}*/}
            {/*>*/}
            {/*    <meshStandardMaterial color="#8b5cf6" metalness={0.8} roughness={0.2} />*/}
            {/*</Torus>*/}

            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
        </>
    );
}
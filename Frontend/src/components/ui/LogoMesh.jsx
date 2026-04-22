import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { useRef, useMemo } from "react";

function LogoMesh() {
  const group = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    group.current.rotation.y = Math.sin(t / 2) * 0.4;
    group.current.rotation.x = Math.cos(t / 3) * 0.2;
  });

  // 🔥 SVG PATHS → SHAPES
  const shapes = useMemo(() => {
    const pPath = new THREE.Shape();
    pPath.moveTo(50, 150);
    pPath.lineTo(50, 50);
    pPath.lineTo(90, 50);
    pPath.quadraticCurveTo(130, 50, 130, 80);
    pPath.quadraticCurveTo(130, 110, 90, 110);
    pPath.lineTo(50, 110);

    const sPath = new THREE.Shape();
    sPath.moveTo(150, 70);
    sPath.quadraticCurveTo(120, 40, 90, 70);
    sPath.quadraticCurveTo(60, 100, 120, 120);
    sPath.quadraticCurveTo(180, 140, 140, 170);
    sPath.quadraticCurveTo(100, 200, 60, 170);

    return { pPath, sPath };
  }, []);

  const extrudeSettings = {
    depth: 8,
    bevelEnabled: true,
    bevelThickness: 2,
    bevelSize: 1,
    bevelSegments: 3,
  };

  return (
    <group ref={group} scale={0.02} position={[0, -1, 0]}>
      
      {/* P */}
      <mesh geometry={new THREE.ExtrudeGeometry(shapes.pPath, extrudeSettings)}>
        <meshPhysicalMaterial
          color="#22d3ee"
          metalness={0.9}
          roughness={0.1}
          clearcoat={1}
          clearcoatRoughness={0}
        />
      </mesh>

      {/* S */}
      <mesh geometry={new THREE.ExtrudeGeometry(shapes.sPath, extrudeSettings)}>
        <meshPhysicalMaterial
          color="#10b981"
          metalness={0.9}
          roughness={0.1}
          clearcoat={1}
        />
      </mesh>

    </group>
  );
}

export default function Premium3DLogo() {
  return (
    <div className="w-full h-screen bg-[#020617]">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        
        {/* 💡 Lighting (THIS is what makes it premium) */}
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={2} />
        <pointLight position={[-5, -5, -5]} intensity={2} color="#22d3ee" />
        <pointLight position={[5, -5, 5]} intensity={2} color="#10b981" />

        <LogoMesh />

        <OrbitControls enableZoom={false} />

      </Canvas>
    </div>
  );
}
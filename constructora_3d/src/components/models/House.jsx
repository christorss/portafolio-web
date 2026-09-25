import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box } from '@react-three/drei';

export default function Mansion(props) {
  const groupRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      // Rotación muy sutil para apreciar la arquitectura
      groupRef.current.rotation.y = Math.sin(t * 0.2) * 0.15;
    }
  });

  return (
    <group ref={groupRef} {...props} dispose={null}>
      {/* 1. TERRENO / BASE */}
      <Box args={[14, 0.4, 10]} position={[0, -0.2, 0]} receiveShadow>
        <meshStandardMaterial color="#2d3748" roughness={0.9} />
      </Box>

      {/* 2. PISCINA INFINITA */}
      <Box args={[4, 0.2, 8]} position={[-4, 0.05, 0.5]} receiveShadow>
        <meshPhysicalMaterial 
          color="#0284c7" 
          transmission={0.8} 
          opacity={0.9}
          roughness={0.1}
          metalness={0.1}
          ior={1.4}
        />
      </Box>
      {/* Borde de la piscina */}
      <Box args={[4.2, 0.3, 8.2]} position={[-4, 0.1, 0.5]} receiveShadow>
        <meshStandardMaterial color="#e2e8f0" />
      </Box>

      {/* 3. PLANTA BAJA (Garaje y Sala de estar) */}
      {/* Bloque principal PB */}
      <Box args={[7, 3, 6]} position={[2, 1.5, -0.5]} castShadow receiveShadow>
        <meshStandardMaterial color="#1a202c" roughness={0.7} />
      </Box>
      {/* Cristalera enorme PB (Frente a la piscina) */}
      <Box args={[0.2, 2.6, 5]} position={[-1.4, 1.5, -0.5]} castShadow>
        <meshPhysicalMaterial 
          color="#e0f2fe" 
          transmission={0.95} 
          opacity={1} 
          metalness={0.2} 
          roughness={0} 
          ior={1.5} 
          thickness={1} 
        />
      </Box>

      {/* 4. PLANTA ALTA (Voladizo / Cantilever) */}
      {/* El bloque superior sobresale hacia la piscina */}
      <Box args={[9, 2.5, 7]} position={[1, 4.25, 0]} castShadow receiveShadow>
        <meshStandardMaterial color="#f8fafc" roughness={0.3} metalness={0.1} />
      </Box>
      
      {/* Cristalera de la suite principal (Planta alta frente) */}
      <Box args={[0.2, 2.2, 6]} position={[-3.4, 4.25, 0]} castShadow>
        <meshPhysicalMaterial 
          color="#e0f2fe" 
          transmission={0.95} 
          opacity={1} 
          metalness={0.2} 
          roughness={0} 
          ior={1.5} 
          thickness={1} 
        />
      </Box>

      {/* 5. ACENTOS DE MADERA (Listones verticales decorativos) */}
      <group position={[5.6, 3, 2.5]}>
        {[...Array(8)].map((_, i) => (
          <Box key={i} args={[0.2, 5, 0.1]} position={[0, 0, i * -0.4]} castShadow>
            <meshStandardMaterial color="#b45309" roughness={0.6} />
          </Box>
        ))}
      </group>

      {/* 6. TECHO Y DETALLES */}
      <Box args={[9.4, 0.3, 7.4]} position={[1, 5.65, 0]} castShadow receiveShadow>
        <meshStandardMaterial color="#334155" />
      </Box>

      {/* Muro lateral ciego para darle masividad */}
      <Box args={[7, 5.5, 0.4]} position={[2, 2.75, -3.7]} castShadow receiveShadow>
        <meshStandardMaterial color="#cbd5e1" roughness={0.8} />
      </Box>
    </group>
  );
}

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import House from './models/House';

export default function ModelViewer() {
  return (
    <section id="proyectos" className="section model-section" style={{ backgroundColor: '#f8fafc', color: '#0f172a' }}>
      <div className="container" style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h2 className="heading-lg" style={{ fontSize: '2.5rem', fontWeight: 600, letterSpacing: '-1px' }}>
          Explora nuestros <span style={{ color: '#0284c7' }}>Modelos 3D</span>
        </h2>
        <p style={{ marginTop: '1rem', color: '#64748b', fontSize: '1.1rem' }}>
          Interactúa con los diseños antes de la construcción. (Rótalo con el mouse)
        </p>
      </div>

      <div className="model-canvas">
        <Canvas camera={{ position: [6, 3, 8], fov: 40 }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[10, 10, 5]} intensity={1.5} castShadow />
          <Environment preset="city" />
          
          <group position={[0, -1, 0]}>
            <House />
            <ContactShadows resolution={1024} scale={20} blur={2.5} opacity={0.6} far={10} color="#000000" position={[0, -1.25, 0]} />
          </group>
          
          <OrbitControls 
            enableZoom={true} 
            minPolarAngle={0}
            maxPolarAngle={Math.PI / 2 + 0.1}
          />
        </Canvas>
      </div>
    </section>
  );
}

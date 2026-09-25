import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import { motion } from 'framer-motion';
import House from './models/House';

export default function Hero3D() {
  return (
    <section className="hero-wrapper">
      {/* Contenido de Texto Animado */}
      <div className="container hero-content">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{ maxWidth: '600px' }}
        >
          <h1 className="heading-xl" style={{ marginBottom: '1.5rem' }}>
            Construimos el <span className="text-gradient">Futuro</span> de tu Hogar
          </h1>
          <p className="text-secondary" style={{ fontSize: '1.25rem', marginBottom: '2rem', lineHeight: '1.6' }}>
            Diseños arquitectónicos de vanguardia, materiales premium y una experiencia inmersiva. Visualiza tu próxima casa antes de que exista.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <motion.a 
              href="#proyectos" 
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explorar Proyectos
            </motion.a>
            <motion.a 
              href="#contacto" 
              className="btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contáctanos
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Escena 3D Interactiva */}
      <div className="canvas-container">
        <Canvas camera={{ position: [5, 2, 8], fov: 45 }}>
          {/* Iluminación base */}
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
          
          {/* Entorno HDRI para reflejos premium (especialmente en cristales) */}
          <Environment preset="city" />

          {/* El modelo de la casa desplazado a la derecha en pantallas grandes */}
          <group position={[2.5, -0.5, 0]}>
            <House />
            {/* Sombras suaves de contacto bajo la casa */}
            <ContactShadows resolution={1024} scale={20} blur={2} opacity={0.5} far={10} color="#000000" position={[0, -1.25, 0]} />
          </group>

          {/* Controles para que el usuario pueda rotar libremente la cámara */}
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 2}
          />
        </Canvas>
      </div>
    </section>
  );
}

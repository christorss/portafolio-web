import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="inicio" className="hero-fullscreen">
      {/* Capa de oscurecimiento suave para que el texto sea legible */}
      <div className="hero-overlay"></div>
      
      <div className="container hero-content-bottom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p className="hero-subtitle">CASAS</p>
          <h1 className="hero-title">
            VANGUARDIA <span className="text-light">RESIDENCIAL</span>
          </h1>
          <p className="hero-location">Zona Norte, Buenos Aires</p>
        </motion.div>
      </div>
    </section>
  );
}

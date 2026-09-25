import React from 'react';
import { motion } from 'framer-motion';
import { Shield, PenTool, Leaf } from 'lucide-react';

const featuresData = [
  {
    icon: <PenTool size={40} className="text-accent" />,
    title: "Diseño Personalizado",
    description: "Cada proyecto es único, adaptado a tu estilo de vida y con la estética más moderna del mercado."
  },
  {
    icon: <Shield size={40} className="text-accent" />,
    title: "Construcción Sólida",
    description: "Utilizamos materiales premium y procesos de ingeniería avanzados para garantizar durabilidad."
  },
  {
    icon: <Leaf size={40} className="text-accent" />,
    title: "Sostenibilidad",
    description: "Casas eco-amigables con eficiencia energética y mínima huella de carbono."
  }
];

export default function Features() {
  return (
    <section id="nosotros" className="section" style={{ backgroundColor: 'var(--primary-color)' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 className="heading-lg" style={{ marginBottom: '1rem' }}>Por qué elegir <span className="text-accent">Vanguardia</span></h2>
          <p className="text-secondary" style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.125rem' }}>
            Elevamos los estándares de construcción integrando tecnología 3D, diseño de clase mundial y materiales de la más alta calidad.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {featuresData.map((feature, index) => (
            <motion.div 
              key={index}
              className="glass-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div style={{ marginBottom: '1.5rem' }}>{feature.icon}</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{feature.title}</h3>
              <p className="text-secondary" style={{ lineHeight: '1.6' }}>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

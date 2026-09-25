import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contacto" className="section" style={{ position: 'relative' }}>
      <div className="container">
        <motion.div 
          className="glass-card"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 2rem', textAlign: 'center' }}
        >
          <h2 className="heading-lg" style={{ marginBottom: '1.5rem' }}>
            ¿Listo para construir tu <span className="text-gradient">Sueño</span>?
          </h2>
          <p className="text-secondary" style={{ marginBottom: '3rem', fontSize: '1.125rem' }}>
            Déjanos tus datos y un arquitecto experto se comunicará contigo para iniciar el diseño de tu próximo hogar.
          </p>
          
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '500px', margin: '0 auto' }}>
            <input 
              type="text" 
              placeholder="Nombre completo" 
              style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(0,0,0,0.2)', color: 'white', fontSize: '1rem', outline: 'none' }}
            />
            <input 
              type="email" 
              placeholder="Correo electrónico" 
              style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(0,0,0,0.2)', color: 'white', fontSize: '1rem', outline: 'none' }}
            />
            <motion.button 
              type="button"
              className="btn-primary"
              style={{ width: '100%', marginTop: '1rem' }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Solicitar Asesoría
            </motion.button>
          </form>
        </motion.div>
      </div>
      
      {/* Footer minimalista */}
      <footer style={{ textAlign: 'center', padding: '2rem 0', marginTop: '4rem', borderTop: '1px solid rgba(255,255,255,0.05)', color: 'var(--text-secondary)' }}>
        <div className="container">
          <p>© {new Date().getFullYear()} Vanguardia3D. Todos los derechos reservados.</p>
        </div>
      </footer>
    </section>
  );
}

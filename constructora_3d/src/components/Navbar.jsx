import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      className={`navbar-modern ${scrolled ? 'navbar-scrolled' : ''}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container nav-container">
        {/* Logo a la izquierda */}
        <div className="logo-modern">
          <span className="logo-icon">V</span>
          <span className="logo-text">VANGUARDIA CONSTRUCCIONES</span>
        </div>
        
        <button
          className="nav-toggle"
          type="button"
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul className={`nav-links-modern ${isOpen ? 'nav-links-open' : ''}`}>
          <li><a href="#inicio" onClick={() => setIsOpen(false)}>INICIO</a></li>
          <li><a href="#nosotros" onClick={() => setIsOpen(false)}>NOSOTROS</a></li>
          <li><a href="#proyectos" onClick={() => setIsOpen(false)}>PROYECTOS</a></li>
          <li><a href="#contacto" onClick={() => setIsOpen(false)}>CONTACTO</a></li>
        </ul>
      </div>
    </motion.nav>
  );
}

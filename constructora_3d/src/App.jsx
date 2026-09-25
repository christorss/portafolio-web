import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ModelViewer from './components/ModelViewer';
import Features from './components/Features';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />
      <main>
        {/* Sección Hero con Foto a Pantalla Completa */}
        <Hero />
        
        {/* Sección del Modelo 3D Interactivo */}
        <ModelViewer />
        
        {/* Sección de Características */}
        <Features />
        
        {/* Sección de Contacto */}
        <Contact />
      </main>
    </>
  );
}

export default App;

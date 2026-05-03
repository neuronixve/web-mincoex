'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-sm ${
        isScrolled ? 'py-2' : 'py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Bloque Izquierda: Logo Ministerio */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="block">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/mincoex-logos/mpp-comercio-exterior-logo.png" 
                alt="Logo MINCOEX" 
                className="h-16 w-auto object-contain"
              />
            </Link>
          </div>
          
          {/* Bloque Centro: Menú de navegación */}
          <div className="hidden md:flex items-center justify-center flex-grow space-x-8">
            <Link href="/" className="text-blue-950 font-bold hover:text-blue-700 transition-colors text-[15px]">Inicio</Link>
            <Link href="/ministerio" className="text-blue-950 font-bold hover:text-blue-700 transition-colors text-[15px]">El Ministerio</Link>
            <Link href="#" className="text-blue-950 font-bold hover:text-blue-700 transition-colors text-[15px]">Oferta Exportable</Link>
            <Link href="/noticias" className="text-blue-950 font-bold hover:text-blue-700 transition-colors text-[15px]">Noticias</Link>
            <Link href="/contacto" className="text-blue-950 font-bold hover:text-blue-700 transition-colors text-[15px]">Contacto</Link>
          </div>

          {/* Bloque Derecha: Logo Bicentenario */}
          <div className="flex-shrink-0 flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/mincoex-logos/logo-bicentenario-bolivia.png" 
              alt="Logo Bicentenario de Bolivia" 
              className="h-14 w-auto object-contain"
            />
          </div>

          {/* Botón menú móvil */}
          <div className="md:hidden ml-4">
            <button className="text-blue-950 p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

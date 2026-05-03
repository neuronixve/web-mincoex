'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type HeroPost = {
  id: string;
  title?: string;
  slug: string;
  custom_excerpt?: string | null;
  excerpt?: string | null;
  feature_image?: string | null;
};

export default function HeroCarousel({ posts }: { posts: HeroPost[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!posts || posts.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % posts.length);
    }, 6000); // Cambia cada 6 segundos
    return () => clearInterval(interval);
  }, [posts]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % posts.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + posts.length) % posts.length);
  };

  if (!posts || posts.length === 0) {
    return (
      <div className="h-[80vh] bg-slate-900 flex items-center justify-center text-white mt-[112px]">
        <h1 className="text-3xl font-bold">MINCOEX</h1>
      </div>
    );
  }

  return (
    <div className="relative h-[85vh] w-full overflow-hidden bg-slate-900 group mt-[112px]">
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* Fondo */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${posts[currentIndex].feature_image || 'https://images.unsplash.com/photo-1577960309990-1c095d3154f3?q=80&w=2070&auto=format&fit=crop'})`
            }}
          >
            {/* Overlay Gradient (De abajo hacia arriba) */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
          </div>

          {/* Contenido */}
          <div className="absolute bottom-0 left-0 right-0 flex flex-col justify-end pb-20 items-center px-12 sm:px-16 lg:px-20">
            <div className="w-full max-w-4xl text-center">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="inline-block py-1 px-3 rounded-full bg-blue-600/80 text-white text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-sm"
              >
                Destacado
              </motion.span>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4"
              >
                <a 
                  href={`/noticias/${posts[currentIndex].slug}`}
                  className="hover:text-blue-300 transition-colors cursor-pointer"
                >
                  {posts[currentIndex].title}
                </a>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="text-sm md:text-base text-gray-200 mb-4 line-clamp-2 mx-auto"
              >
                {posts[currentIndex].custom_excerpt || posts[currentIndex].excerpt || "Información oficial del Ministerio del Poder Popular para el Comercio Exterior."}
              </motion.p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Flecha Izquierda */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-sm transition-all duration-300 z-30 opacity-0 group-hover:opacity-100"
        aria-label="Noticia Anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Flecha Derecha */}
      <button 
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-sm transition-all duration-300 z-30 opacity-0 group-hover:opacity-100"
        aria-label="Siguiente Noticia"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3 z-20">
        {posts.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === currentIndex ? 'w-8 bg-white' : 'w-2 bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Ir a la diapositiva ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

'use client';

import { motion } from 'framer-motion';

const entes = [
  {
    name: 'Bancoex',
    link: 'http://www.bancoex.gob.ve/',
    logo: '/mincoex-logos/logo-bancoex.png',
    bg: 'bg-blue-600'
  },
  {
    name: 'Venexporta',
    link: 'https://www.instagram.com/venexporta',
    logo: '/mincoex-logos/logo-venexporta.png',
    bg: 'bg-indigo-950'
  }
];

export default function EntesAdscritos() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-blue-900 tracking-tight"
          >
            Nuestros Entes Adscritos
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-32 h-px bg-blue-900 mx-auto mt-4 mb-4" 
          />

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="italic text-slate-500 text-lg"
          >
            Aliados estratégicos para el impulso exportador
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {entes.map((ente, idx) => (
            <motion.div
              key={ente.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className={`${ente.bg} p-10 rounded-2xl flex flex-col items-center justify-center text-center shadow-md hover:shadow-xl transition-shadow duration-300 min-h-[300px] relative overflow-hidden`}
            >
              <div className="flex-grow flex items-center justify-center mb-8">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={ente.logo} 
                  alt={`Logo ${ente.name}`} 
                  className="max-h-24 w-auto object-contain drop-shadow-md brightness-0 invert"
                />
              </div>
              
              <div className="mt-auto">
                <a 
                  href={ente.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 bg-white/20 hover:bg-white/30 text-white font-medium rounded-full backdrop-blur-sm transition-colors border border-white/10"
                >
                  Conoce más
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

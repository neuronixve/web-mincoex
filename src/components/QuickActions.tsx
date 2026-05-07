'use client';

import { motion } from 'framer-motion';
import { Handshake, Package, Globe } from 'lucide-react';

const actions = [
  {
    title: '¿QUIERES EXPORTAR?',
    icon: Handshake,
    link: 'http://www.bancoex.gob.ve/index.php/quieres-exportar/',
    color: 'bg-blue-600'
  },
  {
    title: 'OFERTA EXPORTABLE',
    icon: Package,
    link: '#',
    color: 'bg-emerald-600'
  },
  {
    title: 'PERFIL PAÍS',
    icon: Globe,
    link: 'http://www.bancoex.gob.ve/index.php/perfil-pais/',
    color: 'bg-blue-600'
  }
];

export default function QuickActions() {
  return (
    <section className="relative z-20 mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4">
        {actions.map((action, idx) => (
          <motion.a
            href={action.link}
            key={action.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className={`group block ${action.color} rounded-lg p-6 sm:p-8 flex flex-col items-center justify-center text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300 min-h-[160px]`}
          >
            <action.icon className="w-12 h-12 text-white mb-4" strokeWidth={1.5} />
            <h3 className="text-white font-bold text-sm sm:text-base leading-tight">
              {action.title}
            </h3>
          </motion.a>
        ))}

        {/* Tarjeta 4: VUCE */}
        <motion.a
          href="http://registro-empresa.vuce.gob.ve/"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="group block bg-emerald-600 rounded-lg p-6 sm:p-8 flex flex-col items-center justify-center text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300 min-h-[160px]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/mincoex-logos/logo-vuce-white-with-text.png" 
            alt="VUCE Ventanilla Única de Comercio Exterior" 
            className="w-auto h-16 object-contain"
          />
        </motion.a>
      </div>
    </section>
  );
}

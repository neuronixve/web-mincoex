'use client';

import { motion, Variants } from 'framer-motion';

// Definición simple del tipo para el Post de Ghost
type GhostPost = {
  id: string;
  title?: string;
  slug: string;
  custom_excerpt?: string | null;
  feature_image?: string | null;
  published_at?: string | null;
};

interface NewsGridProps {
  posts: GhostPost[];
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const }
  }
};

export default function NewsGrid({ posts }: NewsGridProps) {
  if (!posts || posts.length === 0) {
    return (
      <div className="text-center py-12 text-slate-500">
        No hay noticias disponibles en este momento.
      </div>
    );
  }

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {posts.map((post) => (
        <motion.article 
          key={post.id} 
          variants={cardVariants}
          className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-slate-100 flex flex-col h-full"
        >
          {post.feature_image ? (
            <div className="relative h-48 w-full overflow-hidden bg-slate-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={post.feature_image} 
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ) : (
            <div className="h-48 w-full bg-slate-200 flex items-center justify-center">
              <span className="text-slate-400">Sin Imagen</span>
            </div>
          )}
          
          <div className="p-6 flex flex-col flex-grow">
            <time className="text-xs font-semibold text-blue-600 mb-2 uppercase tracking-wide">
              {post.published_at ? new Date(post.published_at).toLocaleDateString('es-VE', { day: 'numeric', month: 'long', year: 'numeric' }) : ''}
            </time>
            <h3 className="text-lg font-bold text-slate-900 mb-3 line-clamp-2 leading-tight">
              {post.title}
            </h3>
            <p className="text-slate-600 text-sm line-clamp-3 mb-4 flex-grow">
              {post.custom_excerpt || "Lee más sobre esta importante actualización del Ministerio."}
            </p>
            <a 
              href={`/noticias/${post.slug}`} 
              className="inline-flex items-center text-sm font-bold text-blue-700 hover:text-blue-900 transition-colors mt-auto"
            >
              Leer Completo
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </a>
          </div>
        </motion.article>
      ))}
    </motion.div>
  );
}

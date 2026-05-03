'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search } from 'lucide-react';

type GhostPost = {
  id: string;
  title?: string;
  slug: string;
  custom_excerpt?: string | null;
  excerpt?: string | null;
  feature_image?: string | null;
  published_at?: string | null;
};

export default function NewsArchiveClient({ initialPosts }: { initialPosts: GhostPost[] }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = initialPosts.filter(post => {
    const term = searchTerm.toLowerCase();
    const titleMatch = post.title?.toLowerCase().includes(term);
    const excerptMatch = (post.custom_excerpt || post.excerpt)?.toLowerCase().includes(term);
    return titleMatch || excerptMatch;
  });

  return (
    <div className="w-full">
      {/* 1. ENCABEZADO PRINCIPAL */}
      <div className="text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h1 className="text-blue-900 font-extrabold text-5xl">Noticias</h1>
        <p className="text-slate-600 font-light mt-4 text-lg md:text-xl">
          Mantente informado sobre las últimas novedades del comercio exterior venezolano
        </p>
      </div>

      {/* 2. BARRA DE BÚSQUEDA */}
      <div className="max-w-3xl mx-auto mt-8 px-4 w-full">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="w-full block pl-11 pr-4 py-4 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all shadow-sm"
            placeholder="Buscar noticias..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* 3. SECCIÓN "TODAS LAS NOTICIAS" */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-16 mb-8 text-center">
        <h2 className="text-blue-900 font-bold text-3xl">Todas las Noticias</h2>
      </div>

      {/* 4. GRILLA DE TARJETAS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-20">
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Link href={`/noticias/${post.slug}`} key={post.id} className="group block">
                <div className="bg-white border border-gray-100 shadow-sm group-hover:shadow-md transition-all duration-300 rounded-2xl overflow-hidden h-full flex flex-col">
                  {/* Imagen superior */}
                  <div className="h-56 w-full bg-slate-100 overflow-hidden relative">
                    {post.feature_image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img 
                        src={post.feature_image} 
                        alt={post.title || "Noticia MINCOEX"} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-blue-50 text-blue-200">
                        <span className="font-bold text-2xl">MINCOEX</span>
                      </div>
                    )}
                  </div>
                  
                  {/* Contenedor de texto */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-blue-900 font-bold text-xl line-clamp-2 mb-3 group-hover:text-blue-700 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-rose-900 text-sm line-clamp-3">
                      {post.custom_excerpt || post.excerpt || "Información oficial del Ministerio del Poder Popular para el Comercio Exterior."}
                    </p>
                    
                    {post.published_at && (
                      <div className="mt-auto pt-4 text-xs text-gray-400 font-medium uppercase tracking-wide">
                        {new Date(post.published_at).toLocaleDateString('es-VE', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric'
                        })}
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-500">
            <Search className="w-12 h-12 mx-auto text-gray-300 mb-4" />
            <p className="text-xl font-medium">No se encontraron noticias que coincidan con tu búsqueda.</p>
            <button 
              onClick={() => setSearchTerm('')} 
              className="mt-4 text-blue-600 hover:text-blue-800 font-medium hover:underline"
            >
              Borrar filtro
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

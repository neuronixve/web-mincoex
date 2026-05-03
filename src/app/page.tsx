import { getPosts } from '@/lib/ghost';
import Navbar from '@/components/Navbar';
import HeroCarousel from '@/components/HeroCarousel';
import QuickActions from '@/components/QuickActions';
import EntesAdscritos from '@/components/EntesAdscritos';
import NewsGrid from '@/components/NewsGrid';
import Footer from '@/components/Footer';

export const revalidate = 3600; // Revalidate every hour

export default async function Home() {
  // Obtenemos hasta 10 noticias desde Ghost (4 para el Hero, 6 para la grilla)
  const allPosts = await getPosts(10);
  
  // Dividimos: 4 para el Hero, el resto para la cuadrícula
  const heroPosts = allPosts.slice(0, 4);
  const gridPosts = allPosts.slice(4);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* 2. Hero Section */}
      <HeroCarousel posts={heroPosts} />
      
      {/* 3. Quick Actions */}
      <QuickActions />
      
      {/* 4. Entes Adscritos */}
      <EntesAdscritos />
      
      {/* 5. Noticias Recientes */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-black text-blue-900 tracking-tight">Noticias</h2>
          <div className="w-24 mt-4 mb-4 border-b-4 border-yellow-400" />
          <p className="italic text-slate-500 font-light text-lg md:text-xl">
            Mantente informado sobre el comercio exterior venezolano
          </p>
        </div>
        
        <NewsGrid posts={gridPosts} />
        
        <div className="mt-12 text-center">
          <a href="/noticias" className="inline-flex items-center px-6 py-3 border border-slate-300 text-base font-medium rounded-lg text-slate-700 bg-white hover:bg-slate-50 transition shadow-sm">
            Ver todas las noticias
          </a>
        </div>
      </section>

      {/* 6. Footer Institucional */}
      <Footer />
    </main>
  );
}

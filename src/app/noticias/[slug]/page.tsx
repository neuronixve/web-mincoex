import { notFound } from 'next/navigation';
import { getPostBySlug, getPosts } from '@/lib/ghost';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';
import ShareButtons from '@/components/ShareButtons';

export const revalidate = 3600;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug);

  if (!post) {
    return { title: 'Noticia no encontrada' };
  }

  return {
    title: `${post.title} | MINCOEX`,
    description: post.custom_excerpt || post.excerpt || '',
    openGraph: {
      images: post.feature_image ? [{ url: post.feature_image }] : [],
    },
  };
}

export default async function NewsArticlePage({ params }: PageProps) {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  // Obtenemos las 4 noticias recientes para la barra lateral
  // Hacemos el fetch de 5 por si la actual está entre ellas y debemos filtrarla
  const recentPostsData = await getPosts(5);
  // Filtramos la noticia actual y tomamos 4
  const recentPosts = recentPostsData
    .filter((p: any) => p.slug !== resolvedParams.slug)
    .slice(0, 4);

  const publishedDate = post.published_at
    ? new Date(post.published_at).toLocaleDateString('es-VE', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : '';

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <main className="flex-grow pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* COLUMNA PRINCIPAL */}
          <article className="lg:col-span-8">
            <header className="mb-8">
              <h1 className="text-3xl md:text-5xl font-extrabold text-blue-900 leading-tight mb-4">
                {post.title}
              </h1>
              
              {publishedDate && (
                <div className="flex items-center text-gray-500 font-medium">
                  <Calendar className="w-5 h-5 mr-2" />
                  <time>{publishedDate}</time>
                </div>
              )}
            </header>

            {post.feature_image && (
              <div className="mb-10 rounded-2xl overflow-hidden shadow-sm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.feature_image}
                  alt={post.title || "Imagen de portada"}
                  className="w-full h-auto object-cover max-h-[500px]"
                />
              </div>
            )}

            {/* BOTONES DE COMPARTIR */}
            <ShareButtons title={post.title || ''} slug={resolvedParams.slug} />

            {/* CUERPO DE LA NOTICIA */}
            <div 
              className="prose prose-lg prose-blue max-w-none prose-img:rounded-2xl prose-a:text-blue-600 hover:prose-a:text-blue-800 text-gray-700"
              dangerouslySetInnerHTML={{ __html: post.html || '' }}
            />
          </article>

          {/* BARRA LATERAL */}
          <aside className="lg:col-span-4">
            <div className="bg-slate-50 rounded-2xl p-6 lg:sticky lg:top-32 border border-slate-100 shadow-sm">
              <h2 className="text-xl font-bold text-blue-900 mb-6 pb-4 border-b border-gray-200">
                Noticias Recientes
              </h2>
              
              <ul className="space-y-5">
                {recentPosts.map((recent: any) => (
                  <li key={recent.id}>
                    <Link 
                      href={`/noticias/${recent.slug}`}
                      className="group block"
                    >
                      <h3 className="text-rose-900 font-semibold group-hover:underline leading-snug">
                        {recent.title}
                      </h3>
                      {recent.published_at && (
                        <span className="text-xs text-gray-500 mt-1 block">
                          {new Date(recent.published_at).toLocaleDateString('es-VE', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric',
                          })}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                <Link 
                  href="/noticias" 
                  className="inline-flex items-center text-sm font-bold text-blue-700 hover:text-blue-900 transition-colors"
                >
                  Ver el histórico completo
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </Link>
              </div>
            </div>
          </aside>

        </div>
      </main>

      <Footer />
    </div>
  );
}

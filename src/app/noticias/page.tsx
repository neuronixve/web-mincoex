import { getPosts } from '@/lib/ghost';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NewsArchiveClient from './NewsArchiveClient';
import { Metadata } from 'next';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Archivo de Noticias | MINCOEX",
  description: "Mantente informado sobre las últimas novedades del comercio exterior venezolano.",
};

export default async function NoticiasPage() {
  // Obtenemos un número amplio de noticias para poblar el buscador
  const posts = await getPosts(50);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <main className="flex-grow pt-32 w-full">
        <NewsArchiveClient initialPosts={posts} />
      </main>

      <Footer />
    </div>
  );
}

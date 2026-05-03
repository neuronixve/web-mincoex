import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Target, Compass, Globe, TrendingUp, Handshake, ShieldCheck } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "El Ministerio | MINCOEX",
  description: "Conozca la misión, visión y competencias del Ministerio del Poder Popular para el Comercio Exterior de Venezuela.",
};

const competencias = [
  {
    title: "Promoción de Exportaciones",
    description: "Fomentar y diversificar las exportaciones de bienes y servicios no tradicionales para fortalecer la economía nacional.",
    icon: <Globe className="w-8 h-8 text-blue-600" />
  },
  {
    title: "Atracción de Inversiones",
    description: "Desarrollar políticas que incentiven la inversión extranjera directa y alianzas estratégicas productivas.",
    icon: <TrendingUp className="w-8 h-8 text-blue-600" />
  },
  {
    title: "Acuerdos Comerciales",
    description: "Negociar y administrar acuerdos internacionales que faciliten el intercambio comercial justo y soberano.",
    icon: <Handshake className="w-8 h-8 text-blue-600" />
  },
  {
    title: "Regulación y Control",
    description: "Establecer normativas que garanticen la calidad y transparencia en los procesos de comercio exterior.",
    icon: <ShieldCheck className="w-8 h-8 text-blue-600" />
  }
];

export default function MinisterioPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <main className="flex-grow pt-20 w-full">
        {/* 1. Encabezado (Hero Header) */}
        <section className="bg-blue-900 py-16 md:py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">
              El Ministerio
            </h1>
          </div>
        </section>

        {/* 2. Sección de Misión y Visión */}
        <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Tarjeta de Misión */}
            <div className="bg-white rounded-2xl shadow-md p-8 sm:p-10 border border-gray-100 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
              <div className="bg-blue-50 p-4 rounded-full mb-6">
                <Target className="w-10 h-10 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Misión</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                Diseñar, formular e implementar políticas públicas en materia de comercio exterior e inversión productiva, 
                orientadas a promover la inserción estratégica de Venezuela en la economía internacional, diversificando la oferta exportable 
                no tradicional y fomentando un modelo de desarrollo económico soberano, sustentable y equitativo.
              </p>
            </div>

            {/* Tarjeta de Visión */}
            <div className="bg-white rounded-2xl shadow-md p-8 sm:p-10 border border-gray-100 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
              <div className="bg-blue-50 p-4 rounded-full mb-6">
                <Compass className="w-10 h-10 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Visión</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                Ser la institución rectora y referente de excelencia en la gestión del comercio exterior venezolano, 
                reconocida a nivel nacional e internacional por su eficiencia en el impulso de la producción nacional con calidad de exportación, 
                garantizando relaciones comerciales transparentes y beneficiosas para el bienestar de la Nación.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Sección de Competencias y Valores */}
        <section className="bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-blue-900 font-bold text-3xl md:text-4xl text-center mb-12">
              Nuestras Competencias
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {competencias.map((comp, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:border-blue-200 transition-colors flex flex-col items-start"
                >
                  <div className="mb-4">
                    {comp.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-blue-950 mb-3">
                    {comp.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {comp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

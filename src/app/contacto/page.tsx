import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MapPin, Mail } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contacto | MINCOEX",
  description: "Estamos a su disposición para atender sus requerimientos e inquietudes sobre el comercio exterior venezolano.",
};

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />

      <main className="flex-grow pt-20 w-full">
        {/* 1. Encabezado (Hero Header) */}
        <section className="bg-blue-900 py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Contacto
            </h1>
            <p className="text-lg md:text-xl text-blue-100 font-light">
              Estamos a su disposición para atender sus requerimientos e inquietudes sobre el comercio exterior venezolano.
            </p>
          </div>
        </section>

        {/* 2. Contenedor Principal */}
        <section className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          
          {/* 3. Columna Izquierda (Información y Mapa) */}
          <div className="flex flex-col">
            <h2 className="text-3xl font-bold text-blue-900 mb-8">
              Información de Contacto
            </h2>
            
            <ul className="space-y-6 mb-8 text-lg text-slate-700">
              <li className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full mr-4">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Dirección</h3>
                  <p>
                    Av Blandín, Torre Pequiven, La Castellana, Caracas, Venezuela
                  </p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full mr-4">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Correo Electrónico</h3>
                  <a href="mailto:info@mincoex.gob.ve" className="text-blue-600 hover:text-blue-800 transition-colors">
                    info@mincoex.gob.ve
                  </a>
                </div>
              </li>
            </ul>

            {/* Mapa Incrustado */}
            <div className="rounded-xl overflow-hidden shadow-md mt-auto border border-gray-200">
              <iframe 
                src="https://maps.google.com/maps?q=10.4981591,-66.853375&z=17&output=embed" 
                width="100%" 
                height="100%" 
                className="w-full h-64 md:h-80"
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de Ubicación de MINCOEX"
              />
            </div>
          </div>

          {/* 4. Columna Derecha (Formulario de Contacto) */}
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 border border-gray-100 h-fit">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">
              Envíenos un mensaje
            </h2>
            
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold text-slate-700 mb-2">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Ej. María González"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="ejemplo@correo.com"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-2">
                  Asunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Motivo de su consulta"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Escriba su mensaje aquí..."
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-y"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>

        </section>
      </main>

      <Footer />
    </div>
  );
}

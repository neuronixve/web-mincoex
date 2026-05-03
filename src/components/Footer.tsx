import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-gray-200 pt-16 pb-8 border-t border-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1 flex flex-col items-start">
            {/* Escudo Nacional */}
            <div className="mb-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/mincoex-logos/escudo-venezuela.png" 
                alt="Escudo Nacional de Venezuela" 
                className="h-24 w-auto object-contain drop-shadow-md"
              />
            </div>
            <h3 className="text-lg font-bold mb-2 text-white">MINCOEX</h3>
            <p className="text-sm text-blue-200/80">Ministerio del Poder Popular para el Comercio Exterior de la República Bolivariana de Venezuela.</p>
          </div>
          
          <div className="col-span-1 md:col-span-1">
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-blue-400">Enlaces Rápidos</h4>
            <ul className="space-y-3 text-sm text-blue-200/80">
              <li><Link href="/" className="hover:text-white transition">Inicio</Link></li>
              <li><Link href="#" className="hover:text-white transition">El Ministerio</Link></li>
              <li><Link href="#" className="hover:text-white transition">Oferta Exportable</Link></li>
              <li><Link href="/noticias" className="hover:text-white transition">Noticias</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1 md:col-span-1">
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-blue-400">Contacto</h4>
            <ul className="space-y-4 text-sm text-blue-200/80">
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-3 text-blue-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <div className="flex flex-col">
                  <span>Av Blandín, Torre Pequiven, La Castellana, Caracas, Venezuela</span>
                  <a 
                    href="https://www.google.com/maps/place/Ministerio+del+Poder+Popular+de+Comercio+Exterior/@10.4981591,-66.853375,17z/data=!3m1!4b1!4m6!3m5!1s0x8c2a59005e337a7f:0x23cdaea5dc5237ae!8m2!3d10.4981591!4d-66.853375!16s%2Fg%2F11yhly3qlh?entry=ttu" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center text-blue-300 hover:text-white font-medium transition-colors"
                  >
                    Ver en Google Maps
                    <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  </a>
                </div>
              </li>
              <li className="flex items-center mt-4">
                <svg className="w-5 h-5 mr-3 text-blue-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <a href="mailto:info@mincoex.gob.ve" className="hover:text-white transition">info@mincoex.gob.ve</a>
              </li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-1">
             <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-blue-400">Ubicación</h4>
             <div className="w-full h-40 bg-blue-900 rounded-lg overflow-hidden border border-blue-800 shadow-inner">
               <iframe 
                 src="https://maps.google.com/maps?q=10.4981591,-66.853375&z=17&output=embed" 
                 width="100%" 
                 height="100%" 
                 style={{ border: 0 }} 
                 allowFullScreen={false} 
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
                 title="Mapa de Ubicación de MINCOEX"
               />
             </div>
          </div>

        </div>
        
        <div className="border-t border-blue-900/50 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-xs text-blue-300/60">
          <p>© {new Date().getFullYear()} Ministerio del Poder Popular para el Comercio Exterior. Todos los derechos reservados.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
             <Link href="#" className="hover:text-white transition">Políticas de Privacidad</Link>
             <Link href="#" className="hover:text-white transition">Términos de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

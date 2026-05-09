import { Link } from 'react-router-dom';
import { Instagram, Facebook, Phone, MapPin } from 'lucide-react';

// actually let's just use standard Lucide icons and an SVG for WA if necessary. I'll swap it to use a MessageCircle or a custom SVG.
// Using custom SVG for Whatsapp for simplicity without extra packages.

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-brand-dark-teal text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Col */}
          <div className="col-span-1 md:col-span-1 flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-2 group">
              <img
                src="/images/logo.svg"
                alt="Mr. Groomer"
                className="w-12 h-12 group-hover:scale-105 transition-transform"
              />
              <div className="flex flex-col">
                <span className="font-bold text-2xl leading-none text-white">Mister Groomer</span>
                <span className="text-xs italic text-brand-light-teal opacity-80">Your trusted stylist</span>
              </div>
            </Link>
            <p className="text-brand-light-teal text-sm mt-2">
              Mantenemos Lindas, Sanas y Felices a sus Mascotas.
            </p>
          </div>

          {/* Links Col 1 */}
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4 text-brand-orange">Navegación</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-brand-light-teal hover:text-white transition-colors text-sm">Inicio</Link></li>
              <li><Link to="/nosotros" className="text-brand-light-teal hover:text-white transition-colors text-sm">Nosotros</Link></li>
              <li><Link to="/servicios" className="text-brand-light-teal hover:text-white transition-colors text-sm">Servicios y Precios</Link></li>
              <li><Link to="/galeria" className="text-brand-light-teal hover:text-white transition-colors text-sm">Galería de Trabajos</Link></li>
            </ul>
          </div>

          {/* Links Col 2 */}
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4 text-brand-orange">Recursos</h3>
            <ul className="space-y-3">
              <li><Link to="/blog" className="text-brand-light-teal hover:text-white transition-colors text-sm">Tips y Consejos</Link></li>
              <li><Link to="/tienda" className="text-brand-light-teal hover:text-white transition-colors text-sm">Tienda en Línea</Link></li>
              <li><Link to="/reservar" className="text-brand-light-teal hover:text-white transition-colors text-sm">Agendar Cita</Link></li>
            </ul>
          </div>

          {/* Contact & Social Col */}
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4 text-brand-orange">Contáctanos</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-brand-light-teal">
                <WhatsAppIcon className="w-5 h-5 shrink-0 mt-0.5 text-brand-orange" />
                <a href="https://wa.me/593978751586" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">097 875 1586</a>
              </li>
              <li className="flex items-start gap-3 text-sm text-brand-light-teal">
                <Phone className="w-5 h-5 shrink-0 mt-0.5 text-brand-orange" />
                <a href="tel:+593998937473" className="hover:text-white transition-colors">099 893 7473</a>
              </li>
              <li className="flex items-start gap-3 text-sm text-brand-light-teal">
                <MapPin className="w-5 h-5 shrink-0 mt-0.5 text-brand-orange" />
                <span>Sector PTE. 8, Conocoto, Quito</span>
              </li>
            </ul>

            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-full bg-brand-orange flex items-center justify-center text-white hover:bg-brand-orange-dark transition-all hover:-translate-y-1">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-orange flex items-center justify-center text-white hover:bg-brand-orange-dark transition-all hover:-translate-y-1">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://wa.me/593978751586" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-brand-orange flex items-center justify-center text-white hover:bg-brand-orange-dark transition-all hover:-translate-y-1">
                <WhatsAppIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-brand-teal/30 text-center flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-brand-light-teal text-xs opacity-80">
            © 2025 Mr. Groomer · Conocoto, Quito, Ecuador
          </p>
          <p className="text-brand-light-teal text-xs opacity-80">
            Mantenemos Lindas, Sanas y Felices a sus Mascotas.
          </p>
        </div>
      </div>
    </footer>
  );
}

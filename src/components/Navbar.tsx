import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Inicio', path: '/' },
  { name: 'Servicios', path: '/servicios' },
  { name: 'Galería', path: '/galeria' },
  { name: 'Reservar', path: '/reservar' },
  { name: 'Blog', path: '/blog' },
  { name: 'Tienda', path: '/tienda' },
  { name: 'Nosotros', path: '/nosotros' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-brand-light-teal shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="group">
              <img
                src="/images/Logo-MG.png"
                alt="Mister Groomer"
                className="h-14 w-auto group-hover:scale-105 transition-transform"
              />
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex space-x-6">
              {NAV_LINKS.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-sm font-medium transition-colors hover:text-brand-orange ${
                      isActive ? 'text-brand-orange border-b-2 border-brand-orange pb-1' : 'text-brand-dark'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
            <Link
              to="/reservar"
              className="bg-brand-orange hover:bg-brand-orange-dark text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              Agendar Cita
            </Link>
          </div>

          <div className="flex items-center lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-brand-dark hover:text-brand-orange transition-colors p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full h-[calc(100vh-5rem)] bg-white border-t border-gray-100 flex flex-col pt-8 px-6 overflow-y-auto">
          <div className="flex flex-col space-y-6">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-xl font-medium transition-colors ${
                    isActive ? 'text-brand-orange' : 'text-brand-dark'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-6 border-t border-gray-100">
              <Link
                to="/reservar"
                onClick={() => setIsOpen(false)}
                className="bg-brand-orange hover:bg-brand-orange-dark text-white px-6 py-4 rounded-full font-medium transition-colors flex justify-center text-lg w-full"
              >
                Agendar Cita
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

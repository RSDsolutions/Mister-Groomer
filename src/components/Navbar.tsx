import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import NavHeader from './ui/nav-header';
import ShinyButton from './ui/shiny-button';

const NAV_LINKS = [
  { name: 'Inicio',    path: '/'          },
  { name: 'Servicios', path: '/servicios' },
  { name: 'Galería',   path: '/galeria'   },
  { name: 'Blog',      path: '/blog'      },
  { name: 'Tienda',    path: '/tienda'    },
  { name: 'Nosotros',  path: '/nosotros'  },
];

const ALL_LINKS = [
  ...NAV_LINKS,
  { name: 'Reservar', path: '/reservar' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 border-b transition-all duration-300 ${
      scrolled
        ? 'bg-white/60 backdrop-blur-md border-brand-light-teal/30'
        : 'bg-transparent border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link to="/" className="shrink-0 group">
            <img
              src="/images/Logo-MG.png"
              alt="Mister Groomer"
              className="h-14 w-auto group-hover:scale-105 transition-transform"
            />
          </Link>

          {/* Sliding pill nav — desktop only */}
          <div className="hidden lg:flex">
            <NavHeader links={NAV_LINKS} />
          </div>

          {/* CTA button — desktop only */}
          <div className="hidden lg:flex">
            <ShinyButton
              onClick={() => navigate('/reservar')}
              className="text-sm px-6 py-2.5"
            >
              Reservar Cita
            </ShinyButton>
          </div>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-brand-dark hover:text-brand-orange transition-colors p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      <div
        className={`lg:hidden absolute top-20 left-0 w-full bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col px-6 pt-6 pb-8 space-y-1">
          {ALL_LINKS.map((link) => {
            const active =
              link.path === '/'
                ? location.pathname === '/'
                : location.pathname.startsWith(link.path);
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-medium py-3 border-b border-gray-50 transition-colors ${
                  active ? 'text-brand-orange' : 'text-brand-dark hover:text-brand-teal'
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          <div className="pt-4">
            <ShinyButton
              onClick={() => { navigate('/reservar'); setIsOpen(false); }}
              className="w-full text-base py-3 rounded-xl justify-center"
            >
              Reservar Cita Ahora
            </ShinyButton>
          </div>
        </div>
      </div>
    </nav>
  );
}

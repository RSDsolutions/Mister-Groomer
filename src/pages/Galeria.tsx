import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import HeroBubbles from '../components/HeroBubbles';
import WordReveal from '../components/WordReveal';
import { cn } from '../lib/utils';
import { IMG } from '../lib/images';
import { useReveal } from '../hooks/useReveal';

const FILTERS = ['Todos', 'Perros', 'Gatos', 'Antes & Después', 'Golden', 'Schnauzer', 'Poodle', 'Otros'];

export default function Galeria() {
  useReveal();
  const [activeFilter, setActiveFilter] = useState('Todos');

  const filtered = activeFilter === 'Todos' || activeFilter === 'Antes & Después'
    ? IMG.gallery
    : IMG.gallery.filter(g => g.type === activeFilter);

  return (
    <div className="bg-[#FAFAFA]">
      {/* ═══ HERO ═══ */}
      <div className="hero-bg relative overflow-hidden pt-12 pb-28 px-4">
        <HeroBubbles />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <p className="hero-badge text-brand-light-teal/80 text-sm font-medium mb-3">
            <Link to="/" className="hover:text-white transition-colors">Home</Link> &nbsp;›&nbsp; Galería
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <WordReveal>Galería de Trabajos</WordReveal>
          </h1>
          <p className="hero-subtitle text-brand-light-teal max-w-2xl mx-auto text-lg">
            Resultados que enamoran. Un vistazo al antes y después de nuestros simpáticos clientes.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12" data-reveal>
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={cn(
                'px-5 py-2.5 rounded-full text-sm font-medium transition-all hover:-translate-y-0.5',
                activeFilter === f
                  ? 'bg-brand-orange text-white shadow-md'
                  : 'bg-white text-brand-muted hover:bg-gray-100 border border-gray-200'
              )}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Gallery Grid — uses fade-slide-up so it re-animates on filter change */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20">
          {filtered.map((item, i) => (
            <div
              key={`${activeFilter}-${i}`}
              className="fade-slide-up group relative rounded-2xl overflow-hidden aspect-[4/5] bg-white shadow-sm hover:shadow-xl transition-shadow cursor-pointer"
              style={{ animationDelay: `${Math.min(i * 60, 480)}ms` }}
            >
              <img
                src={item.src}
                alt={`${item.breed} – ${item.service} en Mr. Groomer`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-white/20 backdrop-blur-md text-white text-xs font-medium px-3 py-1 rounded-full border border-white/30">
                    {item.breed}
                  </span>
                  <span className="bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    {item.service}
                  </span>
                </div>
                <p className="text-white text-sm font-light">
                  Estilista: José Joaquín<br />
                  <span className="text-white/70 text-xs">Mr. Groomer</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Before / After Showcase */}
        <div className="pt-12 border-t border-gray-200">
          <div className="text-center mb-12" data-reveal>
            <span className="inline-block text-brand-orange font-semibold text-sm uppercase tracking-widest mb-3">Transformaciones</span>
            <h2 className="text-3xl font-bold text-brand-dark-teal mb-4">La Magia del Grooming</h2>
            <p className="text-brand-muted max-w-2xl mx-auto">Desliza para ver la transformación de nuestros clientes.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {IMG.beforeAfter.map((pair, i) => (
              <div
                key={i}
                data-reveal
                data-delay={String(i * 150)}
                className="flex flex-col gap-4"
              >
                <BeforeAfterSlider
                  beforeImage={
                    <img src={pair.before} alt={`${pair.name} antes del grooming`} className="w-full h-full object-cover" />
                  }
                  afterImage={
                    <img src={pair.after} alt={`${pair.name} después del grooming`} className="w-full h-full object-cover" />
                  }
                />
                <div className="text-center">
                  <h4 className="font-bold text-brand-dark-teal">{pair.name}</h4>
                  <p className="text-sm border text-brand-orange border-brand-orange/30 bg-brand-orange/5 px-3 py-1 rounded-full inline-block mt-2">
                    {pair.service}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          data-reveal="scale"
          className="bg-gradient-to-br from-brand-dark-teal to-brand-teal rounded-3xl p-12 text-center shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
            <span className="absolute top-4 left-6 text-5xl opacity-[0.07] animate-bounce" style={{ animationDelay: '0.5s' }}>🐕</span>
            <span className="absolute bottom-4 right-6 text-5xl opacity-[0.07] animate-bounce" style={{ animationDelay: '1s' }}>🐈</span>
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-4">¿Quieres resultados así para tu mascota?</h2>
            <p className="text-brand-light-teal mb-8">Agenda tu cita hoy mismo y dale lo mejor.</p>
            <Link
              to="/reservar"
              className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 relative"
            >
              <span className="absolute inset-0 rounded-full bg-brand-orange animate-ping opacity-20 pointer-events-none" />
              Agendar tu cita ahora <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

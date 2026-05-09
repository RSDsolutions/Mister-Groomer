import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PlaceholderImage from '../components/PlaceholderImage';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import { cn } from '../lib/utils';

const FILTERS = ['Todos', 'Perros', 'Gatos', 'Antes & Después', 'Golden', 'Schnauzer', 'Poodle', 'Otros'];

export default function Galeria() {
  const [activeFilter, setActiveFilter] = useState('Todos');

  return (
    <div className="animate-in fade-in duration-500 bg-[#FAFAFA]">
      {/* Hero Mini */}
      <div className="bg-brand-teal pt-12 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-brand-light-teal/80 text-sm font-medium mb-3">
            <Link to="/" className="hover:text-white transition-colors">Home</Link> &nbsp;›&nbsp; Galería
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Galería de Trabajos</h1>
          <p className="text-brand-light-teal max-w-2xl mx-auto text-lg">
            Resultados que enamoran. Un vistazo al antes y después de nuestros simpáticos clientes.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={cn(
                "px-5 py-2.5 rounded-full text-sm font-medium transition-all",
                activeFilter === f 
                  ? "bg-brand-orange text-white shadow-md"
                  : "bg-white text-brand-muted hover:bg-gray-100 border border-gray-200"
              )}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Masonry / Grid Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-white shadow-sm hover:shadow-xl transition-shadow cursor-pointer">
              <PlaceholderImage theme={i % 2 === 0 ? 'teal' : 'orange'} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 rounded-2xl" />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-white/20 backdrop-blur-md text-white text-xs font-medium px-3 py-1 rounded-full border border-white/30">
                    {['Golden Retriever', 'Schnauzer', 'Gato Persa', 'Poodle'][i % 4]}
                  </span>
                  <span className="bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    {['Servicio Completo', 'Baño Medicado', 'Limado de Uñas', 'Baño Cosmético'][i % 4]}
                  </span>
                </div>
                <p className="text-white text-sm font-light">
                  Estilista: José Joaquín<br />
                  <span className="text-white/70 text-xs">Ayer</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Before / After Showcase */}
        <div className="pt-12 border-t border-gray-200">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-dark-teal mb-4">La Magia del Grooming</h2>
            <p className="text-brand-muted max-w-2xl mx-auto">Desliza para ver la transformación de nuestros clientes.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex flex-col gap-4">
                <BeforeAfterSlider 
                  beforeImage={<PlaceholderImage theme="light-teal" className="rounded-none h-full" />}
                  afterImage={<PlaceholderImage theme="teal" className="rounded-none h-full" />}
                />
                <div className="text-center">
                  <h4 className="font-bold text-brand-dark-teal">{['Max (Schnauzer)', 'Luna (Poodle)', 'Simba (Gato)'][item-1]}</h4>
                  <p className="text-sm border text-brand-orange border-brand-orange/30 bg-brand-orange/5 px-3 py-1 rounded-full inline-block mt-2">
                    {['Corte Especializado', 'Baño y Deslanado', 'Baño Felino'][item-1]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-brand-light-teal rounded-3xl p-12 text-center border border-brand-teal/20">
          <h2 className="text-3xl font-bold text-brand-dark-teal mb-6">¿Quieres resultados así para tu mascota?</h2>
          <Link to="/reservar" className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
            Agendar tu cita ahora <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

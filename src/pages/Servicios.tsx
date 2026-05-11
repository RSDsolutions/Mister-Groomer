import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, Check, Info } from 'lucide-react';
import HeroBubbles from '../components/HeroBubbles';
import WordReveal from '../components/WordReveal';
import { useReveal } from '../hooks/useReveal';

const SERVICES = [
  {
    id: 1,
    title: 'Servicio Completo',
    icon: '🛁',
    price: 'Desde $17',
    desc: 'Un spa relajante para que tu mascota quede impecable y libre de estrés. Precio base para mascotas pequeñas (hasta 30 cm de altura o menos de 20 lbs).',
    includes: [
      'Baño con agua tibia',
      'Shampoo premium',
      'Secado profesional',
      'Corte según la raza',
      'Perfume',
      'Moño o pañuelo de regalo'
    ]
  },
  {
    id: 2,
    title: 'Baño Cosmético',
    icon: '✨',
    price: 'Desde $12',
    desc: 'Ideal para el mantenimiento regular entre cortes.',
    includes: [
      'Shampoo y acondicionador cosmético',
      'Secado profesional',
      'Cepillado profundo',
      'Limpieza de oídos externa',
      'Perfume'
    ]
  },
  {
    id: 3,
    title: 'Baño Medicado',
    icon: '💊',
    price: 'Desde $15',
    desc: 'Tratamiento especializado para problemas de piel.',
    includes: [
      'Shampoo medicado dermatológico',
      'Tratamiento para hongos, alergias o piel sensible',
      'Secado a temperatura media',
      'Uso de productos veterinarios avalados'
    ]
  },
  {
    id: 4,
    title: 'Corte y Limado de Uñas',
    icon: '✂️',
    price: 'Desde $3',
    desc: 'Cuidado esencial para su comodidad al caminar y prevenir accidentes.',
    includes: [
      'Corte seguro y preciso',
      'Limado para evitar astillas',
      'Revisión general de las almohadillas'
    ]
  },
  {
    id: 5,
    title: 'Paseos Caninos',
    icon: '🦮',
    price: 'Desde $4/hr/mascota',
    desc: 'Ejercicio, socialización y diversión para tu perro bajo supervisión profesional.',
    includes: [
      'Paseo supervisado en área segura',
      'Socialización con otros perros',
      'Reporte de comportamiento',
      'Hidratación durante el recorrido'
    ]
  }
];

const FAQS = [
  { q: '¿Cuánto dura el servicio?', a: 'Depende de la raza y estado del pelaje, pero normalmente un servicio completo toma entre 1.5 a 2 horas.' },
  { q: '¿Necesito cita previa?', a: 'Sí, trabajamos exclusivamente con cita previa para garantizar la atención Premium y libre de estrés que tu mascota merece.' },
  { q: '¿Atienden cachorros?', a: '¡Claro! Adaptamos un plan de iniciación al grooming muy suave para que tengan una primera experiencia positiva.' },
  { q: '¿Qué productos usan?', a: 'Utilizamos champús cosméticos hipoalergénicos de alta calidad y productos veterinarios premium certificados.' },
  { q: '¿Atienden razas grandes?', a: 'Sí, estamos equipados y tenemos experiencia en manejo de razas grandes con cariño y paciencia.' }
];

export default function Servicios() {
  useReveal();
  return (
    <div className="bg-[#FAFAFA]">
      {/* Hero Mini */}
      <div className="hero-bg relative overflow-hidden pt-12 pb-28 px-4">
        <HeroBubbles />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <p className="hero-badge text-brand-light-teal/80 text-sm font-medium mb-3">
            <Link to="/" className="hover:text-white transition-colors">Home</Link> &nbsp;›&nbsp; Servicios
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <WordReveal>Nuestros Servicios</WordReveal>
          </h1>
          <p className="hero-subtitle text-brand-light-teal max-w-2xl mx-auto text-lg">
            Planes de estética animal personalizados para la salud integral y belleza de tu mejor amigo.
          </p>
        </div>
      </div>

      {/* Atencion Gatos Banner */}
      <div className="max-w-4xl mx-auto -mt-6 relative z-10 px-4">
        <div className="bg-brand-orange text-white rounded-2xl p-6 shadow-xl flex gap-4 items-start sm:items-center flex-col sm:flex-row">
          <div className="bg-white/20 p-3 rounded-full shrink-0">
            <Info className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-lg">¡También atendemos gatos!</h3>
            <p className="text-white/90 text-sm sm:text-base">Brindamos servicios especializados para felinos con técnicas y productos libres de estrés, en un ambiente tranquilo.</p>
          </div>
        </div>
      </div>

      {/* Services List */}
      <div className="max-w-4xl mx-auto px-4 py-20 space-y-8">
        {SERVICES.map((srv, idx) => (
          <div key={srv.id} data-reveal data-delay={String(idx * 100)} className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8 items-start relative overflow-hidden group hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="absolute -right-10 -top-10 text-[150px] opacity-[0.03] rotate-12 group-hover:scale-110 transition-transform pointer-events-none">
              {srv.icon}
            </div>
            
            <div className="bg-brand-light-teal w-20 h-20 rounded-2xl flex items-center justify-center text-4xl shrink-0">
              {srv.icon}
            </div>
            
            <div className="flex-grow w-full z-10">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-brand-dark-teal mb-2">{srv.title}</h2>
                  <p className="text-brand-muted">{srv.desc}</p>
                </div>
                <div className="bg-brand-orange/10 text-brand-orange font-bold px-4 py-2 rounded-full whitespace-nowrap shrink-0 border border-brand-orange/20">
                  {srv.price}
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-sm font-semibold text-brand-dark uppercase tracking-wider mb-4 border-b border-gray-100 pb-2">Incluye:</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {srv.includes.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                      <Check className="w-5 h-5 text-brand-teal shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link to="/reservar" className="inline-flex items-center gap-2 bg-brand-teal hover:bg-brand-dark-teal text-white px-6 py-3 rounded-full font-medium transition-colors w-full justify-center sm:w-auto">
                Agendar este servicio <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* FAQs */}
      <div className="bg-white py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12" data-reveal>
            <h2 className="text-3xl font-bold text-brand-dark-teal mb-4">Preguntas Frecuentes</h2>
          </div>
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <details key={i} data-reveal data-delay={String(i * 80)} className="group bg-[#FAFAFA] rounded-2xl [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 font-medium text-brand-dark">
                  <h3 className="font-semibold text-lg">{faq.q}</h3>
                  <span className="shrink-0 bg-white p-1.5 rounded-full shadow-sm group-open:-rotate-180 transition-transform">
                    <ChevronDown className="h-5 w-5 text-brand-orange" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-brand-muted leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

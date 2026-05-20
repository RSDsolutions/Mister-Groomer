import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import HeroBubbles from '../components/HeroBubbles';
import WordReveal from '../components/WordReveal';
import { IMG } from '../lib/images';
import { useReveal } from '../hooks/useReveal';

const POSTS = [
  { id: 1, title: '¿Cada cuánto tiempo debo bañar a mi perro?',              cat: 'Cuidado',  exc: 'La frecuencia ideal depende de la raza, tipo de pelo y estilo de vida. Te explicamos las reglas generales para no afectar su piel.',                  date: '15 Ene 2025', time: '5 min' },
  { id: 2, title: 'Señales de que tu gato necesita un baño medicado',         cat: 'Salud',    exc: 'Si notas rascado excesivo, enrojecimiento o caspa, tu felino podría necesitar atención especializada.',                                               date: '10 Ene 2025', time: '4 min' },
  { id: 3, title: 'Cómo elegir el shampoo correcto según la raza',            cat: 'Grooming', exc: 'No todos los productos son iguales. Descubre por qué el pH es vital para mantener un pelaje brillante.',                                              date: '05 Ene 2025', time: '6 min' },
  { id: 4, title: 'Cuidado de uñas: por qué es tan importante',               cat: 'Salud',    exc: 'Uñas muy largas pueden causar dolor al caminar y problemas articulares. Aprende a identificar cuándo es tiempo de un corte.',                          date: '28 Dic 2024', time: '3 min' },
  { id: 5, title: 'Diferencias entre el pelaje de un Schnauzer y un Golden',  cat: 'Cuidado',  exc: 'El stripping vs el deslanado. Entiende las necesidades únicas del manto de tu perro.',                                                               date: '20 Dic 2024', time: '7 min' },
  { id: 6, title: 'Preparar a tu cachorro para su primer baño profesional',   cat: 'Grooming', exc: 'Consejos para que su primera visita a la peluquería sea una experiencia positiva y libre de estrés.',                                                date: '15 Dic 2024', time: '4 min' },
];

const POST_IMAGES = [IMG.blog[1], IMG.blog[2], IMG.blog[3], IMG.blog[4], IMG.blog[5], IMG.blog[6]];

export default function Blog() {
  useReveal();

  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      {/* ═══ HERO ═══ */}
      <div className="hero-bg relative overflow-hidden pt-12 pb-28 px-4">
        <HeroBubbles />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <p className="hero-badge text-brand-light-teal/80 text-sm font-medium mb-3">
            <Link to="/" className="hover:text-white transition-colors">Home</Link> &nbsp;›&nbsp; Blog
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <WordReveal>Tips & Consejos</WordReveal>
          </h1>
          <p className="hero-subtitle text-brand-light-teal max-w-2xl mx-auto text-lg">
            Todo lo que necesitas saber para cuidar la salud y belleza de tu mascota.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Featured Post */}
        <Link
          to="/blog/post-1"
          data-reveal
          className="block mb-16 bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all border border-gray-100 group hover:-translate-y-1"
        >
          <div className="flex flex-col md:flex-row h-full">
            <div className="w-full md:w-1/2 lg:w-3/5 h-64 md:h-auto overflow-hidden bg-gradient-to-br from-brand-light-teal/40 to-brand-teal/20 flex flex-col items-center justify-center gap-3">
              <span className="text-6xl opacity-20 group-hover:scale-105 transition-transform duration-700">📷</span>
              <p className="text-xs text-brand-teal/50 font-medium uppercase tracking-widest">Tu foto destacada aquí</p>
            </div>
            <div className="w-full md:w-1/2 lg:w-2/5 p-8 md:p-12 flex flex-col justify-center">
              <span className="inline-block bg-brand-orange/10 text-brand-orange font-bold px-3 py-1 rounded-full text-xs uppercase tracking-widest w-max mb-4">
                Destacado
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-dark-teal mb-4 group-hover:text-brand-teal transition-colors">
                ¿Cada cuánto tiempo debo bañar a mi perro?
              </h2>
              <p className="text-brand-muted text-lg mb-8 line-clamp-3">
                Conoce los mitos y realidades sobre la frecuencia del baño canino. Un exceso de agua y jabón
                puede ser tan perjudicial como la falta de higiene.
              </p>
              <div className="flex items-center justify-between text-sm mt-auto">
                <div className="flex items-center gap-4 text-brand-muted font-medium">
                  <span>15 Ene 2025</span>
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 5 min read</span>
                </div>
                <div className="text-brand-orange font-bold flex items-center gap-1 group-hover:gap-2 transition-all bg-brand-orange/10 px-4 py-2 rounded-full">
                  Leer más <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </Link>

        {/* Posts Grid */}
        <div className="mb-6" data-reveal>
          <span className="text-brand-orange font-semibold text-sm uppercase tracking-widest">Más artículos</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {POSTS.map((post, i) => (
            <Link
              key={post.id}
              to="/blog/post-1"
              data-reveal
              data-delay={String(Math.min(i * 100, 500))}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col hover:-translate-y-2"
            >
              <div className="h-56 relative overflow-hidden bg-gradient-to-br from-brand-light-teal/40 to-brand-teal/20 flex flex-col items-center justify-center gap-2">
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-white/90 backdrop-blur-sm text-brand-dark-teal text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                    {post.cat}
                  </span>
                </div>
                <span className="text-4xl opacity-20 group-hover:scale-110 transition-transform duration-700">📷</span>
                <p className="text-xs text-brand-teal/50 font-medium uppercase tracking-widest">Tu foto aquí</p>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-brand-dark mb-3 line-clamp-2 group-hover:text-brand-teal transition-colors">
                  {post.title}
                </h3>
                <p className="text-brand-muted text-sm mb-6 line-clamp-2">{post.exc}</p>
                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-brand-muted">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 bg-brand-teal rounded-full text-white flex items-center justify-center font-bold text-sm">?</div>
                    <span className="font-semibold text-brand-dark-teal">Tu Nombre</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span>{post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.time}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

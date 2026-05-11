import { Link } from 'react-router-dom';
import HeroBubbles from '../components/HeroBubbles';
import WordReveal from '../components/WordReveal';
import { Award, Heart, CheckCircle2, ArrowRight } from 'lucide-react';
import { IMG } from '../lib/images';
import { useReveal } from '../hooks/useReveal';

export default function Nosotros() {
  useReveal();

  return (
    <div className="bg-white">
      {/* ═══ HERO ═══ */}
      <div className="hero-bg relative overflow-hidden pt-16 pb-28 px-4">
        <HeroBubbles />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <p className="hero-badge text-brand-light-teal/80 text-sm font-medium mb-3">
            <Link to="/" className="hover:text-white transition-colors">Home</Link> &nbsp;›&nbsp; Nosotros
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            <WordReveal>Nuestra Historia</WordReveal>
          </h1>
          <p className="hero-subtitle text-brand-light-teal max-w-2xl mx-auto text-lg sm:text-xl font-light">
            De las peluquerías Premium de Quito a tu barrio. Conoce la pasión detrás de Mr. Groomer.
          </p>
        </div>
      </div>

      {/* ═══ STORY ═══ */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div
            data-reveal="left"
            className="relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <img
              src={IMG.founder}
              alt="José Joaquín Toledo – Fundador y Head Groomer de Mr. Groomer"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-8">
              <p className="text-white font-bold text-xl">José Joaquín Toledo</p>
              <p className="text-brand-light-teal text-sm">Fundador &amp; Head Groomer</p>
            </div>
          </div>

          {/* Text */}
          <div data-reveal="right">
            <span className="text-brand-orange font-bold tracking-widest uppercase text-sm mb-2 block">
              Un Emprendimiento Familiar
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark-teal mb-6 leading-tight">
              Años de experiencia premium, ahora en el Valle de Los Chillos.
            </h2>
            <div className="space-y-4 text-brand-muted text-lg mb-8 leading-relaxed">
              <p>
                Mr. Groomer nace del corazón y la dedicación. Tras trabajar durante más de 9 años como estilista
                canino y felino en algunas de las peluquerías más prestigiosas y de nivel Premium en el norte de
                Quito, decidí emprender junto a mi familia.
              </p>
              <p>
                La idea era simple pero poderosa: traer ese mismo nivel de exigencia, técnica refinada y uso de
                productos de altísima gama, pero con un trato cercano y cálido, directo a nuestro propio sector
                en el Valle de Los Chillos.
              </p>
              <p>
                Creemos que el grooming no es solo estética; es salud, es prevención y es una demostración de
                amor. Cada mascota que entra a nuestro local se convierte en un miembro más de la familia Mr. Groomer.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-100">
              <div data-reveal data-delay="100" className="flex gap-4 items-center">
                <div className="bg-brand-light-teal p-3 rounded-xl text-brand-teal shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark text-2xl">9+</h4>
                  <p className="text-xs text-brand-muted uppercase font-semibold tracking-wider">Años Exp.</p>
                </div>
              </div>
              <div data-reveal data-delay="300" className="flex gap-4 items-center">
                <div className="bg-brand-orange/10 p-3 rounded-xl text-brand-orange shrink-0">
                  <Heart className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark text-2xl">100%</h4>
                  <p className="text-xs text-brand-muted uppercase font-semibold tracking-wider">Compromiso</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ VALUES & TIMELINE ═══ */}
      <div className="bg-[#FAFAFA] py-24 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4">

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            <div
              data-reveal
              data-delay="100"
              className="bg-brand-dark-teal rounded-3xl p-10 lg:p-12 text-white shadow-xl hover:-translate-y-2 transition-transform duration-300"
            >
              <h3 className="text-2xl font-bold bg-white/10 w-max px-4 py-1.5 rounded-full mb-6">Misión</h3>
              <p className="text-xl sm:text-2xl font-light leading-relaxed">
                "Mantener lindas, sanas y felices a las mascotas de nuestros clientes mediante servicios de
                estética animal de primer nivel, en un ambiente amigable y seguro."
              </p>
            </div>
            <div
              data-reveal
              data-delay="300"
              className="bg-brand-orange rounded-3xl p-10 lg:p-12 text-white shadow-xl hover:-translate-y-2 transition-transform duration-300"
            >
              <h3 className="text-2xl font-bold bg-white/20 w-max px-4 py-1.5 rounded-full mb-6 text-brand-dark-teal">Visión</h3>
              <p className="text-xl sm:text-2xl font-medium leading-relaxed text-brand-dark-teal">
                "Ser la peluquería canina y felina de referencia en el Valle de los Chillos, reconocidos por
                nuestra calidad Premium, técnica impecable y amor por los animales."
              </p>
            </div>
          </div>

          {/* Timeline heading */}
          <div className="text-center mb-16" data-reveal>
            <span className="inline-block text-brand-orange font-semibold text-sm uppercase tracking-widest mb-3">
              Nuestra trayectoria
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark-teal mb-4">El camino hasta hoy</h2>
            <p className="text-brand-muted max-w-2xl mx-auto">El recorrido que nos trajo hasta donde estamos.</p>
          </div>

          {/* Timeline */}
          <div className="max-w-3xl mx-auto relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-brand-light-teal">
            {[
              { year: '2015', title: 'El Inicio de la Pasión',       desc: 'Comienzo de formación profesional y trabajo en peluquerías locales de alto nivel.' },
              { year: '2018', title: 'Especialización Premium',       desc: 'Consolidación de técnicas modernas, tijeras japonesas y manejo avanzado de razas específicas en salones Premium al norte de la ciudad.' },
              { year: '2022', title: 'Concepción de la Idea',         desc: 'Nace la visión de crear un servicio independiente, familiar pero con estándares corporativos.' },
              { year: '2025', title: 'Nace Mr. Groomer 🎉',           desc: 'Apertura de nuestro primer local propio en el Valle de Los Chillos, brindando cercanía y excelencia a nuestro sector.' },
            ].map((step, i) => (
              <div
                key={i}
                data-reveal
                data-delay={String(i * 150)}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group mb-12 last:mb-0"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-brand-orange text-white text-xs font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow z-10">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-brand-teal/30 hover:shadow-md transition-all duration-300">
                  <span className="font-bold text-brand-orange text-xl block mb-1">{step.year}</span>
                  <h4 className="font-bold text-brand-dark-teal text-lg mb-2">{step.title}</h4>
                  <p className="text-brand-muted text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══ CTA ═══ */}
      <div className="py-24 text-center max-w-4xl mx-auto px-4" data-reveal="scale">
        <span className="inline-block text-brand-orange font-semibold text-sm uppercase tracking-widest mb-4">¡Únete!</span>
        <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark-teal mb-6">
          ¿Quieres ser parte de la familia Mr. Groomer?
        </h2>
        <p className="text-brand-muted mb-8 text-lg">Confía la estética de tu mejor amigo a manos expertas.</p>
        <Link
          to="/reservar"
          className="inline-flex items-center gap-2 bg-brand-teal hover:bg-brand-dark-teal text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
        >
          Agendar Cita Hoy <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}

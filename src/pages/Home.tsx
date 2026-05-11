import { Link } from 'react-router-dom';
import HeroBubbles from '../components/HeroBubbles';
import { ArrowRight, Star, Heart, CheckCircle2, Phone, MessageCircle } from 'lucide-react';
import { IMG } from '../lib/images';
import { useReveal } from '../hooks/useReveal';

export default function Home() {
  useReveal();

  return (
    <div>
      {/* ═══════════════════════════════════
          HERO
      ═══════════════════════════════════ */}
      <section className="hero-bg relative text-white overflow-hidden py-24 sm:py-36 pb-20 sm:pb-28">
        <HeroBubbles />

        {/* Wave divider at bottom → orange (marquee color) */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none z-10">
          <svg viewBox="0 0 1440 56" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full block">
            <path d="M0,28 C360,60 900,0 1440,32 L1440,56 L0,56 Z" fill="#F5A623" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="hero-badge inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Star className="w-4 h-4 text-brand-orange fill-brand-orange" />
                <span>Mantenemos Lindas, Sanas y Felices a sus Mascotas</span>
              </div>

              <div className="block lg:hidden mb-6 hero-image">
                <img
                  src={IMG.hero}
                  alt="Perros divirtiéndose en el baño en Mr. Groomer"
                  className="h-52 w-auto mx-auto object-contain drop-shadow-xl mix-blend-multiply"
                />
              </div>

              <h1 className="hero-title text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                El Estilista de <span className="text-brand-orange">Confianza</span> de tu Mascota
              </h1>
              <p className="hero-subtitle text-lg sm:text-xl text-brand-light-teal mb-8 max-w-2xl mx-auto lg:mx-0">
                Peluquería Canina y Felina en el Valle de Los Chillos por José Joaquín Toledo.
                Más de 9 años de experiencia nivel Premium de Quito, ahora en tu barrio.
              </p>
              <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/reservar"
                  className="bg-brand-orange hover:bg-brand-orange-dark text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2 relative"
                >
                  <span className="absolute inset-0 rounded-full bg-brand-orange animate-ping opacity-20 pointer-events-none" />
                  Agendar Cita
                </Link>
                <Link
                  to="/servicios"
                  className="bg-transparent border border-white hover:bg-white hover:text-brand-dark-teal text-white px-8 py-4 rounded-full font-semibold transition-all flex items-center justify-center gap-2"
                >
                  Ver Servicios
                </Link>
              </div>
            </div>

            <div className="hidden lg:flex relative h-[520px] items-end justify-center hero-image">
              <img
                src={IMG.hero}
                alt="Perros divirtiéndose en el baño en Mr. Groomer"
                className="h-full w-full object-contain drop-shadow-2xl relative z-10 mix-blend-multiply"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          MARQUEE
      ═══════════════════════════════════ */}
      <div className="bg-brand-orange overflow-hidden py-3 select-none">
        <div className="animate-marquee">
          <div className="flex items-center whitespace-nowrap px-8 text-white font-bold text-sm gap-6">
            <span>🐾 Mr. Groomer</span><span className="opacity-40 mx-1">✦</span>
            <span>🐕 Peluquería Canina &amp; Felina</span><span className="opacity-40 mx-1">✦</span>
            <span>⭐ 9+ Años de Experiencia Premium</span><span className="opacity-40 mx-1">✦</span>
            <span>🛁 Baño Profesional</span><span className="opacity-40 mx-1">✦</span>
            <span>📍 Valle de Los Chillos</span><span className="opacity-40 mx-1">✦</span>
            <span>💛 Tu Mascota lo Merece</span><span className="opacity-40 mx-1">✦</span>
            <span>🎀 Resultados que Enamoran</span><span className="opacity-40 mx-1">✦</span>
            <span>🐈 ¡También Atendemos Gatos!</span><span className="opacity-40 mx-1">✦</span>&nbsp;&nbsp;
          </div>
          <div className="flex items-center whitespace-nowrap px-8 text-white font-bold text-sm gap-6" aria-hidden="true">
            <span>🐾 Mr. Groomer</span><span className="opacity-40 mx-1">✦</span>
            <span>🐕 Peluquería Canina &amp; Felina</span><span className="opacity-40 mx-1">✦</span>
            <span>⭐ 9+ Años de Experiencia Premium</span><span className="opacity-40 mx-1">✦</span>
            <span>🛁 Baño Profesional</span><span className="opacity-40 mx-1">✦</span>
            <span>📍 Valle de Los Chillos</span><span className="opacity-40 mx-1">✦</span>
            <span>💛 Tu Mascota lo Merece</span><span className="opacity-40 mx-1">✦</span>
            <span>🎀 Resultados que Enamoran</span><span className="opacity-40 mx-1">✦</span>
            <span>🐈 ¡También Atendemos Gatos!</span><span className="opacity-40 mx-1">✦</span>&nbsp;&nbsp;
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════
          STATS
      ═══════════════════════════════════ */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 gap-y-4">
            <div
              data-reveal
              data-delay="100"
              className="bg-brand-orange/15 border border-brand-orange/25 text-brand-orange-dark px-6 py-3 rounded-full font-medium flex items-center gap-2 shadow-sm hover:-translate-y-1 transition-transform cursor-default"
            >
              <Star className="w-5 h-5 text-brand-orange fill-brand-orange/70" /> 9+ Años de Experiencia
            </div>
            <div
              data-reveal
              data-delay="250"
              className="bg-pink-50 border border-pink-200 text-pink-600 px-6 py-3 rounded-full font-medium flex items-center gap-2 shadow-sm hover:-translate-y-1 transition-transform cursor-default"
            >
              <Heart className="w-5 h-5 text-pink-500 fill-pink-300" /> Caninos &amp; Felinos
            </div>
            <div
              data-reveal
              data-delay="400"
              className="bg-emerald-50 border border-emerald-200 text-emerald-700 px-6 py-3 rounded-full font-medium flex items-center gap-2 shadow-sm hover:-translate-y-1 transition-transform cursor-default"
            >
              <CheckCircle2 className="w-5 h-5 text-emerald-500" /> Valle de Los Chillos
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          SERVICES PREVIEW
      ═══════════════════════════════════ */}
      <section className="py-24 bg-gradient-to-b from-white via-sky-50/40 to-brand-light-teal/20 relative overflow-hidden">
        {/* Decorative paws */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          <span className="absolute top-10 right-6 text-8xl opacity-[0.03] rotate-12">🐾</span>
          <span className="absolute bottom-10 left-6 text-8xl opacity-[0.03] -rotate-12">🐾</span>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16" data-reveal>
            <span className="inline-block text-brand-orange font-semibold text-sm uppercase tracking-widest mb-3">¿Qué ofrecemos?</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark-teal mb-4">Servicios Disponibles</h2>
            <p className="text-brand-muted max-w-2xl mx-auto">Tratamientos completos para la salud y belleza de tu mejor amigo.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8">
            {[
              { title: 'Servicio Completo', desc: 'Baño, corte, secado y más.', icon: '🛁' },
              { title: 'Baño Cosmético',    desc: 'Limpieza profunda y cepillado.',   icon: '✨' },
              { title: 'Baño Medicado',     desc: 'Para dermatitis y piel sensible.', icon: '💊' },
              { title: 'Corte de Uñas',     desc: 'Limado seguro y preciso.',         icon: '✂️' },
              { title: 'Paseos Caninos',    desc: 'Ejercicio y socialización.',        icon: '🦮' },
            ].map((srv, i) => (
              <div
                key={i}
                data-reveal
                data-delay={String(i * 120)}
                className="card-lift bg-white rounded-3xl p-8 shadow-sm border border-gray-100/80 group cursor-default"
              >
                <div className="text-4xl mb-5 bg-brand-light-teal w-20 h-20 rounded-2xl flex items-center justify-center group-hover:scale-125 group-hover:-rotate-12 transition-all duration-300 shadow-sm">
                  {srv.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-brand-dark">{srv.title}</h3>
                <p className="text-brand-muted mb-6 text-sm leading-relaxed">{srv.desc}</p>
                <Link to="/servicios" className="text-brand-orange font-semibold flex items-center gap-1 group-hover:gap-3 transition-all">
                  Ver más <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wave: light→white */}
      <div className="relative bg-white -mt-1">
        <svg viewBox="0 0 1440 48" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full block" style={{ marginTop: '-1px' }}>
          <path d="M0,0 C480,48 960,0 1440,24 L1440,0 Z" fill="#D6EDF7" fillOpacity="0.2" />
        </svg>
      </div>

      {/* ═══════════════════════════════════
          ABOUT TEASER
      ═══════════════════════════════════ */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image – slides in from left */}
            <div
              data-reveal="left"
              className="order-2 lg:order-1 h-[400px] lg:h-[580px] w-full rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src={IMG.aboutTeaser}
                alt="José Joaquín Toledo trabajando con una mascota en Mr. Groomer"
                className="h-full w-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>

            {/* Text – slides in from right */}
            <div className="order-1 lg:order-2" data-reveal="right">
              <span className="inline-block text-brand-orange font-semibold text-sm uppercase tracking-widest mb-3">Nuestra historia</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark-teal mb-6">
                Un emprendimiento familiar con corazón
              </h2>
              <p className="text-brand-muted text-lg mb-8 leading-relaxed">
                Mr. Groomer nace del deseo de brindar un servicio de excelencia, cuidando cada detalle
                para que tu mascota viva una experiencia sin estrés y con resultados profesionales.
              </p>

              <ul className="space-y-4 mb-8">
                {['Experiencia Premium', 'Trato personalizado', 'Resultados que enamoran'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-brand-dark font-medium">
                    <CheckCircle2 className="text-brand-orange w-6 h-6 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                to="/nosotros"
                className="inline-flex items-center gap-2 bg-brand-teal hover:bg-brand-dark-teal text-white px-8 py-4 rounded-full font-medium transition-all shadow-md hover:shadow-lg hover:-translate-y-1"
              >
                Conoce nuestra historia <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          GALLERY TEASER
      ═══════════════════════════════════ */}
      <section className="py-24 bg-brand-light-teal overflow-hidden relative">
        {/* Decorative circles */}
        <div className="absolute top-6 left-4 w-32 h-32 rounded-full bg-brand-teal/10 blur-2xl pointer-events-none" />
        <div className="absolute bottom-6 right-4 w-48 h-48 rounded-full bg-brand-orange/10 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-between items-end mb-12" data-reveal>
            <div>
              <span className="inline-block text-brand-teal font-semibold text-sm uppercase tracking-widest mb-2">Galería</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark-teal mb-3">Resultados que enamoran</h2>
              <p className="text-brand-teal max-w-xl">El antes y después de nuestros peluditos clientes.</p>
            </div>
            <Link
              to="/galeria"
              className="hidden sm:inline-flex items-center gap-2 text-brand-orange font-semibold hover:text-brand-orange-dark transition-colors hover:gap-3"
            >
              Ver galería completa <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="flex overflow-x-auto gap-6 sm:gap-8 pb-8 snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0">
            {IMG.galleryTeaser.map((src, i) => (
              <div
                key={i}
                data-reveal
                data-delay={String(i * 150)}
                className="min-w-[280px] w-[78vw] sm:w-[380px] shrink-0 snap-center"
              >
                <div className="bg-white rounded-3xl p-4 shadow-md h-72 sm:h-80 overflow-hidden hover:-translate-y-2 transition-transform duration-300">
                  <img
                    src={src}
                    alt={`Resultado de grooming ${i + 1} en Mr. Groomer`}
                    className="h-full w-full object-cover rounded-2xl hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center sm:hidden">
            <Link to="/galeria" className="inline-flex items-center gap-2 text-brand-orange font-semibold hover:text-brand-orange-dark transition-colors">
              Ver galería completa <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          BLOG TEASER
      ═══════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-reveal>
            <span className="inline-block text-brand-orange font-semibold text-sm uppercase tracking-widest mb-3">Blog</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark-teal mb-4">Tips de Cuidado</h2>
            <p className="text-brand-muted max-w-2xl mx-auto">Consejos profesionales para mantener a tu mascota sana entre citas.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { img: IMG.blog[1], title: 'Señales de que tu gato necesita un baño medicado',         date: '10 Ene 2025' },
              { img: IMG.blog[2], title: 'Cómo elegir el shampoo correcto según la raza',            date: '05 Ene 2025' },
              { img: IMG.blog[5], title: 'Preparar a tu cachorro para su primer baño profesional',   date: '15 Dic 2024' },
            ].map((post, i) => (
              <div
                key={i}
                data-reveal
                data-delay={String(i * 150)}
                className="bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group flex flex-col"
              >
                <div className="h-52 relative overflow-hidden">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-600"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <span className="text-xs font-semibold text-brand-orange uppercase tracking-wider mb-2">Cuidado</span>
                  <h3 className="text-lg font-bold text-brand-dark mb-3 line-clamp-2 group-hover:text-brand-teal transition-colors">{post.title}</h3>
                  <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center text-sm">
                    <span className="text-brand-muted">{post.date}</span>
                    <Link to="/blog/post-1" className="font-semibold text-brand-teal hover:text-brand-dark-teal transition-colors flex items-center gap-1 group-hover:gap-2">
                      Leer más <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center" data-reveal>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-brand-teal border-2 border-brand-teal hover:bg-brand-teal hover:text-white px-8 py-3 rounded-full font-semibold transition-all hover:gap-3"
            >
              Ver todos los tips <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          CTA BANNER
      ═══════════════════════════════════ */}
      <section className="bg-brand-dark-teal py-24 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          <span className="absolute top-6 left-8  text-6xl opacity-[0.07] animate-bounce" style={{ animationDelay: '0.3s' }}>🐕</span>
          <span className="absolute bottom-6 right-8 text-6xl opacity-[0.07] animate-bounce" style={{ animationDelay: '0.9s' }}>🐈</span>
          <span className="absolute top-1/2 left-4  -translate-y-1/2 text-[10rem] opacity-[0.03] select-none">🐾</span>
          <span className="absolute top-1/2 right-4 -translate-y-1/2 text-[10rem] opacity-[0.03] select-none">🐾</span>
          {/* Glowing circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-teal/10 blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div data-reveal="scale">
            <span className="inline-block text-brand-orange font-semibold text-sm uppercase tracking-widest mb-4">¡Agenda hoy!</span>
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4 leading-tight">
              ¿Listo para darle lo mejor a tu mascota?
              <span className="inline-block ml-3 animate-bounce">🐾</span>
            </h2>
            <p className="text-brand-light-teal text-lg mb-10 max-w-xl mx-auto">
              Contáctanos ahora mismo y agenda la cita de tu mejor amigo.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center" data-reveal data-delay="200">
            <a
              href="https://wa.me/593978751586"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto bg-brand-orange hover:bg-brand-orange-dark text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-3 relative"
            >
              <span className="absolute inset-0 rounded-full bg-brand-orange animate-ping opacity-20 pointer-events-none" />
              <MessageCircle className="w-6 h-6" /> WhatsApp
            </a>
            <a
              href="tel:+593998937473"
              className="w-full sm:w-auto bg-white hover:bg-gray-100 text-brand-dark-teal px-10 py-4 rounded-full font-bold text-lg transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-3"
            >
              <Phone className="w-6 h-6" /> Llamar
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

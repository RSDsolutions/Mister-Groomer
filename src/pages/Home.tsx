import { Link } from 'react-router-dom';
import HeroBubbles from '../components/HeroBubbles';
import { ArrowRight, Star, Heart, CheckCircle2, Phone, MessageCircle } from 'lucide-react';
import { IMG } from '../lib/images';

export default function Home() {
  return (
    <div className="animate-in fade-in duration-500">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1d3a4f] via-brand-dark-teal to-brand-teal text-white overflow-hidden py-24 sm:py-32">
        <HeroBubbles />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Star className="w-4 h-4 text-brand-orange fill-brand-orange" />
                <span>Mantenemos Lindas, Sanas y Felices a sus Mascotas</span>
              </div>
              <div className="block lg:hidden mb-4">
                <img
                  src={IMG.hero}
                  alt="Perros divirtiéndose en el baño en Mr. Groomer"
                  className="h-48 w-auto mx-auto object-contain drop-shadow-xl mix-blend-multiply"
                />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                El Estilista de <span className="text-brand-orange">Confianza</span> de tu Mascota
              </h1>
              <p className="text-lg sm:text-xl text-brand-light-teal mb-8 max-w-2xl mx-auto lg:mx-0">
                Peluquería Canina y Felina en el Valle de Los Chillos por José Joaquín Toledo.
                Más de 9 años de experiencia nivel Premium de Quito, ahora en tu barrio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/reservar" className="bg-brand-orange hover:bg-brand-orange-dark text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2">
                  Agendar Cita
                </Link>
                <Link to="/servicios" className="bg-transparent border border-white hover:bg-white hover:text-brand-dark-teal text-white px-8 py-4 rounded-full font-semibold transition-all flex items-center justify-center gap-2">
                  Ver Servicios
                </Link>
              </div>
            </div>
            <div className="hidden lg:flex relative h-[520px] items-end justify-center">
              <img
                src={IMG.hero}
                alt="Perros divirtiéndose en el baño en Mr. Groomer"
                className="h-full w-full object-contain drop-shadow-2xl relative z-10 mix-blend-multiply"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 gap-y-4">
            <div className="bg-brand-light-teal text-brand-dark-teal px-6 py-3 rounded-full font-medium flex items-center gap-2 shadow-sm">
              <Star className="w-5 h-5 text-brand-teal" /> 9+ Años de Experiencia
            </div>
            <div className="bg-brand-light-teal text-brand-dark-teal px-6 py-3 rounded-full font-medium flex items-center gap-2 shadow-sm">
              <Heart className="w-5 h-5 text-brand-teal" /> Caninos & Felinos
            </div>
            <div className="bg-brand-light-teal text-brand-dark-teal px-6 py-3 rounded-full font-medium flex items-center gap-2 shadow-sm">
              <CheckCircle2 className="w-5 h-5 text-brand-teal" /> Valle de Los Chillos
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark-teal mb-4">Servicios Disponibles</h2>
            <p className="text-brand-muted max-w-2xl mx-auto">Tratamientos completos para la salud y belleza de tu mejor amigo.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {[
              { title: 'Servicio Completo', desc: 'Baño, corte, secado y más.', icon: '🛁' },
              { title: 'Baño Cosmético', desc: 'Limpieza profunda y cepillado.', icon: '✨' },
              { title: 'Baño Medicado', desc: 'Para dermatitis y piel sensible.', icon: '💊' },
              { title: 'Corte de Uñas', desc: 'Limado seguro.', icon: '✂️' },
              { title: 'Paseos Caninos', desc: 'Ejercicio y socialización supervisada.', icon: '🦮' },
            ].map((srv, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-all hover:-translate-y-2 group">
                <div className="text-4xl mb-4 bg-brand-light-teal w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">{srv.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-brand-dark">{srv.title}</h3>
                <p className="text-brand-muted mb-6 text-sm">{srv.desc}</p>
                <Link to="/servicios" className="text-brand-orange font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                  Ver más <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 h-[400px] lg:h-[600px] w-full rounded-3xl overflow-hidden shadow-lg">
              <img
                src={IMG.aboutTeaser}
                alt="José Joaquín Toledo trabajando con una mascota en Mr. Groomer"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark-teal mb-6">Un emprendimiento familiar con corazón</h2>
              <p className="text-brand-muted text-lg mb-8">
                Mr. Groomer nace del deseo de brindar un servicio de excelencia, cuidando cada detalle para que tu mascota viva una experiencia sin estrés y con resultados profesionales.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  'Experiencia Premium',
                  'Trato personalizado',
                  'Resultados que enamoran',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-brand-dark font-medium">
                    <CheckCircle2 className="text-brand-orange w-6 h-6 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link to="/nosotros" className="inline-flex items-center gap-2 bg-brand-teal hover:bg-brand-dark-teal text-white px-8 py-4 rounded-full font-medium transition-colors shadow-md">
                Conoce nuestra historia
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Teaser */}
      <section className="py-24 bg-brand-light-teal overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark-teal mb-4">Resultados que enamoran</h2>
              <p className="text-brand-teal max-w-xl">El antes y después de nuestros peluditos clientes.</p>
            </div>
            <Link to="/galeria" className="hidden sm:inline-flex items-center gap-2 text-brand-orange font-semibold hover:text-brand-orange-dark transition-colors">
              Ver galería completa <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="flex overflow-x-auto gap-6 sm:gap-8 pb-8 snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0">
            {IMG.galleryTeaser.map((src, i) => (
              <div key={i} className="min-w-[300px] w-[80vw] sm:w-[400px] shrink-0 snap-center">
                <div className="bg-white rounded-3xl p-4 shadow-sm h-72 sm:h-80 overflow-hidden">
                  <img
                    src={src}
                    alt={`Resultado de grooming ${i + 1} en Mr. Groomer`}
                    className="h-full w-full object-cover rounded-2xl hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link to="/galeria" className="inline-flex items-center gap-2 text-brand-orange font-semibold hover:text-brand-orange-dark transition-colors">
              Ver galería completa <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Teaser */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark-teal mb-4">Tips de Cuidado</h2>
            <p className="text-brand-muted max-w-2xl mx-auto">Consejos profesionales para mantener a tu mascota sana entre citas.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { img: IMG.blog[1], title: 'Señales de que tu gato necesita un baño medicado', date: '10 Ene 2025' },
              { img: IMG.blog[2], title: 'Cómo elegir el shampoo correcto según la raza', date: '05 Ene 2025' },
              { img: IMG.blog[5], title: 'Preparar a tu cachorro para su primer baño profesional', date: '15 Dic 2024' },
            ].map((post, i) => (
              <div key={i} className="bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow group flex flex-col">
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <span className="text-xs font-semibold text-brand-orange uppercase tracking-wider mb-2">Cuidado</span>
                  <h3 className="text-lg font-bold text-brand-dark mb-3 line-clamp-2">{post.title}</h3>
                  <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center text-sm">
                    <span className="text-brand-muted">{post.date}</span>
                    <Link to="/blog/post-1" className="font-semibold text-brand-teal hover:text-brand-dark-teal transition-colors">Leer más</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/blog" className="inline-flex items-center gap-2 text-brand-teal border-2 border-brand-teal hover:bg-brand-teal hover:text-white px-8 py-3 rounded-full font-semibold transition-all">
              Ver todos los tips
            </Link>
          </div>
        </div>
      </section>

      {/* Booking CTA Banner */}
      <section className="bg-brand-dark-teal py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-8 leading-tight">
            ¿Listo para darle lo mejor a tu mascota?
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="https://wa.me/593978751586" target="_blank" rel="noreferrer" className="w-full sm:w-auto bg-brand-orange hover:bg-brand-orange-dark text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-3">
              <MessageCircle className="w-6 h-6" /> WhatsApp
            </a>
            <a href="tel:+593998937473" className="w-full sm:w-auto bg-white hover:bg-gray-100 text-brand-dark-teal px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-3">
              <Phone className="w-6 h-6" /> Llamar
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

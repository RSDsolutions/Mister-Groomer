import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, MoveRight } from 'lucide-react';
import { IMG } from '../lib/images';
import { useReveal } from '../hooks/useReveal';

export default function BlogPost() {
  useReveal();

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Article Header */}
      <div className="max-w-4xl mx-auto px-4 pt-12 pb-8">
        <Link
          to="/blog"
          data-reveal
          className="inline-flex items-center gap-2 text-brand-muted hover:text-brand-teal transition-colors text-sm font-medium mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Volver al Blog
        </Link>

        <div className="mb-4" data-reveal>
          <span className="bg-brand-orange/10 text-brand-orange font-bold px-3 py-1 rounded-full text-xs uppercase tracking-widest">
            Cuidado
          </span>
        </div>

        <h1
          data-reveal
          className="text-4xl md:text-5xl font-bold text-brand-dark-teal mb-6 leading-tight"
        >
          ¿Cada cuánto tiempo debo bañar a mi perro?
        </h1>

        <div className="flex flex-wrap items-center gap-6 text-brand-muted text-sm border-y border-gray-100 py-4 mb-8" data-reveal>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-brand-teal rounded-full text-white flex items-center justify-center font-bold text-lg">J</div>
            <div>
              <p className="font-bold text-brand-dark-teal">José Joaquín Toledo</p>
              <p className="text-xs">Groomer Profesional</p>
            </div>
          </div>
          <div className="flex items-center gap-4 border-l border-gray-200 pl-6 h-10">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> 15 Ene 2025</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> 5 min de lectura</span>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="max-w-5xl mx-auto px-4 mb-12" data-reveal>
        <div className="aspect-[21/9] rounded-3xl overflow-hidden shadow-lg border border-gray-100">
          <img
            src={IMG.blog[0]}
            alt="Perro siendo bañado – frecuencia ideal de baño"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-12">
        {/* Article Body */}
        <article
          data-reveal="left"
          className="lg:w-2/3 prose prose-lg prose-teal prose-p:text-brand-muted prose-headings:text-brand-dark-teal max-w-none"
        >
          <p className="lead text-xl text-brand-dark-teal font-medium">
            Una de las preguntas más frecuentes que recibo en Mr. Groomer es sobre la frecuencia ideal
            para bañar a las mascotas. La respuesta rápida es: depende. Pero aquí te explicaré las reglas
            fundamentales.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">El mito del baño semanal</h2>
          <p className="mb-6">
            Muchos dueños creen que bañar a su perro cada semana es lo correcto, pero esto puede ser
            contraproducente. Bañar demasiado frecuentemente elimina los aceites naturales de la piel,
            causando resequedad e irritación. El pelaje de cada raza tiene necesidades distintas y es
            importante respetarlas.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Factores a considerar</h2>
          <ul className="space-y-3 mb-6 list-disc pl-5">
            <li><strong>Tipo de pelaje:</strong> Los perros de pelo corto pueden espaciar más sus baños, mientras que los de pelo largo requieren mantenimiento constante para evitar nudos.</li>
            <li><strong>Estilo de vida:</strong> Un perro de departamento que solo pasea por la acera se ensuciará menos que uno que va al parque todos los días.</li>
            <li><strong>Salud de la piel:</strong> Si padece alergias, el veterinario podría recomendar baños medicados semanales.</li>
          </ul>

          <div className="bg-brand-light-teal p-6 rounded-2xl border-l-4 border-brand-orange my-8 text-brand-dark-teal">
            <strong className="block text-lg mb-2">💡 El Tip de Mr. Groomer:</strong>
            El cepillado diario es mucho más importante que el baño frecuente.
            Un buen cepillado remueve polvo, pelo muerto y distribuye los aceites naturales de la piel.
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">Conclusión</h2>
          <p className="mb-6">
            Como regla general, un perro sano con piel normal debería bañarse cada 3 a 4 semanas.
            Usar el shampoo correcto es vital para no alterar su pH. En Mr. Groomer utilizamos opciones
            cosméticas ideales para cada manto.
          </p>
        </article>

        {/* Sidebar */}
        <aside className="lg:w-1/3 space-y-8" data-reveal="right">
          <div className="bg-brand-dark-teal rounded-3xl p-8 text-center text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-4">¿Tienes dudas?</h3>
            <p className="text-brand-light-teal text-sm mb-6">
              Agenda una cita y evaluaremos el tipo de pelaje de tu mascota para recomendarte la mejor rutina.
            </p>
            <Link
              to="/reservar"
              className="inline-block bg-brand-orange hover:bg-brand-orange-dark text-white font-bold py-3 px-6 rounded-full w-full transition-all hover:-translate-y-0.5 shadow-lg"
            >
              Agendar Cita Ahora
            </Link>
          </div>

          <div>
            <h3 className="text-xl font-bold text-brand-dark-teal mb-6 flex items-center gap-2">
              Artículos Relacionados <MoveRight className="w-5 h-5 text-brand-orange" />
            </h3>
            <div className="space-y-4">
              {[
                { img: IMG.blog[1], title: 'Señales de que tu gato necesita un baño medicado' },
                { img: IMG.blog[2], title: 'Cómo elegir el shampoo correcto según la raza' },
              ].map((item, i) => (
                <Link
                  key={i}
                  to="/blog/post-1"
                  className="flex gap-4 group hover:-translate-y-0.5 transition-transform duration-200"
                >
                  <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark group-hover:text-brand-teal transition-colors text-sm line-clamp-2 mb-1">
                      {item.title}
                    </h4>
                    <span className="text-xs text-brand-muted font-medium">Hace 3 días</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

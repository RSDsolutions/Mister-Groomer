import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import PlaceholderImage from '../components/PlaceholderImage';

const PRODUCTS = [
  { id: 1, name: 'Shampoo Hipoalergénico Premium', desc: 'Ideal para razas con piel sensible.', price: '$15.00' },
  { id: 2, name: 'Acondicionador Desenredante', desc: 'Facilita el cepillado diario en pelo largo.', price: '$12.00' },
  { id: 3, name: 'Perfume Cologne Frescura', desc: 'El mismo aroma que usamos en el spa.', price: '$10.00' },
  { id: 4, name: 'Limpiador de Oídos Natural', desc: 'Prevención de otitis sin irritar.', price: '$8.50' },
  { id: 5, name: 'Cepillo Carda Profesional', desc: 'Extrae pelo muerto sin rasguñar.', price: '$14.00' },
  { id: 6, name: 'Cortaúñas de Seguridad', desc: 'Tope metálico para evitar cortes profundos.', price: '$9.00' },
];

export default function Tienda() {
  return (
    <div className="animate-in fade-in duration-500 bg-[#FAFAFA] min-h-screen">
      <div className="bg-brand-teal pt-12 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-brand-light-teal/80 text-sm font-medium mb-3">
            <Link to="/" className="hover:text-white transition-colors">Home</Link> &nbsp;›&nbsp; Tienda
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            Tienda Mr. Groomer
          </h1>
          <p className="text-brand-light-teal max-w-2xl mx-auto text-lg">
            Mantén los resultados de la peluquería en casa con los productos que usamos y recomendamos.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 -mt-8 relative z-10">
        
        {/* Coming Soon Banner */}
        <div className="bg-brand-dark-teal text-white rounded-3xl p-8 sm:p-12 text-center shadow-xl mb-16 relative overflow-hidden">
          <div className="absolute -right-8 -bottom-8 opacity-10">
            <ShoppingBag className="w-64 h-64" />
          </div>
          <div className="relative z-10">
            <span className="inline-block bg-brand-orange text-white font-bold px-4 py-1 rounded-full text-sm uppercase tracking-widest mb-6">
              ¡Próximamente!
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold mb-4">La tienda online está en construcción</h2>
            <p className="text-lg text-brand-light-teal max-w-2xl mx-auto mb-8">
              Muy pronto podrás comprar directamente por la web. Por ahora, consulta disponibilidad y precios de nuestros productos exclusivos a través de WhatsApp.
            </p>
            <a 
              href="https://wa.me/593978751586?text=Hola,%20quisiera%20consultar%20sobre%20los%20productos%20que%20tienen%20a%20la%20venta." 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-brand-teal hover:bg-[#15825f] text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:-translate-y-1"
            >
              Consultar por WhatsApp <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Product Grid */}
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold text-brand-dark-teal">Catálogo de Productos</h3>
          <p className="text-brand-muted mt-2">Un adelanto de lo que podrás encontrar</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col group p-2">
              <div className="h-64 rounded-2xl overflow-hidden bg-gray-50 flex items-center justify-center relative">
                <PlaceholderImage theme="light-teal" className="w-[80%] h-[80%] object-contain group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-100 to-transparent opacity-50"></div>
              </div>
              <div className="p-6 flex-grow flex flex-col text-center">
                <h4 className="text-xl font-bold text-brand-dark mb-2">{product.name}</h4>
                <p className="text-brand-muted text-sm mb-6 flex-grow">{product.desc}</p>
                <p className="text-2xl font-extrabold text-brand-orange mb-6">{product.price}</p>
                
                <a 
                  href={`https://wa.me/593978751586?text=Hola,%20me%20interesa%20el%20producto:%20${encodeURIComponent(product.name)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-brand-light-teal text-brand-dark-teal hover:bg-brand-teal hover:text-white font-semibold py-3 rounded-xl transition-colors border border-brand-teal/20 hover:border-brand-teal mt-auto"
                >
                  Consultar compra
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

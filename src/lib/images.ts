const CDN = 'https://images.unsplash.com/photo-';
const OPT = '?auto=format&fit=crop&q=80';

const u = (id: string, w = 800) => `${CDN}${id}${OPT}&w=${w}`;

export const IMG = {
  logo: '/images/logo.svg',
  logoHorizontal: '/images/logo-horizontal.svg',

  // Hero principal
  hero: u('1587300003388-59208cc962cb', 1200),

  // Sección About / Home teaser
  aboutTeaser: u('1601758124510-52d02ddb7cbd', 900),

  // Fundador / Nosotros
  founder: u('1583337130417-3346a1be7dee', 900),

  // Galería — 12 resultados de cortes
  gallery: [
    { src: u('1587300003388-59208cc962cb', 600), breed: 'Pomeranian', service: 'Servicio Completo', type: 'Perros' },
    { src: u('1543466835-00a7907e9de1',   600), breed: 'Cachorro Mix',      service: 'Baño Cosmético',      type: 'Perros' },
    { src: u('1518717758536-85ae29035b6d', 600), breed: 'Golden Retriever',  service: 'Deslanado',           type: 'Golden' },
    { src: u('1560807707-8cc77767d783',   600), breed: 'Labrador',          service: 'Baño Medicado',       type: 'Perros' },
    { src: u('1601758124510-52d02ddb7cbd', 600), breed: 'Schnauzer',         service: 'Corte Especializado', type: 'Schnauzer' },
    { src: u('1514888286974-6c03e2ca1dba', 600), breed: 'Gato Persa',        service: 'Baño Felino',         type: 'Gatos' },
    { src: u('1574158622682-e719686a4bf8', 600), breed: 'Gato Angora',       service: 'Servicio Completo',   type: 'Gatos' },
    { src: u('1513360371669-4adf3dd7dff8', 600), breed: 'Gato Doméstico',    service: 'Baño Cosmético',      type: 'Gatos' },
    { src: u('1583337130417-3346a1be7dee', 600), breed: 'Poodle',            service: 'Corte Poodle',        type: 'Poodle' },
    { src: u('1589941013453-7a734c1a0208', 600), breed: 'Yorkshire',         service: 'Servicio Completo',   type: 'Otros' },
    { src: u('1552053831-71594a27632d',   600), breed: 'Golden Retriever',  service: 'Baño y Peinado',      type: 'Golden' },
    { src: u('1548199973-03cce0bbc87b',   600), breed: 'Mix Mediano',        service: 'Servicio Completo',   type: 'Otros' },
  ],

  // Antes & Después — 3 pares
  beforeAfter: [
    {
      before:  u('1560807707-8cc77767d783',   700),
      after:   u('1587300003388-59208cc962cb', 700),
      name:    'Max (Schnauzer)',
      service: 'Corte Especializado',
    },
    {
      before:  u('1548199973-03cce0bbc87b',   700),
      after:   u('1518717758536-85ae29035b6d', 700),
      name:    'Luna (Poodle)',
      service: 'Baño y Deslanado',
    },
    {
      before:  u('1513360371669-4adf3dd7dff8', 700),
      after:   u('1514888286974-6c03e2ca1dba', 700),
      name:    'Simba (Gato)',
      service: 'Baño Felino',
    },
  ],

  // Carrusel horizontal en Home (3 imágenes)
  galleryTeaser: [
    u('1587300003388-59208cc962cb', 600),
    u('1518717758536-85ae29035b6d', 600),
    u('1514888286974-6c03e2ca1dba', 600),
  ],

  // Blog — índice 0 = destacado, 1-6 = posts del grid
  blog: [
    u('1589941013453-7a734c1a0208', 1000), // destacado: frecuencia de baño
    u('1513360371669-4adf3dd7dff8', 700),  // gato baño medicado
    u('1560807707-8cc77767d783',   700),   // elección de shampoo
    u('1587300003388-59208cc962cb', 700),   // cuidado de uñas
    u('1518717758536-85ae29035b6d', 700),   // Schnauzer vs Golden
    u('1543466835-00a7907e9de1',   700),   // primer baño cachorro
    u('1601758124510-52d02ddb7cbd', 700),   // extra / sidebar
  ],

  // Tienda — 6 productos de grooming
  products: [
    u('1548199973-03cce0bbc87b',   500),  // shampoo hipoalergénico
    u('1518717758536-85ae29035b6d', 500), // acondicionador
    u('1587300003388-59208cc962cb', 500), // colonia / perfume
    u('1514888286974-6c03e2ca1dba', 500), // limpiador de oídos
    u('1543466835-00a7907e9de1',   500),  // cepillo carda
    u('1560807707-8cc77767d783',   500),  // cortaúñas
  ],
};

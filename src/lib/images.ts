// Todas las rutas apuntan a archivos locales en public/images/
// Las fotos 01-16 son resultados reales del salón Mr. Groomer

export const IMG = {
  logo:           '/images/Logo-MG.png',
  logoHorizontal: '/images/logo-horizontal.svg',
  logoPaw:        '/images/logo.svg',

  // Hero principal — ilustración cartoon perros en bañera
  hero: '/images/hero-dogs.jpg',

  // About teaser Home — groomer en acción (foto 14)
  aboutTeaser: '/images/grooming-14.jpg',

  // Nosotros / Fundador — groomer trabajando (foto 14)
  founder: '/images/grooming-14.jpg',

  // ── Galería — 15 fotos reales del salón ───────────────────────────────────
  gallery: [
    { src: '/images/grooming-01.jpg', breed: 'Pomeranian',             service: 'Servicio Completo',    type: 'Perros'    },
    { src: '/images/grooming-02.jpg', breed: 'Bernedoodle',            service: 'Corte Especializado',  type: 'Perros'    },
    { src: '/images/grooming-03.jpg', breed: 'Lhasa Apso',             service: 'Servicio Completo',    type: 'Perros'    },
    { src: '/images/grooming-04.jpg', breed: 'Maltés',                 service: 'Baño Cosmético',       type: 'Perros'    },
    { src: '/images/grooming-05.jpg', breed: 'Goldendoodle',           service: 'Servicio Completo',    type: 'Perros'    },
    { src: '/images/grooming-06.jpg', breed: 'Rough Collie',           service: 'Baño y Cepillado',     type: 'Perros'    },
    { src: '/images/grooming-07.jpg', breed: 'Husky Siberiano',        service: 'Deslanado',            type: 'Perros'    },
    { src: '/images/grooming-08.jpg', breed: 'Shih Tzu',               service: 'Corte Especializado',  type: 'Otros'     },
    { src: '/images/grooming-09.jpg', breed: 'Schnauzer',              service: 'Corte Schnauzer',      type: 'Schnauzer' },
    { src: '/images/grooming-10.jpg', breed: 'Maltés',                 service: 'Servicio Completo',    type: 'Perros'    },
    { src: '/images/grooming-11.jpg', breed: 'Bichón Frisé',           service: 'Corte Poodle',         type: 'Poodle'    },
    { src: '/images/grooming-12.jpg', breed: 'Poodle Canela',          service: 'Corte Poodle',         type: 'Poodle'    },
    { src: '/images/grooming-13.jpg', breed: 'Lhasa Apso',             service: 'Baño Cosmético',       type: 'Perros'    },
    { src: '/images/grooming-15.jpg', breed: 'West Highland Terrier',  service: 'Servicio Completo',    type: 'Perros'    },
    { src: '/images/grooming-16.jpg', breed: 'Gato Ruso Azul',         service: 'Baño Felino',          type: 'Gatos'     },
  ],

  // ── Antes & Después — 3 pares usando fotos del salón ────────────────────
  beforeAfter: [
    { before: '/images/grooming-06.jpg', after: '/images/grooming-09.jpg', name: 'Schnauzer',       service: 'Corte Especializado' },
    { before: '/images/grooming-08.jpg', after: '/images/grooming-03.jpg', name: 'Lhasa Apso',      service: 'Baño y Corte'        },
    { before: '/images/grooming-13.jpg', after: '/images/grooming-11.jpg', name: 'Bichón Frisé',    service: 'Corte Completo'      },
  ],

  // ── Carrusel horizontal en Home (3 fotos) ──────────────────────────────
  galleryTeaser: [
    '/images/grooming-01.jpg',
    '/images/grooming-12.jpg',
    '/images/grooming-16.jpg',
  ],

  // ── Blog — índice 0 = destacado, 1-6 = posts del grid ─────────────────
  blog: [
    '/images/grooming-05.jpg',  // destacado: frecuencia de baño
    '/images/grooming-16.jpg',  // baño medicado felinos
    '/images/grooming-09.jpg',  // elección de shampoo (Schnauzer)
    '/images/grooming-01.jpg',  // cuidado de uñas (Pomeranian)
    '/images/grooming-07.jpg',  // Schnauzer vs Golden (Husky)
    '/images/grooming-04.jpg',  // primer baño cachorro (Maltés)
    '/images/grooming-02.jpg',  // artículo relacionado sidebar
  ],

  // ── Tienda — 6 productos con foto referencial ──────────────────────────
  products: [
    '/images/grooming-01.jpg',  // shampoo hipoalergénico
    '/images/grooming-03.jpg',  // acondicionador
    '/images/grooming-05.jpg',  // colonia
    '/images/grooming-16.jpg',  // limpiador de oídos
    '/images/grooming-09.jpg',  // cepillo carda
    '/images/grooming-11.jpg',  // cortaúñas
  ],
};

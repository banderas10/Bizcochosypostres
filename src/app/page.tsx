'use client';

import { useState, useEffect } from 'react';

// ============================================
// PRODUCTOS - TIENDA DE BIZCOCHOS Y POSTRES
// ============================================
const productos = [
  {
    id: 1,
    nombre: 'Bizcocho Bundt Clásico',
    precio: 18.50,
    imagen: '/products/bizcocho-bundt-clasico.jpg',
    descripcion: 'Bizcocho esponjoso tradicional con forma de anillo',
    categoria: 'Bizcochos',
    destacado: true,
    badge: 'Más vendido',
    rating: 4.9,
    reviews: 127
  },
  {
    id: 2,
    nombre: 'Tiramisú Artesanal',
    precio: 24.90,
    imagen: '/products/tiramisu.jpg',
    descripcion: 'Auténtico tiramisú italiano con mascarpone cremoso',
    categoria: 'Postres',
    destacado: true,
    badge: 'Premium',
    rating: 5.0,
    reviews: 89
  },
  {
    id: 3,
    nombre: 'Bizcocho de Chocolate con Nueces',
    precio: 22.00,
    imagen: '/products/bizcocho-chocolate-nueces.jpg',
    descripcion: 'Intenso chocolate belga con nueces frescas',
    categoria: 'Bizcochos',
    destacado: true,
    badge: 'Favorito',
    rating: 4.8,
    reviews: 64
  },
  {
    id: 4,
    nombre: 'Baba Brioche Individual',
    precio: 6.50,
    imagen: '/products/baba-brioche.jpg',
    descripcion: 'Tierno brioche dorado perfecto para desayunar',
    categoria: 'Bizcochos',
    badge: 'Nuevo',
    rating: 4.7,
    reviews: 42
  },
  {
    id: 5,
    nombre: 'Bizcocho con Nueces',
    precio: 19.90,
    imagen: '/products/bizcocho-nueces.jpg',
    descripcion: 'Tradicional bizcocho con frutos secos selectos',
    categoria: 'Bizcochos',
    rating: 4.6,
    reviews: 56
  },
  {
    id: 6,
    nombre: 'Buñuelos Artesanales',
    precio: 12.00,
    imagen: '/products/bunuelos.jpg',
    descripcion: 'Crujientes con azúcar glas, receta tradicional',
    categoria: 'Fritos',
    destacado: true,
    badge: 'Tradicional',
    rating: 4.8,
    reviews: 98
  },
  {
    id: 7,
    nombre: 'Rosquillas Caseras',
    precio: 10.50,
    imagen: '/products/rosquillas.jpg',
    descripcion: 'Receta de abuela, suaves y crujientes',
    categoria: 'Fritos',
    badge: 'Clásico',
    rating: 4.9,
    reviews: 156
  }
];

const productoDestacado = productos[1]; // Tiramisú
const WHATSAPP_NUMBER = '34612345678';

const testimonios = [
  {
    nombre: 'María García',
    texto: 'Los mejores bizcochos que he probado. Se nota que están hechos con amor y ingredientes de calidad. ¡Mi familia los adora!',
    rating: 5,
    producto: 'Bizcocho Bundt Clásico'
  },
  {
    nombre: 'Carlos Rodríguez',
    texto: 'El tiramisú es simplemente espectacular. Ya es mi tercera compra y siempre perfecto. Entrega puntual.',
    rating: 5,
    producto: 'Tiramisú Artesanal'
  },
  {
    nombre: 'Laura Martínez',
    texto: 'Encargué un pedido para el cumpleaños de mi madre y fue un éxito total. Las rosquillas son de otro mundo.',
    rating: 5,
    producto: 'Rosquillas Caseras'
  }
];

export default function Tienda() {
  const [carrito, setCarrito] = useState<{id: number; nombre: string; precio: number; cantidad: number; imagen: string}[]>([]);
  const [mostrarCarrito, setMostrarCarrito] = useState(false);
  const [categoriaActiva, setCategoriaActiva] = useState('Todos');
  const [scrolled, setScrolled] = useState(false);
  const [menuAbierto, setMenuAbierto] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categorias = ['Todos', ...new Set(productos.map(p => p.categoria))];
  const productosFiltrados = categoriaActiva === 'Todos' 
    ? productos 
    : productos.filter(p => p.categoria === categoriaActiva);

  const agregarAlCarrito = (producto: typeof productos[0]) => {
    setCarrito(prev => {
      const existe = prev.find(item => item.id === producto.id);
      if (existe) {
        return prev.map(item => 
          item.id === producto.id 
            ? {...item, cantidad: item.cantidad + 1}
            : item
        );
      }
      return [...prev, {
        id: producto.id, 
        nombre: producto.nombre, 
        precio: producto.precio, 
        cantidad: 1,
        imagen: producto.imagen
      }];
    });
  };

  const quitarDelCarrito = (id: number) => {
    setCarrito(prev => prev.filter(item => item.id !== id));
  };

  const cambiarCantidad = (id: number, delta: number) => {
    setCarrito(prev => prev.map(item => {
      if (item.id === id) {
        const nuevaCantidad = item.cantidad + delta;
        return nuevaCantidad <= 0 ? item : {...item, cantidad: nuevaCantidad};
      }
      return item;
    }).filter(item => item.cantidad > 0));
  };

  const totalCarrito = carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
  const totalItems = carrito.reduce((sum, item) => sum + item.cantidad, 0);

  const enviarPedidoWhatsApp = () => {
    if (carrito.length === 0) return;
    const mensaje = carrito.map(item => 
      `• ${item.cantidad}x ${item.nombre} - €${(item.precio * item.cantidad).toFixed(2)}`
    ).join('%0A');
    const texto = `🛒 *NUEVO PEDIDO*%0A%0A${mensaje}%0A%0A💰 *Total: €${totalCarrito.toFixed(2)}*%0A%0A¡Hola! Me gustaría realizar este pedido.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${texto}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#faf5f0]">
      {/* HEADER - RESPONSIVE */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/98 shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo con Nombre y Slogan */}
            <a href="#inicio" className="flex items-center gap-2 sm:gap-3">
              <img 
                src="/logo.png" 
                alt="Dulce Delicia Logo" 
                className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full object-cover shadow-md transition-all duration-300 ${
                  scrolled ? 'ring-2 ring-amber-200' : 'ring-2 ring-white/30'
                }`}
              />
              <div className="flex flex-col">
                <h1 className={`text-lg sm:text-xl lg:text-2xl font-bold leading-tight transition-colors ${
                  scrolled ? 'text-amber-600' : 'text-white'
                }`}>
                  Dulce Delicia
                </h1>
                <p className={`text-[10px] sm:text-xs font-medium tracking-wide transition-colors ${
                  scrolled ? 'text-gray-500' : 'text-white/90'
                }`}>
                  ✨ Repostería Artesanal ✨
                </p>
              </div>
            </a>
            
            {/* Navegación Desktop */}
            <nav className="hidden md:flex gap-6 lg:gap-8">
              {['Inicio', 'Productos', 'Nosotros', 'Contacto'].map(item => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className={`font-medium transition-colors ${
                    scrolled ? 'text-gray-700 hover:text-amber-600' : 'text-white hover:text-amber-200'
                  }`}
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* Carrito y Menú Móvil */}
            <div className="flex items-center gap-2 sm:gap-4">
              <button
                onClick={() => setMostrarCarrito(true)}
                className="relative bg-amber-600 text-white px-3 sm:px-5 py-2 sm:py-2.5 rounded-full font-semibold text-sm sm:text-base hover:bg-amber-700 transition-colors flex items-center gap-1 sm:gap-2"
              >
                <span className="hidden sm:inline">🛒</span>
                <span className="sm:hidden">🛒</span>
                <span className="hidden sm:inline">Carrito</span>
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center font-bold">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Botón Menú Móvil */}
              <button
                onClick={() => setMenuAbierto(!menuAbierto)}
                className="md:hidden p-2 rounded-lg"
              >
                <span className={`text-2xl ${scrolled ? 'text-gray-700' : 'text-white'}`}>
                  {menuAbierto ? '✕' : '☰'}
                </span>
              </button>
            </div>
          </div>

          {/* Menú Móvil Desplegable */}
          {menuAbierto && (
            <div className="md:hidden bg-white rounded-b-2xl shadow-lg py-4 px-4 absolute left-0 right-0">
              {['Inicio', 'Productos', 'Nosotros', 'Contacto'].map(item => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => setMenuAbierto(false)}
                  className="block py-3 px-4 text-gray-700 font-medium hover:bg-amber-50 hover:text-amber-600 rounded-lg transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* HERO - RESPONSIVE */}
      <section id="inicio" className="bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 text-white min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-3/4 h-full bg-white/5 rounded-full transform translate-x-1/3 -rotate-12" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Texto */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <span className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-medium mb-4 sm:mb-6">
                ✨ Producto Destacado de la Semana
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                {productoDestacado.nombre}
              </h1>
              <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 opacity-90 leading-relaxed">
                {productoDestacado.descripcion}. Preparado con ingredientes premium y todo el amor de nuestra cocina artesanal.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
                <span className="text-4xl sm:text-5xl font-bold">
                  €{productoDestacado.precio.toFixed(2)}
                </span>
                <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                  <span className="text-yellow-400">★★★★★</span>
                  <span className="text-sm">({productoDestacado.reviews} reseñas)</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => agregarAlCarrito(productoDestacado)}
                  className="bg-white text-amber-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center gap-2"
                >
                  🛒 Añadir al Carrito
                </button>
                <a 
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=¡Hola! Me interesa el ${productoDestacado.nombre}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>

            {/* Imagen */}
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-4 sm:border-8 border-white/30">
                  <img
                    src={productoDestacado.imagen}
                    alt={productoDestacado.nombre}
                    className="w-full h-full object-cover"
                  />
                </div>
                {productoDestacado.badge && (
                  <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-yellow-400 text-gray-800 px-3 sm:px-5 py-1.5 sm:py-2 rounded-full font-bold text-sm sm:text-base shadow-lg">
                    {productoDestacado.badge}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFICIOS - RESPONSIVE */}
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {icon: '🚚', titulo: 'Envío a Domicilio', texto: 'Entregamos fresco a tu puerta'},
              {icon: '👩‍🍳', titulo: '100% Artesanal', texto: 'Hechos con ingredientes premium'},
              {icon: '⭐', titulo: 'Calidad Garantizada', texto: '+500 clientes satisfechos'},
              {icon: '💳', titulo: 'Pago Fácil', texto: 'Efectivo, tarjeta o transferencia'}
            ].map((b, i) => (
              <div key={i} className="flex flex-col sm:flex-row items-center sm:items-start gap-3 p-4 sm:p-6 bg-amber-50 rounded-xl sm:rounded-2xl text-center sm:text-left">
                <span className="text-3xl sm:text-4xl">{b.icon}</span>
                <div>
                  <h3 className="font-bold text-sm sm:text-base text-gray-800 mb-1">{b.titulo}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm hidden sm:block">{b.texto}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTOS - RESPONSIVE */}
      <section id="productos" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-2 sm:mb-4">
            Nuestros Productos
          </h2>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
            Descubre nuestra selección de postres artesanales
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
          {categorias.map(cat => (
            <button
              key={cat}
              onClick={() => setCategoriaActiva(cat)}
              className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-semibold text-sm sm:text-base transition-all ${
                categoriaActiva === cat 
                  ? 'bg-amber-600 text-white' 
                  : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-amber-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid de Productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {productosFiltrados.map(producto => (
            <div key={producto.id} className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow relative group">
              {producto.badge && (
                <span className="absolute top-3 left-3 bg-amber-600 text-white px-3 py-1 rounded-full text-xs font-bold z-10">
                  {producto.badge}
                </span>
              )}
              
              <div className="h-48 sm:h-56 lg:h-60 overflow-hidden">
                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-4 sm:p-5">
                <div className="flex justify-between items-start gap-2 mb-2">
                  <h3 className="font-bold text-base sm:text-lg text-gray-800 leading-tight">
                    {producto.nombre}
                  </h3>
                  <span className="bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-semibold whitespace-nowrap">
                    {producto.categoria}
                  </span>
                </div>
                
                <p className="text-gray-600 text-xs sm:text-sm mb-3 line-clamp-2">
                  {producto.descripcion}
                </p>

                <div className="flex items-center gap-1 mb-3">
                  <span className="text-yellow-400 text-sm">★</span>
                  <span className="font-semibold text-gray-700 text-sm">{producto.rating}</span>
                  <span className="text-gray-400 text-xs">({producto.reviews})</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-xl sm:text-2xl font-bold text-amber-600">
                    €{producto.precio.toFixed(2)}
                  </span>
                  <button
                    onClick={() => agregarAlCarrito(producto)}
                    className="bg-amber-600 text-white px-4 sm:px-5 py-2 rounded-full font-semibold text-sm hover:bg-amber-700 transition-colors flex items-center gap-1"
                  >
                    🛒 <span className="hidden sm:inline">Añadir</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SOBRE NOSOTROS - RESPONSIVE */}
      <section id="nosotros" className="bg-white py-12 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-4 sm:mb-6">
                <img 
                  src="/logo.png" 
                  alt="Dulce Delicia Logo" 
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover shadow-lg ring-2 ring-amber-400/30"
                />
                <div>
                  <span className="text-amber-600 font-semibold text-sm block">Nuestra Historia</span>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
                    Sobre Nosotros
                  </h2>
                </div>
              </div>
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6">
                <strong>Dulce Delicia</strong> nació en 2018 de la pasión de una familia por la repostería tradicional. Lo que empezó como un pequeño negocio casero, hoy es una panadería artesanal reconocida por la calidad excepcional de sus productos.
              </p>
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6 hidden sm:block">
                Utilizamos únicamente ingredientes de primera calidad: huevos frescos de granja, mantequilla premium, chocolate belga y frutos secos seleccionados.
              </p>
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
                Nuestra misión es llevar la alegría a cada hogar con postres que despiertan recuerdos y crean momentos especiales.
              </p>

              <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-6 sm:mt-10">
                {[
                  {numero: '500+', texto: 'Clientes'},
                  {numero: '50+', texto: 'Recetas'},
                  {numero: '6', texto: 'Años'}
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-600">{stat.numero}</div>
                    <div className="text-gray-500 text-xs sm:text-sm">{stat.texto}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {['bizcocho-bundt-clasico', 'tiramisu', 'rosquillas', 'bunuelos'].map((img, i) => (
                <img 
                  key={i}
                  src={`/products/${img}.jpg`} 
                  alt={img}
                  className={`w-full h-32 sm:h-40 lg:h-48 object-cover rounded-lg sm:rounded-xl shadow-lg ${i % 2 === 1 ? 'mt-4 sm:mt-8' : ''}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS - RESPONSIVE */}
      <section className="bg-amber-50 py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-2 sm:mb-4">
              Lo Que Dicen Nuestros Clientes
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Miles de clientes satisfechos nos respaldan
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {testimonios.map((t, i) => (
              <div key={i} className="bg-white p-5 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl shadow-sm">
                <div className="text-yellow-400 mb-3 sm:mb-4 text-lg sm:text-xl">
                  {'★'.repeat(t.rating)}
                </div>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 italic">
                  "{t.texto}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-amber-100 flex items-center justify-center text-lg sm:text-xl">
                    👤
                  </div>
                  <div>
                    <div className="font-bold text-gray-800 text-sm sm:text-base">{t.nombre}</div>
                    <div className="text-gray-500 text-xs sm:text-sm">{t.producto}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO - RESPONSIVE */}
      <section id="contacto" className="bg-white py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
                Contáctanos
              </h2>
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 leading-relaxed">
                ¿Tienes alguna pregunta o quieres hacer un pedido especial? Estamos aquí para ayudarte.
              </p>

              <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-6 mb-6 sm:mb-8">
                {[
                  {icon: '📞', titulo: 'Teléfono', texto: '+34 612 345 678', bg: 'bg-amber-100'},
                  {icon: '💬', titulo: 'WhatsApp', texto: 'Respuesta inmediata', bg: 'bg-green-100'},
                  {icon: '📍', titulo: 'Zona de Entrega', texto: 'Toda la ciudad', bg: 'bg-blue-100'},
                  {icon: '🕐', titulo: 'Horario', texto: 'Lun-Sáb: 9:00-20:00', bg: 'bg-pink-100'}
                ].map((c, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 sm:p-4 bg-gray-50 rounded-lg sm:rounded-xl">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 ${c.bg} rounded-full flex items-center justify-center text-lg sm:text-xl shrink-0`}>
                      {c.icon}
                    </div>
                    <div className="text-left">
                      <div className="font-semibold text-gray-800 text-sm sm:text-base">{c.titulo}</div>
                      <div className="text-gray-600 text-xs sm:text-sm">{c.texto}</div>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=¡Hola! Me gustaría más información.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-green-600 transition-colors"
              >
                💬 Escríbenos por WhatsApp
              </a>
            </div>

            <div className="bg-amber-50 p-5 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800">
                Envíanos un Mensaje
              </h3>
              <form onSubmit={(e) => { e.preventDefault(); alert('¡Gracias! Te contactaremos pronto.'); }}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Nombre</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg sm:rounded-xl focus:border-amber-400 outline-none transition-colors text-sm sm:text-base"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Teléfono</label>
                    <input 
                      type="tel" 
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg sm:rounded-xl focus:border-amber-400 outline-none transition-colors text-sm sm:text-base"
                      placeholder="Tu teléfono"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Mensaje</label>
                    <textarea 
                      required
                      rows={4}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg sm:rounded-xl focus:border-amber-400 outline-none transition-colors resize-none text-sm sm:text-base"
                      placeholder="¿En qué podemos ayudarte?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-amber-600 text-white py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg hover:bg-amber-700 transition-colors"
                  >
                    Enviar Mensaje
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CARRITO LATERAL - RESPONSIVE */}
      {mostrarCarrito && (
        <>
          <div 
            onClick={() => setMostrarCarrito(false)}
            className="fixed inset-0 bg-black/50 z-50"
          />
          <div className="fixed top-0 right-0 w-full sm:w-[420px] h-full bg-white shadow-2xl z-50 flex flex-col">
            <div className="p-4 sm:p-6 border-b flex justify-between items-center">
              <h2 className="text-xl sm:text-2xl font-bold">🛒 Tu Pedido</h2>
              <button 
                onClick={() => setMostrarCarrito(false)} 
                className="text-2xl text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>

            <div className="flex-1 overflow-auto p-4 sm:p-6">
              {carrito.length === 0 ? (
                <div className="text-center py-12 text-gray-500">
                  <p className="text-5xl sm:text-6xl mb-4">🛒</p>
                  <p className="text-lg">Tu carrito está vacío</p>
                  <p className="text-sm mt-1">¡Añade productos deliciosos!</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {carrito.map(item => (
                    <div key={item.id} className="flex gap-3 p-3 sm:p-4 bg-gray-50 rounded-xl">
                      <img 
                        src={item.imagen} 
                        alt={item.nombre}
                        className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <p className="font-semibold text-sm sm:text-base">{item.nombre}</p>
                        <p className="text-gray-500 text-xs sm:text-sm">€{item.precio.toFixed(2)} c/u</p>
                        <div className="flex items-center gap-3 mt-2">
                          <button 
                            onClick={() => cambiarCantidad(item.id, -1)}
                            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-gray-300 bg-white font-bold text-sm sm:text-base hover:bg-gray-100"
                          >-</button>
                          <span className="font-semibold">{item.cantidad}</span>
                          <button 
                            onClick={() => cambiarCantidad(item.id, 1)}
                            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-gray-300 bg-white font-bold text-sm sm:text-base hover:bg-gray-100"
                          >+</button>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-amber-600 text-sm sm:text-base">
                          €{(item.precio * item.cantidad).toFixed(2)}
                        </p>
                        <button 
                          onClick={() => quitarDelCarrito(item.id)} 
                          className="mt-2 text-red-500 text-xs sm:text-sm hover:text-red-700"
                        >
                          Eliminar
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {carrito.length > 0 && (
              <div className="p-4 sm:p-6 border-t bg-gray-50">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Subtotal:</span>
                  <span>€{totalCarrito.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-4 sm:mb-6">
                  <span className="text-lg sm:text-xl font-bold">Total:</span>
                  <span className="text-xl sm:text-2xl font-bold text-amber-600">€{totalCarrito.toFixed(2)}</span>
                </div>
                <button
                  onClick={enviarPedidoWhatsApp}
                  className="w-full bg-green-500 text-white py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
                >
                  💬 Pedir por WhatsApp
                </button>
                <p className="text-center text-xs sm:text-sm text-gray-500 mt-3">
                  Entrega en 24-48 horas
                </p>
              </div>
            )}
          </div>
        </>
      )}

      {/* BOTÓN FLOTANTE WHATSAPP */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=¡Hola! Me gustaría hacer un pedido.`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 w-14 h-14 sm:w-16 sm:h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg sm:shadow-xl hover:bg-green-600 transition-colors z-40"
      >
        <span className="text-2xl sm:text-3xl">💬</span>
      </a>

      {/* FOOTER - RESPONSIVE */}
      <footer className="bg-gray-800 text-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div className="col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <img 
                  src="/logo.png" 
                  alt="Dulce Delicia Logo" 
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover shadow-lg ring-2 ring-amber-400/30"
                />
                <div className="flex flex-col">
                  <span className="text-xl sm:text-2xl font-bold">Dulce Delicia</span>
                  <span className="text-amber-400 text-xs sm:text-sm font-medium">✨ Repostería Artesanal ✨</span>
                </div>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4">
                Repostería artesanal con ingredientes de primera calidad. Hechos con amor desde 2018.
              </p>
              {/* Redes Sociales */}
              <div className="flex gap-3">
                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-700 hover:bg-green-500 rounded-full flex items-center justify-center transition-colors text-lg">
                  💬
                </a>
                <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-700 hover:bg-pink-500 rounded-full flex items-center justify-center transition-colors text-lg">
                  📷
                </a>
                <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-700 hover:bg-blue-500 rounded-full flex items-center justify-center transition-colors text-lg">
                  📘
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">Enlaces</h4>
              <div className="space-y-2">
                {['Inicio', 'Productos', 'Nosotros', 'Contacto'].map(item => (
                  <a key={item} href={`#${item.toLowerCase()}`} className="block text-gray-400 text-xs sm:text-sm hover:text-amber-400">
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">Categorías</h4>
              <div className="space-y-2">
                {['Bizcochos', 'Postres', 'Fritos', 'Especiales'].map(item => (
                  <span key={item} className="block text-gray-400 text-xs sm:text-sm">{item}</span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">Contacto</h4>
              <div className="space-y-2 text-gray-400 text-xs sm:text-sm">
                <p>📞 +34 612 345 678</p>
                <p>📍 Envíos a toda la ciudad</p>
                <p>🕐 Lun-Sáb: 9:00-20:00</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-6 sm:pt-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <img 
                src="/logo.png" 
                alt="Dulce Delicia" 
                className="w-6 h-6 rounded-full object-cover"
              />
              <span className="text-gray-300 font-semibold">Dulce Delicia</span>
            </div>
            <p className="text-gray-500 text-xs sm:text-sm">© 2024 Dulce Delicia - Repostería Artesanal. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

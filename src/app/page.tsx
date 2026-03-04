'use client';

import { useState } from 'react';

// PRODUCTOS con las imágenes que SÍ existen
const productos = [
  {
    id: 1,
    nombre: 'Bizcocho Bundt Clásico',
    precio: 18.50,
    imagen: '/products/bizcocho-bundt-clasico.jpg',
    descripcion: 'Bizcocho esponjoso tradicional'
  },
  {
    id: 2,
    nombre: 'Tiramisú Artesanal',
    precio: 24.90,
    imagen: '/products/tiramisu.jpg',
    descripcion: 'Auténtico tiramisú italiano'
  },
  {
    id: 3,
    nombre: 'Bizcocho Chocolate con Nueces',
    precio: 22.00,
    imagen: '/products/bizcocho-chocolate-nueces.jpg',
    descripcion: 'Intenso chocolate con nueces'
  },
  {
    id: 4,
    nombre: 'Baba Brioche',
    precio: 6.50,
    imagen: '/products/baba-brioche.jpg',
    descripcion: 'Brioche individual dorado'
  },
  {
    id: 5,
    nombre: 'Bizcocho con Nueces',
    precio: 19.90,
    imagen: '/products/bizcocho-nueces.jpg',
    descripcion: 'Tradicional con frutos secos'
  },
  {
    id: 6,
    nombre: 'Buñuelos Artesanales',
    precio: 12.00,
    imagen: '/products/bunuelos.jpg',
    descripcion: 'Crujientes con azúcar glas'
  },
  {
    id: 7,
    nombre: 'Rosquillas Caseras',
    precio: 10.50,
    imagen: '/products/rosquillas.jpg',
    descripcion: 'Receta tradicional de abuela'
  }
];

// TU NÚMERO DE WHATSAPP - CÁMBIALO POR EL TUYO
const WHATSAPP_NUMBER = '34612345678';

export default function Tienda() {
  const [carrito, setCarrito] = useState<{id: number; nombre: string; precio: number; cantidad: number}[]>([]);
  const [mostrarCarrito, setMostrarCarrito] = useState(false);

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
      return [...prev, {id: producto.id, nombre: producto.nombre, precio: producto.precio, cantidad: 1}];
    });
  };

  const quitarDelCarrito = (id: number) => {
    setCarrito(prev => prev.filter(item => item.id !== id));
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
    <div style={{minHeight: '100vh', backgroundColor: '#faf5f0'}}>
      {/* HEADER */}
      <header style={{
        position: 'sticky',
        top: 0,
        backgroundColor: 'white',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        zIndex: 100
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '1rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <h1 style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#d97706'
          }}>
            🎂 Dulce Delicia
          </h1>
          
          <button
            onClick={() => setMostrarCarrito(!mostrarCarrito)}
            style={{
              position: 'relative',
              padding: '0.75rem 1.5rem',
              backgroundColor: '#d97706',
              color: 'white',
              border: 'none',
              borderRadius: '50px',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: '600'
            }}
          >
            🛒 Carrito {totalItems > 0 && `(${totalItems})`}
          </button>
        </div>
      </header>

      {/* HERO */}
      <section style={{
        background: 'linear-gradient(135deg, #d97706 0%, #ea580c 50%, #dc2626 100%)',
        color: 'white',
        padding: '3rem 1rem',
        textAlign: 'center'
      }}>
        <h2 style={{fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem'}}>
          Postres Artesanales
        </h2>
        <p style={{fontSize: '1.2rem', marginBottom: '1.5rem', opacity: 0.9}}>
          Hechos con amor, del hogar a tu mesa
        </p>
      </section>

      {/* PRODUCTOS */}
      <main style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '2rem 1rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '1.5rem'
      }}>
        {productos.map(producto => (
          <div key={producto.id} style={{
            backgroundColor: 'white',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
          }}>
            {/* IMAGEN */}
            <div style={{height: '250px', backgroundColor: '#f5f5f5', overflow: 'hidden'}}>
              <img
                src={producto.imagen}
                alt={producto.nombre}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
            
            {/* INFO */}
            <div style={{padding: '1.5rem'}}>
              <h3 style={{fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#1f2937'}}>
                {producto.nombre}
              </h3>
              <p style={{color: '#6b7280', fontSize: '0.9rem', marginBottom: '1rem'}}>
                {producto.descripcion}
              </p>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <span style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#d97706'}}>
                  €{producto.precio.toFixed(2)}
                </span>
                <button
                  onClick={() => agregarAlCarrito(producto)}
                  style={{
                    padding: '0.75rem 1.5rem',
                    backgroundColor: '#d97706',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50px',
                    cursor: 'pointer',
                    fontWeight: '600'
                  }}
                >
                  Añadir 🛒
                </button>
              </div>
            </div>
          </div>
        ))}
      </main>

      {/* CARRITO LATERAL */}
      {mostrarCarrito && (
        <div style={{
          position: 'fixed',
          top: 0,
          right: 0,
          width: '100%',
          maxWidth: '400px',
          height: '100vh',
          backgroundColor: 'white',
          boxShadow: '-5px 0 30px rgba(0,0,0,0.2)',
          zIndex: 200,
          display: 'flex',
          flexDirection: 'column'
        }}>
          <div style={{
            padding: '1.5rem',
            borderBottom: '1px solid #e5e7eb',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <h2 style={{fontSize: '1.5rem', fontWeight: 'bold'}}>Tu Pedido</h2>
            <button onClick={() => setMostrarCarrito(false)} style={{background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer'}}>✕</button>
          </div>

          <div style={{flex: 1, overflow: 'auto', padding: '1rem'}}>
            {carrito.length === 0 ? (
              <div style={{textAlign: 'center', padding: '3rem', color: '#6b7280'}}>
                <p style={{fontSize: '3rem', marginBottom: '1rem'}}>🛒</p>
                <p>Tu carrito está vacío</p>
              </div>
            ) : (
              carrito.map(item => (
                <div key={item.id} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '1rem',
                  backgroundColor: '#f9fafb',
                  borderRadius: '8px',
                  marginBottom: '0.5rem'
                }}>
                  <div>
                    <p style={{fontWeight: '600'}}>{item.nombre}</p>
                    <p style={{color: '#6b7280', fontSize: '0.9rem'}}>{item.cantidad}x €{item.precio.toFixed(2)}</p>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                    <span style={{fontWeight: 'bold', color: '#d97706'}}>€{(item.precio * item.cantidad).toFixed(2)}</span>
                    <button onClick={() => quitarDelCarrito(item.id)} style={{background: '#fee2e2', border: 'none', borderRadius: '50%', width: '28px', height: '28px', cursor: 'pointer', color: '#dc2626'}}>✕</button>
                  </div>
                </div>
              ))
            )}
          </div>

          {carrito.length > 0 && (
            <div style={{padding: '1.5rem', borderTop: '1px solid #e5e7eb'}}>
              <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '1rem'}}>
                <span style={{fontSize: '1.2rem'}}>Total:</span>
                <span style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#d97706'}}>€{totalCarrito.toFixed(2)}</span>
              </div>
              <button
                onClick={enviarPedidoWhatsApp}
                style={{
                  width: '100%',
                  padding: '1rem',
                  backgroundColor: '#25d366',
                  color: 'white',
                  border: 'none',
                  borderRadius: '50px',
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
              >
                📱 Pedir por WhatsApp
              </button>
            </div>
          )}
        </div>
      )}

      {/* BOTÓN FLOTANTE WHATSAPP */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=¡Hola! Me gustaría hacer un pedido.`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          width: '60px',
          height: '60px',
          backgroundColor: '#25d366',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)',
          zIndex: 150
        }}
      >
        <span style={{fontSize: '2rem'}}>💬</span>
      </a>

      {/* FOOTER */}
      <footer style={{backgroundColor: '#1f2937', color: 'white', padding: '2rem 1rem', textAlign: 'center'}}>
        <p style={{marginBottom: '0.5rem'}}>📞 +34 612 345 678</p>
        <p style={{marginBottom: '0.5rem'}}>📍 Envíos a toda la ciudad</p>
        <p style={{opacity: 0.7, fontSize: '0.9rem', marginTop: '1rem'}}>© 2024 Dulce Delicia - Repostería Artesanal</p>
      </footer>
    </div>
  );
}

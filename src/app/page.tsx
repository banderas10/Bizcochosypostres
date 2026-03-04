'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { products, categories } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Star, Truck, Shield, Clock, Award, ChevronRight, 
  Sparkles, Heart, Users, Phone, ArrowRight, Check
} from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category.toLowerCase() === activeCategory);

  const features = [
    { icon: Truck, title: 'Envío Gratis', desc: 'En pedidos +€20' },
    { icon: Clock, title: 'Entrega Rápida', desc: 'Mismo día en ciudad' },
    { icon: Shield, title: 'Pago Seguro', desc: 'Transacciones 100% seguras' },
    { icon: Award, title: 'Calidad Premium', desc: 'Ingredientes selectos' },
  ];

  const testimonials = [
    { name: 'María García', text: 'Los mejores bizcochos que he probado. Se nota la calidad artesanal.', rating: 5, image: '/products/bizcocho-bundt-clasico.jpg' },
    { name: 'Carlos López', text: 'El tiramisú es simplemente espectacular. ¡Pediré de nuevo!', rating: 5, image: '/products/tiramisu.jpg' },
    { name: 'Ana Martínez', text: 'Las rosquillas me recuerdan a las de mi abuela. Deliciosas.', rating: 5, image: '/products/rosquillas.jpg' },
  ];

  const stats = [
    { value: '5000+', label: 'Clientes Felices' },
    { value: '15+', label: 'Años de Experiencia' },
    { value: '50+', label: 'Productos Artesanales' },
    { value: '4.9', label: 'Valoración Media' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-orange-50">
      <Header />

      {/* Hero Section */}
      <section id="inicio" className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d97706' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="space-y-6 text-center lg:text-left">
              <Badge className="bg-amber-100 text-amber-700 border-amber-200 px-4 py-1.5 text-sm">
                <Sparkles className="h-4 w-4 mr-1" />
                Recién horneado cada día
              </Badge>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Postres Artesanales
                <span className="block bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
                  Hechos con Amor
                </span>
              </h1>

              <p className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
                Descubre nuestra selección de bizcochos y postres elaborados de forma tradicional 
                con los mejores ingredientes. Del hogar directo a tu mesa.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all group" asChild>
                  <a href="#productos">
                    Ver Productos
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-amber-200 text-amber-700 hover:bg-amber-50 px-8 py-6 text-lg rounded-xl">
                  <Phone className="mr-2 h-5 w-5" />
                  Contactar
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Check className="h-5 w-5 text-green-500" />
                  Sin conservantes
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Check className="h-5 w-5 text-green-500" />
                  Ingredientes frescos
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Check className="h-5 w-5 text-green-500" />
                  Recetas tradicionales
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-orange-300 rounded-3xl transform rotate-3 scale-105 opacity-20" />
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
                <Image
                  src="/products/tiramisu.jpg"
                  alt="Tiramisú artesanal premium"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-gray-800">Tiramisú Artesanal</p>
                      <p className="text-sm text-gray-500">El favorito de nuestros clientes</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-amber-600">€24.90</p>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                        <span className="text-sm font-medium">5.0</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 50L48 45.7C96 41.3 192 32.7 288 35.2C384 37.7 480 51.3 576 55.8C672 60.3 768 55.7 864 48.2C960 40.7 1056 30.3 1152 32.7C1248 35 1344 50 1392 57.5L1440 65V101H1392C1344 101 1248 101 1152 101C1056 101 960 101 864 101C768 101 672 101 576 101C480 101 384 101 288 101C192 101 96 101 48 101H0V50Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center p-4 rounded-2xl bg-gradient-to-b from-amber-50 to-white border border-amber-100 hover:shadow-lg transition-shadow">
                <div className="bg-gradient-to-br from-amber-400 to-orange-500 p-3 rounded-xl mb-3 shadow-lg">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-800">{feature.title}</h3>
                <p className="text-sm text-gray-500">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <p className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</p>
                <p className="text-amber-100 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="productos" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <Badge className="bg-amber-100 text-amber-700 border-0 mb-4">
              Nuestra Selección
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Productos Artesanales
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Cada producto es elaborado con dedicación y los mejores ingredientes. 
              Descubre el sabor auténtico de la repostería tradicional.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((category) => (
              <Button
                key={category.slug}
                variant={activeCategory === category.slug ? 'default' : 'outline'}
                onClick={() => setActiveCategory(category.slug)}
                className={`rounded-full px-6 ${
                  activeCategory === category.slug
                    ? 'bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white'
                    : 'border-amber-200 text-amber-700 hover:bg-amber-50'
                }`}
              >
                {category.name}
              </Button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-16 md:py-24 bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Images */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <Image
                    src="/products/bizcocho-bundt-clasico.jpg"
                    alt="Bizcocho artesanal"
                    width={300}
                    height={300}
                    className="rounded-2xl shadow-xl w-full h-auto object-cover"
                  />
                  <Image
                    src="/products/bunuelos.jpg"
                    alt="Buñuelos tradicionales"
                    width={300}
                    height={200}
                    className="rounded-2xl shadow-xl w-full h-auto object-cover"
                  />
                </div>
                <div className="pt-8">
                  <Image
                    src="/products/rosquillas.jpg"
                    alt="Rosquillas caseras"
                    width={300}
                    height={400}
                    className="rounded-2xl shadow-xl w-full h-auto object-cover"
                  />
                </div>
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-2xl p-4">
                <div className="flex items-center gap-3">
                  <div className="bg-amber-100 p-2 rounded-xl">
                    <Heart className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">Hecho con Amor</p>
                    <p className="text-sm text-gray-500">Desde 2009</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <Badge className="bg-amber-100 text-amber-700 border-0">
                Nuestra Historia
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Tradición y Sabor en Cada Bocado
              </h2>
              <p className="text-gray-600 leading-relaxed">
                En Dulce Delicia, llevamos más de 15 años endulzando los momentos especiales de nuestros clientes. 
                Nuestra pasión por la repostería tradicional nos impulsa a crear productos únicos, 
                elaborados con ingredientes de primera calidad y recetas transmitidas de generación en generación.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Cada bizcocho, cada postre, es preparado de forma artesanal en nuestro obrador, 
                respetando los tiempos de elaboración tradicionales para garantizar la máxima calidad y sabor.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Check className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="text-gray-700">Sin conservantes</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Check className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="text-gray-700">Ingredientes frescos</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Check className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="text-gray-700">Elaboración artesanal</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Check className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="text-gray-700">Recetas tradicionales</span>
                </div>
              </div>

              <Button className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white mt-4" size="lg">
                Conocer más
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-amber-100 text-amber-700 border-0 mb-4">
              Testimonios
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Lo Que Dicen Nuestros Clientes
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Miles de clientes satisfechos nos respaldan. Sus opiniones son nuestra mejor carta de presentación.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-b from-amber-50 to-white rounded-2xl p-6 border border-amber-100 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">&quot;{testimonial.text}&quot;</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">Cliente verificado</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-white rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              ¿Listo para Endulzar tu Día?
            </h2>
            <p className="text-xl text-amber-100 mb-8">
              Haz tu pedido ahora y disfruta de la auténtica repostería artesanal. 
              Envío gratis en pedidos superiores a €20.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-amber-600 hover:bg-amber-50 px-8 py-6 text-lg font-semibold rounded-xl shadow-xl" asChild>
                <a href="#productos">
                  Ver Productos
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-xl">
                <Phone className="mr-2 h-5 w-5" />
                Llamar Ahora
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <Badge className="bg-amber-100 text-amber-700 border-0 mb-4">
                Contacto
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                ¿Tienes Alguna Pregunta?
              </h2>
              <p className="text-gray-600 mb-8">
                Estamos aquí para ayudarte. Contáctanos para hacer tu pedido personalizado 
                o resolver cualquier duda sobre nuestros productos.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 p-3 rounded-xl">
                    <Phone className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Teléfono</p>
                    <p className="text-gray-600">+34 612 345 678</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 p-3 rounded-xl">
                    <Users className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">WhatsApp</p>
                    <p className="text-gray-600">+34 612 345 678</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 p-3 rounded-xl">
                    <Clock className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Horario</p>
                    <p className="text-gray-600">Lunes a Sábado: 8:00 - 20:00</p>
                    <p className="text-gray-600">Domingos: Cerrado</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Envíanos un Mensaje</h3>
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                      placeholder="Tu teléfono"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all resize-none"
                    placeholder="¿En qué podemos ayudarte?"
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all">
                  Enviar Mensaje
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

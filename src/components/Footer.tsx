import Link from 'next/link';
import { Cake, Facebook, Instagram, Twitter, Phone, Mail, MapPin, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-amber-900 to-amber-950 text-amber-50">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-gradient-to-br from-amber-400 to-orange-500 p-2 rounded-xl">
                <Cake className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold">Dulce Delicia</span>
                <p className="text-xs text-amber-300">Repostería Artesanal</p>
              </div>
            </Link>
            <p className="text-amber-200 text-sm leading-relaxed">
              Elaboramos nuestros productos de forma artesanal con ingredientes de primera calidad. 
              Cada bocado es una experiencia única de sabor y tradición.
            </p>
            <div className="flex gap-3">
              <a href="#" className="bg-amber-800 hover:bg-amber-700 p-2 rounded-full transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-amber-800 hover:bg-amber-700 p-2 rounded-full transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-amber-800 hover:bg-amber-700 p-2 rounded-full transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              {['Inicio', 'Productos', 'Nosotros', 'Contacto', 'FAQ'].map((link) => (
                <li key={link}>
                  <Link href={`#${link.toLowerCase()}`} className="text-amber-200 hover:text-white transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Categorías</h3>
            <ul className="space-y-3">
              {['Bizcochos', 'Postres', 'Fritos', 'Especiales', 'Temporada'].map((cat) => (
                <li key={cat}>
                  <Link href="#productos" className="text-amber-200 hover:text-white transition-colors">
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <span className="text-amber-200 text-sm">Calle Principal 123, Madrid, España</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-amber-400 flex-shrink-0" />
                <span className="text-amber-200 text-sm">+34 612 345 678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-amber-400 flex-shrink-0" />
                <span className="text-amber-200 text-sm">info@dulcedelicia.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-amber-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-amber-300 text-sm text-center md:text-left">
              © {currentYear} Dulce Delicia. Todos los derechos reservados.
            </p>
            <p className="text-amber-300 text-sm flex items-center gap-1">
              Hecho con <Heart className="h-4 w-4 text-red-400 fill-red-400" /> para endulzar tu día
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

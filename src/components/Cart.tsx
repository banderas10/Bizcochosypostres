'use client';

import { useCartStore } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Cart() {
  const { items, removeItem, updateQuantity, clearCart, getTotalPrice } = useCartStore();

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full py-12">
        <ShoppingBag className="h-16 w-16 text-gray-300 mb-4" />
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Tu carrito está vacío</h3>
        <p className="text-gray-500 text-center mb-6">¡Agrega nuestros deliciosos productos!</p>
        <Link href="#productos">
          <Button className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700">
            Ver productos
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-800">Tu Pedido</h2>
        <Button variant="ghost" size="sm" onClick={clearCart} className="text-red-500 hover:text-red-600 hover:bg-red-50">
          <Trash2 className="h-4 w-4 mr-1" />
          Vaciar
        </Button>
      </div>

      <div className="flex-1 overflow-auto space-y-4">
        {items.map((item) => (
          <div key={item.id} className="flex gap-4 p-3 bg-gray-50 rounded-xl">
            <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-gray-800 truncate">{item.name}</h4>
              <p className="text-amber-600 font-bold">€{item.price.toFixed(2)}</p>
              <div className="flex items-center gap-2 mt-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-7 w-7"
                  onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                >
                  <Minus className="h-3 w-3" />
                </Button>
                <span className="font-medium w-8 text-center">{item.quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-7 w-7"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  <Plus className="h-3 w-3" />
                </Button>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-red-500"
              onClick={() => removeItem(item.id)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>

      <div className="mt-4 space-y-4">
        <Separator />
        <div className="space-y-2">
          <div className="flex justify-between text-gray-600">
            <span>Subtotal</span>
            <span>€{getTotalPrice().toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>Envío</span>
            <span className="text-green-600 font-medium">Gratis</span>
          </div>
          <Separator />
          <div className="flex justify-between text-xl font-bold text-gray-800">
            <span>Total</span>
            <span className="text-amber-600">€{getTotalPrice().toFixed(2)}</span>
          </div>
        </div>

        <Button className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all">
          Finalizar Pedido
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>

        <p className="text-center text-sm text-gray-500">
          Envío gratuito en pedidos superiores a €20
        </p>
      </div>
    </div>
  );
}

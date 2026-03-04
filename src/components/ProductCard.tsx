'use client';

import { Product, useCartStore } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, ShoppingCart, Plus } from 'lucide-react';
import Image from 'next/image';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white rounded-2xl">
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {product.badge && (
          <Badge className="absolute top-3 left-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white border-0 shadow-lg">
            {product.badge}
          </Badge>
        )}

        <Button
          onClick={() => addItem(product)}
          className="absolute bottom-3 right-3 bg-white/95 hover:bg-amber-500 text-amber-700 hover:text-white rounded-full h-12 w-12 shadow-xl opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300"
          size="icon"
        >
          <Plus className="h-6 w-6" />
        </Button>
      </div>

      <CardContent className="p-4">
        <div className="flex items-center gap-1 mb-2">
          {product.rating && (
            <>
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              <span className="text-sm font-medium text-gray-700">{product.rating}</span>
              {product.reviews && (
                <span className="text-sm text-gray-400">({product.reviews})</span>
              )}
            </>
          )}
        </div>

        <h3 className="font-bold text-gray-800 mb-1 group-hover:text-amber-600 transition-colors">
          {product.name}
        </h3>
        
        <p className="text-sm text-gray-500 line-clamp-2 mb-3">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold text-amber-600">€{product.price.toFixed(2)}</span>
          </div>
          <Button
            onClick={() => addItem(product)}
            className="bg-amber-50 text-amber-700 hover:bg-amber-100 border border-amber-200"
            size="sm"
          >
            <ShoppingCart className="h-4 w-4 mr-1" />
            Añadir
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

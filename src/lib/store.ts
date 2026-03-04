import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  featured?: boolean;
  badge?: string;
  rating?: number;
  reviews?: number;
}

export interface CartItem extends Product {
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: (product: Product) => {
        set((state) => {
          const existingItem = state.items.find((item) => item.id === product.id);
          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          }
          return { items: [...state.items, { ...product, quantity: 1 }] };
        });
      },
      
      removeItem: (productId: string) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== productId),
        }));
      },
      
      updateQuantity: (productId: string, quantity: number) => {
        set((state) => ({
          items: state.items.map((item) =>
            item.id === productId ? { ...item, quantity } : item
          ),
        }));
      },
      
      clearCart: () => set({ items: [] }),
      
      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },
      
      getTotalPrice: () => {
        return get().items.reduce((total, item) => total + item.price * item.quantity, 0);
      },
    }),
    {
      name: 'dulce-delicia-cart',
    }
  )
);

export const products: Product[] = [
  {
    id: '1',
    name: 'Bizcocho Bundt Clásico',
    description: 'Delicioso bizcocho en forma de anillo con textura esponjosa y sabor tradicional. Elaborado con ingredientes de primera calidad, perfecto para compartir en reuniones familiares o como postre especial.',
    price: 18.50,
    image: '/products/bizcocho-bundt-clasico.jpg',
    category: 'Bizcochos',
    featured: true,
    badge: 'Más vendido',
    rating: 4.9,
    reviews: 127,
  },
  {
    id: '2',
    name: 'Tiramisú Artesanal',
    description: 'Auténtico tiramisú italiano preparado con mascarpone cremoso, bizcochos savoiardi y café de calidad. Presentación elegante en bandeja, ideal para 4-6 porciones.',
    price: 24.90,
    image: '/products/tiramisu.jpg',
    category: 'Postres',
    featured: true,
    badge: 'Premium',
    rating: 5.0,
    reviews: 89,
  },
  {
    id: '3',
    name: 'Bizcocho de Chocolate con Nueces',
    description: 'Exquisito bizcocho de chocolate intenso decorado con nueces frescas. Una combinación perfecta de sabores con textura húmeda y crujiente.',
    price: 22.00,
    image: '/products/bizcocho-chocolate-nueces.jpg',
    category: 'Bizcochos',
    featured: true,
    rating: 4.8,
    reviews: 64,
  },
  {
    id: '4',
    name: 'Baba Brioche Individual',
    description: 'Tierno brioche en forma de anillo, perfectamente dorado y con frutos secos. Tamaño individual ideal para desayuno o merienda.',
    price: 6.50,
    image: '/products/baba-brioche.jpg',
    category: 'Bizcochos',
    badge: 'Nuevo',
    rating: 4.7,
    reviews: 42,
  },
  {
    id: '5',
    name: 'Bizcocho con Nueces',
    description: 'Tradicional bizcocho casero con nueces selectas incrustadas. Textura esponjosa con el toque crujiente de los frutos secos.',
    price: 19.90,
    image: '/products/bizcocho-nueces.jpg',
    category: 'Bizcochos',
    rating: 4.6,
    reviews: 56,
  },
  {
    id: '6',
    name: 'Buñuelos Artesanales',
    description: 'Crujientes buñuelos recién hechos, espolvoreados con azúcar glas. Un dulce tradicional perfecto para cualquier ocasión.',
    price: 12.00,
    image: '/products/bunuelos.jpg',
    category: 'Fritos',
    featured: true,
    badge: 'Tradicional',
    rating: 4.8,
    reviews: 98,
  },
  {
    id: '7',
    name: 'Rosquillas Caseras',
    description: 'Deliciosas rosquillas fritas artesanales con azúcar glas. Elaboradas con receta tradicional, suaves por dentro y crujientes por fuera.',
    price: 10.50,
    image: '/products/rosquillas.jpg',
    category: 'Fritos',
    badge: 'Favorito',
    rating: 4.9,
    reviews: 156,
  },
];

export const categories = [
  { name: 'Todos', slug: 'all' },
  { name: 'Bizcochos', slug: 'bizcochos' },
  { name: 'Postres', slug: 'postres' },
  { name: 'Fritos', slug: 'fritos' },
];

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DULCEMON | Bizcochos y Postres Artesanales - ENDULZATE LA VIDA",
  description: "Descubre los mejores bizcochos y postres artesanales en DULCEMON. Tiramisú auténtico, bizcochos caseros, rosquillas tradicionales y buñuelos. Envío a domicilio. ¡ENDULZATE LA VIDA!",
  keywords: [
    "bizcochos artesanales",
    "postres caseros",
    "tiramisú auténtico",
    "rosquillas tradicionales",
    "buñuelos artesanales",
    "repostería artesanal",
    "dulces caseros",
    "pastelería casera",
    "bizcocho de chocolate",
    "postres delivery",
    "repostería online",
    "dulces artesanales",
    "DULCEMON"
  ],
  authors: [{ name: "DULCEMON" }],
  creator: "DULCEMON",
  publisher: "DULCEMON",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://bizcochosypostres.vercel.app",
    siteName: "DULCEMON",
    title: "DULCEMON | Bizcochos y Postres Artesanales - ENDULZATE LA VIDA",
    description: "Los mejores bizcochos y postres artesanales en DULCEMON. Tiramisú, rosquillas, buñuelos y más. Hechos con ingredientes premium. ENDULZATE LA VIDA.",
    images: [
      {
        url: "/products/tiramisu.jpg",
        width: 1200,
        height: 630,
        alt: "DULCEMON - Postres artesanales",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DULCEMON | Bizcochos y Postres Artesanales",
    description: "Los mejores bizcochos y postres artesanales. ENDULZATE LA VIDA.",
    images: ["/products/tiramisu.jpg"],
  },
  alternates: {
    canonical: "https://bizcochosypostres.vercel.app",
  },
};

// JSON-LD Schema para SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Bakery",
  name: "DULCEMON",
  description: "Repostería artesanal especializada en bizcochos y postres tradicionales - ENDULZATE LA VIDA",
  url: "https://bizcochosypostres.vercel.app",
  logo: "https://bizcochosypostres.vercel.app/logo.png",
  image: "https://bizcochosypostres.vercel.app/products/tiramisu.jpg",
  telephone: "+34612345678",
  address: {
    "@type": "PostalAddress",
    addressCountry: "ES",
  },
  openingHours: "Mo-Sa 09:00-20:00",
  priceRange: "€€",
  servesCuisine: ["Repostería", "Postres", "Bizcochos"],
  slogan: "ENDULZATE LA VIDA",
  hasMenu: {
    "@type": "Menu",
    hasMenuItem: [
      {
        "@type": "MenuItem",
        name: "Bizcocho Bundt Clásico",
        description: "Bizcocho esponjoso tradicional con forma de anillo",
        offers: {
          "@type": "Offer",
          price: "18.50",
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock"
        }
      },
      {
        "@type": "MenuItem",
        name: "Tiramisú Artesanal",
        description: "Auténtico tiramisú italiano con mascarpone cremoso",
        offers: {
          "@type": "Offer",
          price: "24.90",
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock"
        }
      },
      {
        "@type": "MenuItem",
        name: "Bizcocho de Chocolate con Nueces",
        description: "Intenso chocolate belga con nueces frescas",
        offers: {
          "@type": "Offer",
          price: "22.00",
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock"
        }
      },
      {
        "@type": "MenuItem",
        name: "Rosquillas Caseras",
        description: "Receta de abuela, suaves y crujientes",
        offers: {
          "@type": "Offer",
          price: "10.50",
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock"
        }
      }
    ]
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "500"
  }
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Productos DULCEMON",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Product",
        name: "Tiramisú Artesanal",
        description: "Auténtico tiramisú italiano con mascarpone cremoso",
        image: "https://bizcochosypostres.vercel.app/products/tiramisu.jpg",
        offers: {
          "@type": "Offer",
          price: "24.90",
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock"
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5.0",
          reviewCount: "89"
        }
      }
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Product",
        name: "Bizcocho Bundt Clásico",
        description: "Bizcocho esponjoso tradicional con forma de anillo",
        image: "https://bizcochosypostres.vercel.app/products/bizcocho-bundt-clasico.jpg",
        offers: {
          "@type": "Offer",
          price: "18.50",
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock"
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "127"
        }
      }
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Product",
        name: "Rosquillas Caseras",
        description: "Receta de abuela, suaves y crujientes",
        image: "https://bizcochosypostres.vercel.app/products/rosquillas.jpg",
        offers: {
          "@type": "Offer",
          price: "10.50",
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock"
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "156"
        }
      }
    }
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/products/tiramisu.jpg" />
        <meta name="theme-color" content="#d97706" />
        <meta name="google-site-verification" content="tu-codigo-verificacion" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

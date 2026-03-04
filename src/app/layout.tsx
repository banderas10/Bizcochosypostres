import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://dulcedelicia.com'),
  title: {
    default: "Dulce Delicia | Bizcochos y Postres Artesanales - Repostería Tradicional",
    template: "%s | Dulce Delicia"
  },
  description: "Descubre los mejores bizcochos y postres artesanales en Dulce Delicia. Elaboramos tiramisú, rosquillas, buñuelos y más con ingredientes de primera calidad. Envío gratis en pedidos +€20. Repostería tradicional desde 2009.",
  keywords: [
    "bizcochos artesanales",
    "postres caseros",
    "tiramisú original",
    "rosquillas tradicionales",
    "buñuelos caseros",
    "repostería artesanal",
    "pastelería online",
    "dulces caseros",
    "postres de calidad",
    "bizcocho de chocolate",
    "envío de postres",
    "repostería tradicional española"
  ],
  authors: [{ name: "Dulce Delicia", url: "https://dulcedelicia.com" }],
  creator: "Dulce Delicia",
  publisher: "Dulce Delicia",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://dulcedelicia.com",
    siteName: "Dulce Delicia",
    title: "Dulce Delicia | Bizcochos y Postres Artesanales",
    description: "Los mejores bizcochos y postres artesanales. Tiramisú, rosquillas, buñuelos y más. Envío gratis en pedidos +€20.",
    images: [
      {
        url: "/products/tiramisu.jpg",
        width: 1200,
        height: 630,
        alt: "Postres artesanales Dulce Delicia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dulce Delicia | Bizcochos y Postres Artesanales",
    description: "Los mejores bizcochos y postres artesanales. Tiramisú, rosquillas, buñuelos y más.",
    images: ["/products/tiramisu.jpg"],
    creator: "@dulcedelicia",
  },
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
  verification: {
    google: "google-site-verification-code",
  },
  alternates: {
    canonical: "https://dulcedelicia.com",
  },
  category: "food",
};

// JSON-LD Schema for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Bakery",
  "name": "Dulce Delicia",
  "description": "Repostería artesanal especializada en bizcochos y postres tradicionales",
  "url": "https://dulcedelicia.com",
  "telephone": "+34612345678",
  "email": "info@dulcedelicia.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Calle Principal 123",
    "addressLocality": "Madrid",
    "addressCountry": "ES"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 40.4168,
    "longitude": -3.7038
  },
  "openingHours": "Mo-Sa 08:00-20:00",
  "priceRange": "€€",
  "image": "https://dulcedelicia.com/products/tiramisu.jpg",
  "servesCuisine": ["Repostería", "Postres", "Bizcochos"],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "5000"
  },
  "hasMenu": {
    "@type": "Menu",
    "hasMenuItem": [
      {
        "@type": "MenuItem",
        "name": "Bizcocho Bundt Clásico",
        "description": "Delicioso bizcocho en forma de anillo con textura esponjosa",
        "offers": {
          "@type": "Offer",
          "price": "18.50",
          "priceCurrency": "EUR"
        }
      },
      {
        "@type": "MenuItem",
        "name": "Tiramisú Artesanal",
        "description": "Auténtico tiramisú italiano con mascarpone cremoso",
        "offers": {
          "@type": "Offer",
          "price": "24.90",
          "priceCurrency": "EUR"
        }
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#f59e0b" />
      </head>
      <body
        className={`${playfair.variable} ${inter.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}

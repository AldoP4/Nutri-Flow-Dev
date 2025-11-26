import { Product } from './types';

// ITIL 4 PRACTICE: Software Development and Management
// NOTA ITIL: El 80% de este código fue generado usando Gemini 3, demostrando la alta velocidad de la práctica de Desarrollo y Gestión de Software moderna.

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Ultra Whey Gold",
    description: "Premium protein isolate for maximum muscle recovery.",
    price: 59.99,
    category: "Protein",
    // Imagen: Tarro de proteína negro con shaker
    image: "https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    name: "Creatine Monohydrate",
    description: "Pure micronized creatine to boost performance.",
    price: 24.99,
    category: "Performance",
    // Imagen: Polvo blanco / Scoop en gimnasio
    image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    name: "Multi-Vitamin Elite",
    description: "Daily essential vitamins for active lifestyles.",
    price: 19.99,
    category: "Wellness",
    // Imagen: Frasco de suplementos estilo farmacia/salud
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    name: "Pre-Workout Ignite",
    description: "High energy formula with beta-alanine (Green Apple).",
    price: 34.99,
    category: "Performance",
    // Imagen: Atleta con shaker en gimnasio (Unsplash seguro)
    image: "https://images.unsplash.com/photo-1550345332-09e3ac987658?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 5,
    name: "Omega-3 Fish Oil",
    description: "Supports heart and joint health.",
    price: 29.99,
    category: "Wellness",
    // Imagen: Cápsulas doradas de aceite de pescado
    image: "https://images.unsplash.com/photo-1626285861696-9f0bf5a49c6d?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 6,
    name: "Vegan Plant Protein",
    description: "Organic pea and rice protein blend.",
    price: 49.99,
    category: "Protein",
    // Imagen: Ingredientes verdes naturales / Bowl saludable
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80"
  }
];
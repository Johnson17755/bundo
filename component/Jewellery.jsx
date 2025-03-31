"use client";

import { Heart } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import gold from "@/Assets/jewelry/image2.png";
import hand from "@/Assets/jewelry/image.png";
import brown from "@/Assets/jewelry/jewelry.png";
import ring from "@/Assets/jewelry/ring.png";
import golds from "@/Assets/jewelry/image3.png";

const jewelryItems = [
  {
    id: 1,
    image: gold,
    title: "Gold Chain Necklace",
    description: "18K Gold, Premium Quality",
    rating: 5,
    reviews: 121,
    price: 3000,
  },
  {
    id: 2,
    image: hand,
    title: "Diamond Ring",
    description: "1 Carat Diamond, VS Clarity",
    rating: 5,
    reviews: 98,
    price: 4500,
  },
  {
    id: 3,
    image: brown,
    title: "Pearl Earrings",
    description: "Natural Freshwater Pearls",
    rating: 5,
    reviews: 75,
    price: 2800,
  },
  {
    id: 4,
    image: ring,
    title: "Silver Bracelet",
    description: "925 Sterling Silver",
    rating: 5,
    reviews: 112,
    price: 1800,
  },
  {
    id: 5,
    image: golds,
    title: "Gemstone Pendant",
    description: "Natural Sapphire, Gold Plated",
    rating: 5,
    reviews: 89,
    price: 3200,
  },
  {
    id: 6,
    image: golds,
    title: "Rose Gold Set",
    description: "Necklace and Earrings Set",
    rating: 5,
    reviews: 156,
    price: 5000,
  },
];

export default function jewellery() {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  return (
    <div className="px-4 py-8 md:hidden">
      <h2 className="text-2xl font-bold mb-6">Elevate your jewellery</h2>
      <div className="grid grid-cols-2 gap-4">
        {jewelryItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg overflow-hidden shadow"
            s
          >
            <div className="relative">
              <div className="aspect-square bg-gray-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </div>
              <button
                onClick={() => toggleFavorite(item.id)}
                className="absolute top-2 right-2 p-2"
              >
                <Heart
                  className={`w-5 h-5 ${
                    favorites.includes(item.id)
                      ? "fill-red-500 stroke-red-500"
                      : "stroke-gray-600"
                  }`}
                />
              </button>
            </div>
            <div className="p-3">
              <h3 className="font-medium">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
              <div className="flex items-center mt-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-green-500">
                    ★
                  </span>
                ))}
                <span className="text-sm text-gray-600 ml-1">
                  ({item.reviews})
                </span>
              </div>
              <p className="font-bold mt-2">₦{item.price.toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

"use client";

import { Heart, Clock, MapPin, Tag } from "lucide-react";
import { useState } from "react";

const vendors = [
  {
    id: 1,
    name: "Beauty Hair",
    timeAway: "5 minutes away from you",
    description:
      "Affordable and mouth watering food for all kinds of occasion. Fried rice, plantain.....",
    location: "Ikeja, Lagos",
    category: "Cakes Catering Food",
    rating: 4,
  },
  {
    id: 2,
    name: "Fashion Hub",
    timeAway: "8 minutes away from you",
    description:
      "Premium clothing and accessories for all occasions. Designer brands and custom fits.",
    location: "Victoria Island, Lagos",
    category: "Fashion & Style",
    rating: 5,
  },
  {
    id: 3,
    name: "Tech Store",
    timeAway: "12 minutes away from you",
    description:
      "Latest gadgets and electronics. Authorized dealer for major brands.",
    location: "Lekki, Lagos",
    category: "Electronics",
    rating: 4,
  },
  {
    id: 4,
    name: "Wellness Spa",
    timeAway: "15 minutes away from you",
    description:
      "Luxury spa treatments and massage therapy. Professional staff and serene environment.",
    location: "Ikoyi, Lagos",
    category: "Health & Beauty",
    rating: 5,
  },
  {
    id: 5,
    name: "Gourmet Kitchen",
    timeAway: "7 minutes away from you",
    description:
      "Fine dining and catering services. International cuisine and local delicacies.",
    location: "Maryland, Lagos",
    category: "Restaurant & Catering",
    rating: 4,
  },
  {
    id: 6,
    name: "Art Gallery",
    timeAway: "10 minutes away from you",
    description:
      "Contemporary African art and sculptures. Regular exhibitions and art sales.",
    location: "Surulere, Lagos",
    category: "Arts & Culture",
    rating: 5,
  },
];

export default function Vendor() {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  return (
    <div className="px-4 py-8 md:hidden">
      <h2 className="text-2xl font-bold mb-6">Explore some of our Vendors</h2>
      <div className="grid grid-cols-2 gap-4">
        {vendors.map((vendor) => (
          <div
            key={vendor.id}
            className="bg-white rounded-lg overflow-hidden shadow"
          >
            <div className="relative">
              <div className="aspect-square bg-gray-100 flex items-center justify-center">
                <div className="w-16 h-16 bg-gray-200 rounded-full" />
              </div>
              <button
                onClick={() => toggleFavorite(vendor.id)}
                className="absolute top-2 right-2 p-2"
              >
                <Heart
                  className={`w-5 h-5 ${
                    favorites.includes(vendor.id)
                      ? "fill-green-500 stroke-green-500"
                      : "stroke-gray-600"
                  }`}
                />
              </button>
            </div>
            <div className="p-3">
              <h3 className="font-medium">{vendor.name}</h3>
              <div className="flex items-center text-sm text-gray-600 mt-1">
                <Clock className="w-4 h-4 mr-1" />
                <span>{vendor.timeAway}</span>
              </div>
              <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                {vendor.description}
              </p>
              <div className="flex items-center text-sm text-gray-600 mt-2">
                <MapPin className="w-4 h-4 mr-1" />
                <span>{vendor.location}</span>
              </div>
              <div className="flex items-center text-sm text-gray-600 mt-1">
                <Tag className="w-4 h-4 mr-1" />
                <span>{vendor.category}</span>
              </div>
              <div className="flex items-center mt-2">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={
                      i < vendor.rating ? "text-yellow-400" : "text-gray-300"
                    }
                  >
                    ★
                  </span>
                ))}
              </div>
              <button className="w-full mt-3 bg-green-500 text-white py-2 rounded-md">
                View Page
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

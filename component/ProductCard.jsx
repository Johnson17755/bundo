"use client";

import { Heart } from "lucide-react";
import Image from "next/image";
import { Button } from "@/component/Button";

export function ProductCard({
  title,
  price,
  oldPrice,
  rating,
  reviews,
  image,
}) {
  return (
    <div className="relative group">
      <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 bg-white/80 hover:bg-white"
        >
          <Heart className="h-5 w-5" />
        </Button>
      </div>
      <div className="mt-2">
        <h3 className="text-sm font-medium">{title}</h3>
        <div className="flex items-center mt-1">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={`text-sm ${
                i < rating ? "text-green-700" : "text-gray-200"
              }`}
            >
              ★
            </span>
          ))}
          <span className="text-xs text-gray-500 ml-1">({reviews})</span>
        </div>
        <div className="flex items-center gap-2 mt-1">
          <span className="font-medium">₦{price.toLocaleString()}</span>
          {oldPrice && (
            <span className="text-sm text-gray-500 line-through">
              ₦{oldPrice.toLocaleString()}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

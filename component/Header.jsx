"use client";

import { useState } from "react";
import { Menu, Search, ShoppingCart, User, X } from "lucide-react";
import { Logo } from "@/component/Logo";
import { Button } from "@/component/Button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const categories = [
  "Appliances & Electronic",
  "Jewelry & Accessories",
  "Bags & Luggage",
  "Home & Kitchen",
  "Fashion and Clothing",
  "Sports & Outdoors",
  "Beauty & Health",
  "Automotive",
  "Business, Industry & Science",
  "Tools & Home Improvement",
  "Toys & Games",
  "Office & School Supplies",
  "Arts, Crafts & Sewing",
  "Health & Household",
  "Patio, Lawn & Garden",
  "Baby $ Maternity",
  "Pet Supplies",
  "Musical Instruments",
  "Books",
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  return (
    <>
      {/* Desktop Header */}
      <header className="hidden lg:block border-b border-gray-300">
        <div className="container max-w-5xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Logo />
              <div className="relative group">
                <Button variant="ghost" className="flex items-center">
                  Categories
                </Button>
              </div>
              <Button variant="ghost">Help</Button>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl px-8">
              <div className="relative w-[300px]  border-gray-300">
                <input
                  type="text"
                  placeholder="Search for anything..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-green-50 focus:outline-none focus:ring-2 "
                />
                <Search className="absolute right-3 top-2.5 h-4 w-5 text-green-300" />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Button
                variant="default"
                className="bg-green-800 hover:bg-green-700 text-white"
              >
                Sell on Bundo
              </Button>
              <Button
                variant="outline"
                className="border-green-600 text-green-700"
              >
                Vendor's Store
              </Button>
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5" />
                <span>Account & Orders</span>
              </div>
              <div className="relative">
                <ShoppingCart className="h-6 w-6" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  2
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="lg:hidden border-b border-gray-300">
        <div className="flex items-center justify-between p-4">
          <Button variant="ghost" onClick={() => setIsMenuOpen(true)}>
            <Menu className="h-6 w-6" />
          </Button>
          <Logo />
          <div className="flex items-center space-x-4">
            <Link href="/cart" className="relative">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                2
              </span>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-white z-50 overflow-y-auto ">
            <div className="flex justify-between items-center p-4 border-b-0 pb-12">
              <div className="text-green-500 font-bold text-2xl">
                <Logo />
              </div>
              <div className="flex items-center">
                <Link href="/cart" className="relative mr-3">
                  <ShoppingCart size={24} className="text-green-500" />
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    2
                  </span>
                </Link>
                <button
                  onClick={toggleMenu}
                  aria-label="Close menu"
                  className="text-gray-500"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            <div className="p-4 space-y-3">
              <Link
                href="/signin"
                className="block w-full border border-green-500 text-green-500 py-3 rounded text-center font-medium"
              >
                Sign In
              </Link>

              <Link
                href="/sell"
                className="block w-full bg-[#11381C] text-white py-3 rounded text-center font-medium"
              >
                Sell on Bundo
              </Link>

              <Link
                href="/vendors"
                className="block w-full border border-green-500 text-green-500 py-3 rounded text-center font-medium"
              >
                Vendors Stores
              </Link>
            </div>

            <div className="px-4 pt-4">
              <h2 className="text-green-500 font-medium text-lg mb-2">
                Categories
              </h2>
              <ul className="divide-y">
                {categories.map((category, index) => (
                  <li key={index}>
                    <Link
                      href={`/category/${category
                        .toLowerCase()
                        .replace(/\s+&\s+/g, "-")
                        .replace(/\s+/g, "-")}`}
                      className="flex items-center justify-between py-3 text-gray-800"
                    >
                      <span>{category}</span>
                      <ChevronRight size={20} className="text-gray-400" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

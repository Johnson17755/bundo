import { ProductCard } from "@/component/ProductCard";
import { Carousel } from "@/component/Carousel";
import { Button } from "@/component/Button";
import { Search } from "lucide-react";
import { AmazingDeal } from "./AmazingDeal";
import wear from "@/Assets/Images/wear.png";

const products = Array(10).fill({
  title: "Brown Summer Top",
  price: 3000,
  oldPrice: 4500,
  rating: 5,
  reviews: 121,
  image: wear,
});

export default function Card() {
  return (
    <main>
      <div className="container mx-auto px-4 py-8 space-y-12">
        {/* Mobile Search and Black Friday Banner */}
        <div className="lg:hidden space-y-4">
          <div className="bg-yellow-50 p-4 rounded-lg text-center">
            <h2 className="text-xl font-bold text-yellow-800">
              BLACK FRIDAY DEALS
            </h2>
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="Search for anything..."
              className="w-full px-4 py-2 pr-10 border border-gray-300 bg-green-50 placeholder-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200"
            />
            <Search className="absolute right-3 top-2.5 h-5 w-5 text-green-300" />
          </div>
        </div>

        {/* Featured Items - Desktop Only */}
        <section className="hidden lg:block">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Featured Items</h2>
              <Button variant="link" className="text-green-600">
                see all
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {products.slice(0, 5).map((product, i) => (
                <ProductCard key={i} {...product} />
              ))}
            </div>
          </div>
        </section>

        {/* Biggest Sales */}
        <section>
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Biggest Sales</h2>
            </div>
            <div className="lg:hidden grid grid-cols-2 gap-4">
              {products.slice(0, 4).map((product, i) => (
                <ProductCard key={i} {...product} />
              ))}
            </div>

            <div className="hidden lg:block">
              <Carousel>
                {products.map((product, i) => (
                  <div key={i} className="min-w-[240px] snap-start">
                    <ProductCard {...product} />
                  </div>
                ))}
              </Carousel>

              {/* Amazing deal */}
              <AmazingDeal />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

import BestSellerProductCards from "./BestSellerProductCards";

const products = [
  {
    id: 1,
    name: "Brown Summer Top",
    image: "/placeholder.svg?height=200&width=200",
    description: "Organic cotton, fairtrade certified",
    price: "₦3,000",
    rating: 5,
    reviews: 121,
  },
  {
    id: 2,
    name: "Brown Summer Top",
    image: "/placeholder.svg?height=200&width=200",
    description: "Organic cotton, fairtrade certified",
    price: "₦3,000",
    rating: 5,
    reviews: 121,
  },
  {
    id: 3,
    name: "Brown Summer Top",
    image: "/placeholder.svg?height=200&width=200",
    description: "Organic cotton, fairtrade certified",
    price: "₦3,000",
    rating: 5,
    reviews: 121,
  },
  {
    id: 4,
    name: "Brown Summer Top",
    image: "/placeholder.svg?height=200&width=200",
    description: "Organic cotton, fairtrade certified",
    price: "₦3,000",
    rating: 5,
    reviews: 121,
  },
  {
    id: 5,
    name: "Brown Summer Top",
    image: "/placeholder.svg?height=200&width=200",
    description: "Organic cotton, fairtrade certified",
    price: "₦3,000",
    rating: 5,
    reviews: 121,
  },
  {
    id: 6,
    name: "Brown Summer Top",
    image: "/placeholder.svg?height=200&width=200",
    description: "Organic cotton, fairtrade certified",
    price: "₦3,000",
    rating: 5,
    reviews: 121,
  },
];

export default function BestSeller() {
  return (
    <section className="space-y-4">
      <div className="px-4 py-8 md:hidden">
        <h2 className="text-2xl font-bold">
          Best Sellers in Beauty & Personal Care
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {products.map((product) => (
            <BestSellerProductCards key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

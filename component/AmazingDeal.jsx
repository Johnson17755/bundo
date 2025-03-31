import Image from "next/image";
import makeup from "@/Assets/features/makeup.png";
import val from "@/Assets/features/val.png";
import hunts from "@/Assets/features/hunts.png";
import portraits from "@/Assets/features/custom.png";
import game from "@/Assets/features/game.png";

const amazingDeals = [
  { title: "Beauty & MakeUp", image: makeup },
  { title: "Valentine Special", image: val },
  { title: "Easter Hunts", image: hunts },
  { title: "Custom Portraits", image: portraits },
  { title: "Video Games", image: game },
];

export const AmazingDeal = () => {
  return (
    <section className="hidden lg:block mt-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">
          Amazing deals, updated daily
        </h2>
        <div className="grid grid-cols-5 gap-0">
          {amazingDeals.map((deal, i) => (
            <div key={i} className="text-center">
              <div className="relative w-24 h-24 mx-auto mb-2">
                <Image
                  src={deal.image}
                  alt={deal.title}
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <p className="text-sm font-medium">{deal.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

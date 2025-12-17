import Image from "next/image";

import { Flame, Beef, Wheat, Droplet, ExternalLink } from "lucide-react";

const Card = () => {
  return (
    <div className="flex gap-4 bg-neutral-900 rounded-xl p-4">
      <img
        src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd"
        alt="meal"
        className="w-20 h-20 rounded-full object-cover"
      />

      <div className="flex-1 flex flex-col justify-between">
        <div className="flex items-start justify-between gap-2">
          <h2 className="text-2xl font-semibold leading-snug">
            Mediterranean Lifestyle
          </h2>

          <div className="flex items-center gap-3">
            <StoreBadge imageSource="/images/home/blinkit.png" />
            <StoreBadge imageSource="/images/home/zomato.png" />
            <StoreBadge imageSource="/images/home/youtube.png" />
          </div>
        </div>

        <div className="flex items-center mt-3 text-xs text-neutral-400 divide-x divide-neutral-700">
          <NutritionItem
            icon={<Flame className="w-3 h-3" />}
            label="2,000 kcal"
          />
          <NutritionItem
            icon={<Beef className="w-3 h-3" />}
            label="Protein: 120g"
          />
          <NutritionItem
            icon={<Wheat className="w-3 h-3" />}
            label="Carbs: 200g"
          />
          <NutritionItem
            icon={<Droplet className="w-3 h-3" />}
            label="Fat: 70g"
          />
        </div>
      </div>
    </div>
  );
};

function StoreBadge({ imageSource }: { imageSource: string }) {
  return (
    <button className="flex items-center gap-1 px-2 py-1 rounded-md text-[10px] font-medium border-2 border-[#25AB75]">
      <Image
        src={imageSource}
        alt="Grilled Chicken Strips"
        width={50}
        height={30}
        className="object-cover bg-transparent"
      />
      <div className="border-2 border-[#25AB75] p-1 rounded-md bg-[#25AB7580]">
        <ExternalLink className="w-4 h-4" />
      </div>
    </button>
  );
}

function NutritionItem({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div className="flex items-center gap-1 px-2 first:pl-0">
      {icon}
      <span>{label}</span>
    </div>
  );
}

export default Card;

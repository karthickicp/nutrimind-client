import { ArrowLeft, Heart } from "lucide-react";

import { EXPLORE_DIET_PLAN_TYPE } from "@/lib/constants";

import Card from "./_components/card";

type ExploreDietPlanProps = {
  searchParams: Promise<{
    type?: string;
  }>;
};

async function ExploreDietPlan({ searchParams }: ExploreDietPlanProps) {
  const params = await searchParams;
  const dietType = params?.type ?? EXPLORE_DIET_PLAN_TYPE.ALL_DIETS;

  const getToggleSelectedStyle = (type: string) => {
    return dietType === type
      ? "bg-emerald-500 text-black rounded-full font-medium"
      : "text-neutral-400";
  };

  return (
    <div className="min-h-screen max-w-6xl mx-auto bg-black text-white px-4 pb-24">
      <div className="flex items-center justify-between pt-4">
        <div className="flex items-center gap-3">
          <ArrowLeft className="w-5 h-5 text-white" />
          <h1 className="text-lg font-semibold">Diets</h1>
          <div className="flex  rounded-full p-1 bg-white">
            <button
              className={`px-4 py-1 text-sm ${getToggleSelectedStyle(
                EXPLORE_DIET_PLAN_TYPE.ALL_DIETS
              )} `}
            >
              All Diets
            </button>
            <button
              className={`px-4 py-1 text-sm ${getToggleSelectedStyle(
                EXPLORE_DIET_PLAN_TYPE.MY_DIETS
              )}`}
            >
              My Diets
            </button>
          </div>
        </div>

        <button className="w-9 h-9 rounded-full bg-neutral-900 flex items-center justify-center">
          <Heart className="w-4 h-4" />
        </button>
      </div>

      <div className="mt-6 bg-neutral-900 rounded-xl p-4">
        <h2 className="text-base font-semibold">Explore Diet Plans</h2>
        <p className="text-sm text-neutral-400 mt-1">
          Personalized plans to match your goals and lifestyle.
        </p>
      </div>

      <div className="mt-6 space-y-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <Card key={i} />
        ))}
      </div>
    </div>
  );
}

export default ExploreDietPlan;

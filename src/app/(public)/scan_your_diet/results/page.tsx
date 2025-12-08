import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Mock data based on the image
const macros = [
  {
    label: "Calories",
    value: "2,230 kcal",
    percentage: 75,
    color: "text-purple-500",
    borderColor: "border-purple-500",
  },
  {
    label: "Protein",
    value: "23%",
    subValue: "/100%",
    percentage: 23,
    color: "text-primary",
    borderColor: "border-primary",
  },
  {
    label: "Calories",
    value: "2,230 kcal",
    percentage: 33,
    color: "text-red-500",
    borderColor: "border-red-500",
  },
  {
    label: "Protein",
    value: "23%",
    subValue: "/100%",
    percentage: 23,
    color: "text-cyan-500",
    borderColor: "border-cyan-500",
  },
];

const ingredients = [
  {
    name: "Grilled Chicken Strips",
    cal: "220 kcal",
    p: "30g",
    c: "0g",
    f: "5g",
  },
  { name: "Naan Bread", cal: "220 kcal", p: "30g", c: "0g", f: "5g" },
  {
    name: "Sautéed Bell Peppers (Red & Yellow)",
    cal: "220 kcal",
    p: "30g",
    c: "0g",
    f: "5g",
  },
  { name: "Roasted Zucchini", cal: "150 kcal", p: "10g", c: "12g", f: "2g" },
];

export default function ResultsPage() {
  return (
    <main className="flex-1 flex flex-col p-4 md:p-8 relative container mx-auto max-w-6xl">
      {/* Top Controls */}
      <div className="flex justify-between items-center mb-6">
        <Link
          href="/scan_your_diet"
          className="p-2 hover:bg-white/10 rounded-full transition-colors"
        >
          <ArrowLeft className="w-6 h-6 text-primary" />
        </Link>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-white/5 border-white/10 hover:bg-white/10 w-10 h-10"
        >
          <Heart className="w-5 h-5" />
        </Button>
      </div>

      {/* Unified Card Container */}
      <div className="flex flex-col lg:flex-row w-full bg-[#1E1E1E] rounded-3xl overflow-hidden shadow-2xl min-h-[600px]">
        {/* Left Panel: Image and Summary */}
        <div className="flex-1 p-6 md:p-8 flex flex-col gap-6 bg-[#1A1A1A]">
          <div className="flex-1 flex flex-row gap-6">
            <div className="relative w-1/2 aspect-square rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/scanned_diet.png"
                alt="Grilled Chicken Strips"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <h1 className="text-xl md:text-2xl font-bold leading-tight">
                Grilled Chicken Strips served over Quinoa with Roasted Seasonal
                Vegetables
              </h1>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 justify-items-center mt-auto">
            {macros.map((m, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center bg-[#252525] rounded-full w-28 h-28 relative border-4 border-[#333]"
              >
                <div
                  className={`absolute inset-0 rounded-full border-4 ${m.borderColor} border-t-transparent -rotate-45`}
                  style={{ opacity: 0.8 }}
                ></div>

                <span className="text-gray-400 text-xs">{m.label}</span>
                <span className={`text-lg font-bold ${m.color}`}>
                  {m.value}
                </span>
                {m.subValue && (
                  <span className="text-[10px] text-gray-500">
                    {m.subValue}
                  </span>
                )}
              </div>
            ))}
          </div>

          <Button className="w-full bg-primary hover:bg-emerald-600 text-white font-semibold py-6 text-lg rounded-xl mt-4">
            Okay
          </Button>
        </div>

        {/* Right Panel: Ingredients List */}
        <div className="flex-1 bg-[#4F4B4B] p-6 md:p-8 flex flex-col gap-4 overflow-y-auto max-h-[800px]">
          {ingredients.map((item, i) => (
            <div
              key={i}
              className="bg-black p-5 rounded-2xl border border-white/5 opacity-80 hover:opacity-100 transition-opacity"
            >
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                {item.name}
              </h3>
              <div className="text-gray-400 text-xs md:text-sm flex flex-wrap gap-2 md:gap-3">
                <span>{item.cal}</span>
                <span className="hidden md:inline">|</span>
                <span>Protein: {item.p}</span>
                <span className="hidden md:inline">|</span>
                <span>Carbs: {item.c}</span>
                <span className="hidden md:inline">|</span>
                <span>Fat: {item.f}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

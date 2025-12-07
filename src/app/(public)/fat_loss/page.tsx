"use client";

import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, Flame } from "lucide-react";

type Exercise = {
  id: number;
  dayLabel: string;
  title: string;
  minutes: number;
  calories: number;
  description: string;
  imageBg: string;
};

const EXERCISES: Exercise[] = [
  {
    id: 1,
    dayLabel: "DAY1",
    title: "One-Legged King Pigeon Pose",
    minutes: 15,
    calories: 500,
    description:
      "Do you love yoga, but you’re not in the mood to break a sweat every time you sit at the mat? Maybe you just want to meditate and stretch, to contemplate your day and wish your cares away for a moment. This session focuses on calm, mindful stretching.",
    imageBg: "bg-emerald-700",
  },
  {
    id: 2,
    dayLabel: "DAY2",
    title: "Full Body Stretch",
    minutes: 15,
    calories: 500,
    description:
      "A gentle full body stretch designed to release tension from shoulders, hips, and lower back. Perfect after long desk hours or to wind down before sleep, helping your muscles recover and your mind relax.",
    imageBg: "bg-emerald-800",
  },
];

export default function TrainerConnectPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* TOP BAR */}
      <header className="border-b border-emerald-500/60 px-4 py-4 md:px-8">
        <div className="max-w-6xl mx-auto flex items-center gap-3">
          {/* Back arrow */}
          <button
            aria-label="Go back"
            className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-white/10"
          >
            <ArrowLeft size={20} />
          </button>

          {/* Title + underline */}
          <div className="inline-flex flex-col">
            <span className="text-xl md:text-2xl font-semibold">
              Trainer Connect
            </span>
            <span className="mt-1 h-[3px] w-24 rounded-full bg-emerald-500" />
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-1 px-4 md:px-8 py-6 pb-32">
        <div className="max-w-6xl mx-auto space-y-10">
          {EXERCISES.map((ex, idx) => (
            <div key={ex.id}>
              {/* Row */}
              <article
                className="
                  flex flex-col md:flex-row
                  gap-6 md:gap-10
                  items-center md:items-start
                "
              >
                {/* LEFT: Illustration placeholder */}
                <div
                  className={`
                    ${ex.imageBg}
                    rounded-[999px] md:rounded-[120px]
                    w-full md:w-72
                    aspect-4/3
                    flex items-center justify-center max-w-1/2 md:max-w-auto
                  `}
                >
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-black/40" />
                </div>

                <div className="flex-1 w-full">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="inline-flex items-center rounded-md bg-emerald-500 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-black">
                      {ex.dayLabel}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                      {ex.title}
                    </h2>
                  </div>

                  <div className="flex flex-wrap items-center gap-6 text-sm text-white/80 mb-3">
                    <span className="inline-flex items-center gap-2">
                      <Clock size={16} />
                      {ex.minutes} Minutes
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <Flame size={16} />
                      {ex.calories} calories Burned
                    </span>
                    <Badge className="bg-emerald-500 text-white font-semibold rounded-sm">
                      Monthly Subscription plan
                    </Badge>
                  </div>

                  <p className="text-sm md:text-base text-white/80 leading-relaxed max-w-3xl">
                    {ex.description}
                  </p>
                </div>
              </article>

              {idx !== EXERCISES.length - 1 && (
                <div className="mt-8 h-[2px] w-full bg-emerald-500" />
              )}
            </div>
          ))}
        </div>
      </main>

      {/* FOOTER */}
      {/* Your existing “Plan now” footer goes here, e.g. <PlanNowFooter /> */}
    </div>
  );
}

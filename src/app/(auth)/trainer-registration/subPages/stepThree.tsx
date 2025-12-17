"use client";

import React, { useMemo, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

const OFFER_OPTIONS = ["Diets", "Workout", "Both"] as const;
type OfferOption = (typeof OFFER_OPTIONS)[number];

const CAPACITY_LABELS = ["Tiny", "Small", "Medium", "Large"];

export default function TrainerRegistrationStepThree() {
  const [offer, setOffer] = useState<OfferOption | null>("Diets");
  const [capacityIndex, setCapacityIndex] = useState<number>(2); // default Medium (index 2)
  const [aiEnabled, setAiEnabled] = useState(false);

  const sliderRef = useRef<HTMLInputElement | null>(null);

  // compute thumb position percent (for floating label)
  const thumbPercent = useMemo(() => {
    const max = CAPACITY_LABELS.length - 1;
    return (capacityIndex / max) * 100;
  }, [capacityIndex]);

  // form validity
  const isValid = !!offer;

  function onOfferKeyDown(e: React.KeyboardEvent, idx: number) {
    // support left/right arrow to move selection
    if (e.key === "ArrowRight") {
      e.preventDefault();
      const next = (idx + 1) % OFFER_OPTIONS.length;
      setOffer(OFFER_OPTIONS[next]);
      const el = document.getElementById(`offer-${next}`);
      el?.focus();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      const prev = (idx - 1 + OFFER_OPTIONS.length) % OFFER_OPTIONS.length;
      setOffer(OFFER_OPTIONS[prev]);
      const el = document.getElementById(`offer-${prev}`);
      el?.focus();
    }
  }

  return (
    <div className=" bg-black text-white px-4 py-10">
      <div className=" bg-black text-white flex items-stretch">
        {/* Left image / illustration */}
        <div className="hidden lg:flex lg:w-1/3 bg-[url('/images/trainer-reg-left-bg.png')] bg-cover bg-center items-end justify-center rounded-tl-[60px] rounded-bl-[60px]">
          {/* Overlay small welcome card (optional) */}
          <div className="p-4 text-center">
            <div className="bg-black/50 rounded-xl py-6 px-4 mb-4 border-2 border-white">
              <h3 className="text-2xl font-semibold text-white">
                Welcome Back!
              </h3>
              <p className="mt-2 text-sm text-white/80">
                Please sign in to enjoy the stress-free and tension-free life!
              </p>
              <button className="mt-4 w-full rounded-lg border border-white/30 py-2 text-sm">
                Sign Up
              </button>
            </div>
          </div>
        </div>

        {/* Right form */}
        <div className="max-w-3xl mx-auto">
          {/* Header + stepper */}
          <header className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-bold">
              Trainer Registration
            </h1>

            <div className="flex items-center justify-center gap-6 mt-6">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-emerald-500 flex items-center justify-center">
                  1
                </div>
                <div className="h-0.5 w-16 bg-white/10" />
                <div className="h-9 w-9 rounded-full bg-emerald-500 flex items-center justify-center">
                  2
                </div>
                <div className="h-0.5 w-16 bg-white/10" />
                <div className="h-9 w-9 rounded-full bg-emerald-500 flex items-center justify-center">
                  3
                </div>
              </div>
            </div>
          </header>

          {/* Main card */}
          <section className="bg-[#070707] rounded-xl p-6 md:p-8">
            {/* What do you offer? (segmented control) */}
            <div className="mb-8">
              <label className="block text-sm mb-3">What do you offer?</label>

              {/* wrapper for visual track */}
              <div
                role="radiogroup"
                aria-label="What do you offer"
                className="relative rounded-full bg-white/5 p-1 flex items-center gap-2"
              >
                {/* Selected pill indicator (animated) */}
                <div
                  aria-hidden
                  className="absolute top-1/2 -translate-y-1/2 h-14 bg-emerald-500 rounded-full transition-all duration-200"
                  style={{
                    // compute width and left based on number of options:
                    width: `${100 / OFFER_OPTIONS.length}%`,
                    left: `${
                      (OFFER_OPTIONS.indexOf(offer ?? "Diets") /
                        OFFER_OPTIONS.length) *
                      100
                    }%`,
                  }}
                />

                {OFFER_OPTIONS.map((opt, idx) => {
                  const selected = offer === opt;
                  return (
                    <button
                      id={`offer-${idx}`}
                      key={opt}
                      role="radio"
                      aria-checked={selected}
                      tabIndex={0}
                      onKeyDown={(e) => onOfferKeyDown(e, idx)}
                      onClick={() => setOffer(opt)}
                      className={`relative z-10 flex-1 text-center px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-colors ${
                        selected ? "text-black font-semibold" : "text-white/80"
                      }`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Trainee capacity slider */}
            <div className="mb-8">
              <label className="block text-sm mb-3">Trainee capacity</label>

              <div className="relative pt-6">
                {/* floating label */}
                <div
                  className="absolute -top-3 transform -translate-x-1/2 px-3 py-1 rounded-md bg-emerald-500 text-black text-xs font-semibold transition-all"
                  style={{ left: `${thumbPercent}%` }}
                  aria-hidden
                >
                  {CAPACITY_LABELS[capacityIndex]}
                </div>

                {/* track */}
                <div className="h-3 rounded-full bg-white/10 overflow-hidden">
                  <div
                    className="h-3 bg-linear-to-r from-emerald-500 to-emerald-700 transition-all"
                    style={{ width: `${thumbPercent}%` }}
                  />
                </div>

                {/* range input (invisible track; thumb visible) */}
                <input
                  ref={sliderRef}
                  aria-label="Trainee capacity"
                  role="slider"
                  aria-valuemin={0}
                  aria-valuemax={CAPACITY_LABELS.length - 1}
                  aria-valuenow={capacityIndex}
                  aria-valuetext={CAPACITY_LABELS[capacityIndex]}
                  type="range"
                  min={0}
                  max={CAPACITY_LABELS.length - 1}
                  step={1}
                  value={capacityIndex}
                  onChange={(e) => setCapacityIndex(Number(e.target.value))}
                  className="absolute inset-0 h-full w-full appearance-none bg-transparent pointer-events-auto"
                  style={{ top: 0 }}
                />

                {/* tick marks + labels */}
                <div className="mt-3 flex justify-between text-xs text-white/60 px-1">
                  {CAPACITY_LABELS.map((l) => (
                    <div key={l} className="text-center w-1/4">
                      {l}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* AI Assistance card */}
            <div className="mb-8">
              <div className="rounded-xl border border-white/10 p-4 flex flex-col md:flex-row items-center gap-4">
                {/* Left: illustration placeholder */}
                <div className="shrink-0">
                  <div className="w-28 h-28 rounded-full bg-emerald-700 flex items-center justify-center">
                    {/* Illustrative placeholder — replace with SVG */}
                    <span className="text-black font-bold">AI</span>
                  </div>
                </div>

                {/* Body */}
                <div className="flex-1">
                  <div className="text-xl font-semibold text-emerald-400">
                    AI Assistance
                  </div>
                  <div className="text-sm text-white/70 mt-1">
                    Enable AI to help manage your plans.
                  </div>
                  <div className="text-xs text-white/50 mt-2">
                    When enabled, AI can suggest meal/workout templates and
                    auto-schedule trainees.
                  </div>
                </div>

                {/* Toggle */}
                <div className="shrink-0">
                  <button
                    role="switch"
                    aria-checked={aiEnabled}
                    onClick={() => setAiEnabled((s) => !s)}
                    className={`w-16 h-9 rounded-full p-1 flex items-center transition-colors ${
                      aiEnabled ? "bg-emerald-500" : "bg-white/10"
                    }`}
                    aria-label="Toggle AI assistance"
                  >
                    <div
                      className={`w-8 h-8 rounded-full bg-white shadow transform transition-transform ${
                        aiEnabled ? "translate-x-7" : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Submit */}
            <div>
              <button
                type="button"
                disabled={!isValid}
                onClick={() => {
                  // submit action — replace this with real submit
                  alert(
                    `Submitted: offer=${offer}, capacity=${CAPACITY_LABELS[capacityIndex]}, ai=${aiEnabled}`
                  );
                }}
                className={`w-full h-[60px] rounded-xl flex items-center justify-center gap-3 font-semibold transition ${
                  isValid
                    ? "bg-emerald-500 text-black"
                    : "bg-white/10 text-white/60 cursor-not-allowed"
                }`}
              >
                <span>Submit</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

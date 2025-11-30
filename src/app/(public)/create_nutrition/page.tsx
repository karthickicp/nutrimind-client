"use client";

export default function NutriMindLanding() {
  return (
    <div className="min-h-screen bg-black text-white antialiased">
      {/* HERO */}

      <section className="max-w-6xl mx-auto px-6 md:px-8 py-20">
        <div className="text-center">
          <h1 className="max-w-[1100px] mx-auto text-3xl sm:text-4xl md:text-[4.125rem] font-extrabold ">
            Let’s create your diet plan
          </h1>

          <p className="mt-6 mx-auto text-lg md:text-xl leading-8 tracking-wide text-white/50 md:max-w-[70%]">
            Nutrimind bridges that gap, giving both trainers and fitness lovers
            the insight and tools they need to grow smarter together.
          </p>
        </div>

        {/* FEATURE GRID */}

        <div className="planner-wrapper flex items-center flex-wrap gap-9 my-20 justify-center">
          <div className="planner-card flex items-center gap-4 text-[28px] p-4 rounded-lg border border-[#D9D9D9] bg-[#4F4B4B] hover:border-2 hover:border-[#FFE642]">
            <span>🍱</span>
            <p className="text-2xl font-semibold tracking-wider">
              AI Diet Planner
            </p>
          </div>
          <div className="planner-card flex items-center gap-4 text-[28px] p-4 rounded-lg border border-[#D9D9D9] bg-[#4F4B4B] hover:border-2 hover:border-[#FFE642]">
            <span>🧠</span>
            <p className="text-2xl font-semibold tracking-wider">
              AI Diet & Wellness Coach Planner
            </p>
          </div>
          <div className="planner-card flex items-center gap-4 text-[28px] p-4 rounded-lg border border-[#D9D9D9] bg-[#4F4B4B] hover:border-2 hover:border-[#FFE642]">
            <span>🧘</span>
            <p className="text-2xl font-semibold tracking-wider">
              AI Fitness & Fat-Loss Guide
            </p>
          </div>
          <div className="planner-card flex items-center gap-4 text-[28px] p-4 rounded-lg border border-[#D9D9D9] bg-[#4F4B4B] hover:border-2 hover:border-[#FFE642]">
            <span>🏋️</span>
            <p className="text-2xl font-semibold tracking-wider">
              Trainer Connect
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

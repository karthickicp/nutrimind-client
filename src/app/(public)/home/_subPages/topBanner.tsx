import { Button } from "@/components/ui/button";

export const TopBanner = () => {
  return (
    <>
      {/* Hero Section */}
      <main className="container-max">
        <div className="grid lg:grid-cols-2 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8">
            <div className="inline-flex items-center gap-2  border-none rounded-full px-2 py-2 bg-white/10">
              <span className="bg-emerald-500 text-black px-2 py-0.5 rounded-full text-xs">
                NEW
              </span>
              <span className="text-sm text-gray-300 mx-2">
                High Intensity workout to burn calories
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-[72px] leading-14 md:leading-16 lg:leading-18  xl:leading-20 font-semibold">
              Fitness isn&apos;t just about training, it&apos;s about
              understanding
            </h1>

            <p className="text-gray-400 text-lg max-w-xl">
              Nutrimind bridges that gap, giving both trainers and fitness
              lovers the insight and tools they need to grow smarter together.
            </p>

            <div className="flex flex-col sm:flex-row gap-12">
              <Button className="h-auto border-none bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-4 text-base">
                {/* <Search className="mr-2 h-5 w-5" /> */}
                Scan Your Meal
              </Button>
              <Button
                variant="outline"
                className="h-auto bg-white/10 border-none text-white hover:bg-white/30 px-6 py-4 text-base "
              >
                AI-Powered Nutrition
              </Button>
            </div>
          </div>

          {/*right corner:  image plate */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-3xl">
              {/* Base Image */}
              <img
                src="/images/home/diet.png"
                alt="Veg Plate"
                className="w-full object-contain lg:max-w-[550px]"
              />

              {/* ----------- TOP LEFT BADGE ----------- */}
              <div className="absolute top-6 left-6 bg-black/50 backdrop-blur-md px-4 py-3 rounded-3xl flex items-center gap-3 shadow-lg shadow-black/40">
                <div className="h-9 w-9 rounded-full bg-white/15 border border-white/30 flex items-center justify-center text-white text-sm font-semibold">
                  N
                </div>

                <div className="text-white leading-tight">
                  <div className="text-xs uppercase tracking-widest text-white/70">
                    See What’s Inside
                  </div>
                  <div className="text-sm font-semibold">Your Plate</div>
                </div>
              </div>

              {/* ----------- TOP RIGHT — CALORIES POINTER ----------- */}
              <div className="absolute top-24 right-4 flex items-start">
                {/* ARROW (left → down → dot) */}
                <div className="">
                  {/* Horizontal line */}
                  <div className="h-0.5 w-[15vw] bg-white/80 translate-y-2"></div>

                  {/* Vertical line */}
                  <div className="w-0.5 h-[9vw] bg-white/80 absolute top-2.5"></div>

                  {/* Dot placed exactly on the carrot */}
                  <div className="h-3 w-3 rounded-full bg-white absolute top-[180px]"></div>
                </div>

                {/* Bubble */}
                <div className="bg-black/55 backdrop-blur-md px-5 py-3 rounded-3xl text-white shadow-md shadow-black/40 ">
                  <div className="text-lg font-semibold leading-none">
                    120 kcal
                  </div>
                  <div className="text-[11px] uppercase tracking-widest text-white/70 mt-1">
                    Calories
                  </div>
                </div>
              </div>

              {/* ----------- BOTTOM RIGHT — WATER CONTENT POINTER ----------- */}
              <div className="absolute bottom-10 right-20 flex items-end gap-2">
                {/* ARROW (right → up → dot) */}
                <div className="flex flex-col items-center">
                  {/* Dot on green veggie */}
                  <div className="h-3 w-3 rounded-full bg-white mb-1"></div>

                  {/* Vertical line upward */}
                  <div className="w-[2px] h-20 bg-white/80"></div>

                  {/* Horizontal line outward */}
                  <div className="h-[2px] w-16 bg-white/80"></div>
                </div>

                {/* Bubble */}
                <div className="bg-black/55 backdrop-blur-md px-5 py-3 rounded-3xl text-white shadow-md shadow-black/40">
                  <div className="text-lg font-semibold leading-none">85%</div>
                  <div className="text-[11px] uppercase tracking-widest text-white/70 mt-1">
                    Water content
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

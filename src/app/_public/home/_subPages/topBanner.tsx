import { Button } from "@/components/ui/button";

export const TopBanner = () => {
  return (
    <>
      {/* Hero Section */}
      <main className="container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
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

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-[66px] font-semibold leading-20">
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
        </div>
      </main>
    </>
  );
};

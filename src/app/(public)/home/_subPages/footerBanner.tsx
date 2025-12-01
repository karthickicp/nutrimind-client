import { Button } from "@/components/ui/button";
import React from "react";

export const FooterBanner = () => {
  return (
    <section className="container">
      <div className="space-y-8">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold md:leading-16 text-[#D9D9D9]">
          Transform how you train, <br />
          eat, and grow — with NutriMind.
        </h2>

        {/* Banner with Image and Button */}
        <div className="relative rounded-3xl overflow-hidden">
          <img
            src={"/images/home/footer_banner.png"}
            alt="Transform your lifestyle with NutriMind - training, nutrition, and growth"
            className="w-full h-[250px] md:h-[350px] lg:h-[400px] object-cover"
          />

          {/* Download Button Overlay */}
          <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 lg:bottom-10 lg:right-10">
            <Button className=" h-auto text-2xl bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-6 rounded-lg shadow-2xl font-semibold lg:min-w-[300px]">
              Download Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

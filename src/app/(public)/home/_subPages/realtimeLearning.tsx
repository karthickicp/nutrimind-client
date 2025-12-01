"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const RealtimeLearning = () => {
  return (
    <section className=" container ">
      <h2 className="text-3xl md:text-4xl lg:text-5xl mb-12 font-semibold max-w-[600px] leading-16 text-[#D1D1D6]">
        Smart nutrition meets real-time learning
      </h2>

      <div>
        <Carousel
          opts={{
            // align: "start",
            loop: true,
          }}
          orientation="vertical"
          className="w-full"
        >
          <CarouselContent className="h-[350px]">
            {Array.from({ length: 3 }).map((_, index) => (
              <CarouselItem key={index} className="rounded-lg h-full">
                <img
                  src={`/images/home/how_it_works_img_${index + 1}.png`}
                  alt=""
                  className="rounded-lg object-cover w-full h-full"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

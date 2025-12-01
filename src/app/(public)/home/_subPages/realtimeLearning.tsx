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
      <h2 className="sub-title text-[#D1D1D6] max-w-[600px]">
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

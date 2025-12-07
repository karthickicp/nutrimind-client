"use client";

import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  /* CarouselNext,
  CarouselPrevious, */
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

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
          className="w-full flex flex-row gap-8"
          plugins={[
            Autoplay({
              delay: 5000,
              stopOnFocusIn: true,
              stopOnMouseEnter: true,
            }),
          ]}
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
          {/* <CarouselPrevious />
          <CarouselNext /> */}
          <CarouselDots
            className="justify-center md:justify-around py-4 flex-col"
            dotClassName="w-[14px] h-[14px]"
          />
        </Carousel>
      </div>
    </section>
  );
};

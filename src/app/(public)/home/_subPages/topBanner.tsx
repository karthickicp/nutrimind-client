"use client";

import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export const TopBanner = () => {
  const dietImgRef = useRef<HTMLImageElement>(null);

  const [pointerPositions, setPointerPositions] = useState({
    item1: {
      dot: { top: 0, left: 0 },
      h_line: { width: 0 },
      v_line: { height: 0 },
      content: { top: 0, right: 0 },
    },
    item2: {
      dot: { top: 0, left: 0 },
      h_line: { width: 0 },
      v_line: { height: 0 },
      content: { bottom: 0, right: 0 },
    },
  });

  useEffect(() => {
    const handleResize = () => {
      if (!dietImgRef.current) return;

      const imgWidth = dietImgRef.current.width;
      const imgHeight = dietImgRef.current.height;

      const itemOneDotTop = imgHeight * 0.15; // 15% from top
      const itemOneHLine1Width = imgWidth * 0.26; // 26% width
      const itemOneVLineHeight = imgHeight * 0.15; // 15% height

      const itemTwoDotTop = imgHeight * 0.675; // 60% from top (vertical position of dot)
      const itemTwoVLineHeight = imgHeight * 0.15; // length of vertical line (18% of height)
      const itemTwoHLineWidth = imgWidth * 0.28; // horizontal line length (27% of width)

      setPointerPositions({
        item1: {
          dot: {
            top: itemOneDotTop,
            left: imgWidth * 0.7 - itemOneHLine1Width,
          },
          h_line: {
            width: itemOneHLine1Width,
          },
          v_line: {
            height: itemOneVLineHeight,
          },
          content: {
            top: imgHeight * 0.1,
            right: imgWidth * 0,
          },
        },
        item2: {
          dot: {
            top: itemTwoDotTop,
            left: imgWidth * 0.66 - itemTwoHLineWidth,
          },
          h_line: {
            width: itemTwoHLineWidth,
          },
          v_line: {
            height: itemTwoVLineHeight,
          },
          content: {
            bottom: imgHeight * 0.05, // 5% from bottom
            right: imgWidth * 0.03, // 3% from right
          },
        },
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className="container-max">
      <div className="grid lg:grid-cols-2 items-center gap-12 lg:gap-0">
        {/* LEFT SIDE CONTENT (unchanged) */}
        <div className="space-y-6 lg:space-y-8">
          <div className="inline-flex items-center gap-2 border-none rounded-full px-2 py-2 bg-white/10">
            <span className="bg-emerald-500 text-black px-2 py-0.5 rounded-full text-xs">
              NEW
            </span>
            <span className="text-sm text-gray-300 mx-2">
              High Intensity workout to burn calories
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-[72px] leading-14 md:leading-16 lg:leading-18 xl:leading-20 font-semibold">
            Fitness isn&apos;t just about training, it&apos;s about
            understanding
          </h1>

          <p className="text-gray-400 text-lg max-w-xl">
            Nutrimind bridges that gap, giving both trainers and fitness lovers
            the insight and tools they need to grow smarter together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-12">
            <Link href="/scan_your_diet">
              <Button className="btn-primary btn-lg">
                <Search />
                Scan Your Meal
              </Button>
            </Link>
            <Link href="/create_diet_plan">
              <Button variant="outline" className="btn-secondary btn-lg">
                AI-Powered Nutrition
              </Button>
            </Link>
          </div>
        </div>

        {/* RIGHT: IMAGE + POINTERS */}
        <div className="flex items-center justify-center lg:justify-start">
          <div className="relative w-full max-w-[600px]">
            <img
              src="/images/home/diet.png"
              alt="Veg Plate"
              className="w-full object-contain"
              ref={dietImgRef}
            />
            {/* -------- TOP LEFT BADGE -------- */}
            <div className="absolute bg-[#4F4B4B]/70 rounded-3xl text-white px-3 py-2 md:px-5 md:py-4 flex items-center gap-3 top-[-5%] left-0 sm:top-0 sm:left-[0%] lg:top-[-5%] lg:left-[-20%]">
              <div className="h-9 w-9 rounded-full bg-white/15 border border-white/30 flex items-center justify-center text-white text-sm font-semibold">
                N
              </div>
              <div className="text-white md:text-xl">
                See What’s Inside <br /> Your Plate
              </div>
            </div>
            {/* -------- TOP RIGHT POINTER (120 kcal) -------- */}
            <div
              className="absolute"
              style={{
                top: `${pointerPositions.item1.dot.top}px`,
                left: `${pointerPositions.item1.dot.left}px`,
              }}
            >
              <div
                className="h-0.5 bg-white/80 translate-y-2"
                style={{ width: `${pointerPositions.item1.h_line.width}px` }}
              />
              <div
                className="w-0.5 bg-white/80 absolute top-2.5"
                style={{ height: `${pointerPositions.item1.v_line.height}px` }}
              />
              <div
                className="h-3 w-3 rounded-full bg-white absolute"
                style={{
                  top: `${pointerPositions.item1.dot.top}px`,
                  left: "-5px",
                }}
              />
            </div>
            <div
              className="bg-[#4F4B4B]/70 rounded-3xl text-white absolute px-3 py-2 lg:px-5 lg:py-3 w-[30%]"
              style={{
                top: `${pointerPositions.item1.content.top}px`,
                right: `${pointerPositions.item1.content.right}px`,
              }}
            >
              <div>
                <h5 className="text-2xl sm:text-[2.5rem] font-semibold text-[#FFE642] w-full float-left">
                  120
                  <sup className="text-md sm:text-lg text-white font-normal">
                    kcal
                  </sup>
                </h5>
                <p className="text-[13px] tracking-widest text-white">
                  Calories
                </p>
              </div>
            </div>
            {/* -------- BOTTOM RIGHT POINTER (85% Water) -------- */}
            <div
              className="absolute"
              style={{
                top: `${pointerPositions.item2.dot.top}px`,
                left: `${pointerPositions.item2.dot.left}px`,
              }}
            >
              <div className="h-3 w-3 rounded-full bg-white absolute" />

              <div
                className="w-0.5 bg-white/80 absolute"
                style={{
                  top: "12px",
                  left: "5px",
                  height: `${pointerPositions.item2.v_line.height}px`,
                }}
              />

              <div
                className="h-0.5 bg-white/80 absolute"
                style={{
                  top: `${12 + pointerPositions.item2.v_line.height}px`,
                  left: "5px",
                  width: `${pointerPositions.item2.h_line.width}px`,
                }}
              />
            </div>

            <div
              className="bg-[#4F4B4B]/70 rounded-3xl text-white absolute px-4 py-3 lg:px-5 lg:py-3 w-[30%]"
              style={{
                bottom: `${pointerPositions.item2.content.bottom}px`,
                right: `${pointerPositions.item2.content.right}px`,
              }}
            >
              <div>
                <span className="text-2xl sm:text-[2.5rem] font-semibold text-[#2EDCD6]">
                  85%
                </span>
                <p className="text-[13px] tracking-widest text-white">
                  Water Content
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

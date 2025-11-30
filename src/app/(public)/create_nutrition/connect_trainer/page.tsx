// AiFitnessForm.tsx
"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { SelectItem } from "@/components/ui/select";
import { ChevronLeft } from "lucide-react"; // optional icon lib
import { SelectBox } from "@/components/common/selectBox";

export default function AiFitnessForm() {
  return (
    <div className="min-h-screen  text-white p-6 md:p-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <button
            aria-label="back"
            className="p-2 rounded-full text-emerald-400 hover:bg-white/5"
          >
            <ChevronLeft size={20} />
          </button>

          <div>
            <h2 className="text-2xl font-semibold pe-4">
              AI Fitness & Fat-Loss Guide
            </h2>
            <div
              className="mt-2 h-[3px] rounded-full bg-emerald-400"
              aria-hidden
            />
          </div>
        </div>

        {/* Card */}
        <Card className="bg-transparent border-2 border-[#312D2D] rounded-3xl">
          <CardContent className="p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                {/* Current Weight */}
                <div>
                  <Label className="text-md text-white/80 mb-2 block font-medium">
                    Current Weight
                  </Label>
                  <SelectBox defaultValue="88">
                    <SelectItem value="88">88</SelectItem>
                    <SelectItem value="85">85</SelectItem>
                    <SelectItem value="90">90</SelectItem>
                  </SelectBox>
                </div>

                {/* Target Weight */}
                <div>
                  <Label className="text-md text-white/80 mb-2 block font-medium">
                    Target Weight
                  </Label>
                  <SelectBox defaultValue="60">
                    <SelectItem value="60">60</SelectItem>
                    <SelectItem value="65">65</SelectItem>
                    <SelectItem value="70">70</SelectItem>
                  </SelectBox>
                </div>

                {/* Timeframe */}
                <div>
                  <Label className="text-md text-white/80 mb-2 block font-medium">
                    Timeframe
                  </Label>
                  <SelectBox defaultValue="2m">
                    <SelectItem value="1m">1 Month</SelectItem>
                    <SelectItem value="2m">2 Months</SelectItem>
                    <SelectItem value="3m">3 Months</SelectItem>
                    <SelectItem value="6m">6 Months</SelectItem>
                  </SelectBox>
                </div>

                {/* Activity Level */}
                <div>
                  <Label className="text-md text-white/80 mb-2 block font-medium">
                    Activity Level
                  </Label>
                  <SelectBox defaultValue="sedentary">
                    <SelectItem value="sedentary">Sedentary</SelectItem>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="moderate">Moderate</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                  </SelectBox>
                </div>

                {/* Preferred Workout - full width on left column */}
                <div className="md:col-span-2 lg:col-span-1">
                  <Label className="text-md text-white/80 mb-2 block font-medium">
                    Preferred Workout
                  </Label>
                  <SelectBox defaultValue="gym">
                    <SelectItem value="gym">Gym</SelectItem>
                    <SelectItem value="home">Home</SelectItem>
                    <SelectItem value="yoga">Yoga</SelectItem>
                    <SelectItem value="running">Running</SelectItem>
                  </SelectBox>
                </div>
              </div>

              {/* CTA (full width) */}
              <div className="mt-6">
                <Button
                  className="w-full bg-gray-300 text-black/90 hover:brightness-95 rounded-lg py-4 font-semibold text-lg"
                  onClick={(e) => {
                    e.preventDefault();
                    // TODO: call generator
                    console.log("Generate Diet clicked");
                  }}
                >
                  Generate Diet
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";

import Link from "next/link";

import { ArrowLeft, User, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function DietCalculationPage() {
  const [formData, setFormData] = useState({
    weight: "",
    height: "",
    age: "",
    goalType: "",
    allergy: "",
    activity: "",
    religion: "",
    category: "",
    state: "",
  });

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Helper to render input with label and visual arrow
  const RenderField = ({
    label,
    field,
    type = "text",
    placeholder = "",
  }: {
    label: string;
    field: string;
    type?: string;
    placeholder?: string;
  }) => (
    <div className="space-y-2">
      <label className="text-sm font-medium text-white ml-1">{label}</label>
      <div className="relative">
        <Input
          type={type}
          value={(formData as any)[field]}
          onChange={(e) => updateField(field, e.target.value)}
          placeholder={placeholder}
          className="bg-transparent border-gray-500 text-gray-300 h-10 rounded-lg pr-10 hover:border-gray-400 focus:border-primary transition-colors"
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
          <ChevronDown className="w-4 h-4" />
        </div>
      </div>
    </div>
  );

  return (
    <main className="flex-1 container mx-auto px-4 py-8 md:px-12 md:py-12 max-w-7xl">
      {/* Page Title */}
      <div className="flex items-center gap-4 mb-4 md:mb-8">
        <Link
          href="/"
          className="hover:bg-white/10 p-2 rounded-full transition-colors"
        >
          <ArrowLeft className="w-6 h-6 text-primary" />
        </Link>
        <h1 className="text-3xl md:text-4xl font-semibold">Diet Calculation</h1>
      </div>

      {/* Form Card */}
      <div className="w-full rounded-tr-3xl rounded-tl-xl overflow-hidden shadow-2xl">
        {/* Card Header */}
        <div className="bg-[#9CA3AF] p-4 flex items-center gap-4">
          <div className="bg-blue-100 p-2 rounded-full">
            <User className="w-5 h-5 text-blue-500" />
          </div>
          <div>
            <h2 className="text-black font-bold text-lg leading-tight">
              Personal Details
            </h2>
            <p className="text-white text-xs font-medium tracking-wider">
              COMPULSORY
            </p>
          </div>
        </div>

        {/* Card Body */}
        <div className="bg-[#3b3838] p-6 md:p-12 space-y-8 min-h-[500px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <RenderField label="Weight (kg)" field="weight" type="number" />
            <RenderField label="Height (cm)" field="height" type="number" />
            <RenderField label="Age" field="age" type="number" />

            <RenderField label="Goal Type" field="goalType" />
            <RenderField label="Allergy" field="allergy" />
            <RenderField label="Activity / Gym" field="activity" />

            {/* Religion - Optional */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-white ml-1">
                Religion
              </label>
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Optional"
                  value={formData.religion}
                  onChange={(e) => updateField("religion", e.target.value)}
                  className="bg-transparent border-gray-500 text-gray-300 h-10 rounded-lg placeholder:text-gray-500"
                />
                {/* Design shows inputs generally look similar, but for explicit 'Optional' text inputs in previous design, did they have arrows? 
                     The image shows arrows on Goal Type, Allergy etc. 
                     Religion and State in previous turn I made Inputs. 
                     I will render Religion and State WITHOUT the arrow if they are purely free text in user's mind, 
                     but earlier image showed arrows on almost everything except maybe the last row? 
                     Let's check the image 'diet_calculation_page_1765113143705.png'. 
                     Actually, looking at the layout, Religion and State seem to be simple inputs. 
                     The user said "donot add select field". 
                     I will leave Religion and State as simple inputs without arrows to distinguish them if that matches better, 
                     OR add arrows if consistency is key. 
                     I'll stick to simple inputs for Religion and State (no arrow) as they were originally Inputs and likely don't imply "Selection".
                 */}
              </div>
            </div>

            <RenderField label="Category" field="category" />

            {/* State */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-white ml-1">
                State
              </label>
              <Input
                type="text"
                placeholder="e.g. Maharashtra"
                value={formData.state}
                onChange={(e) => updateField("state", e.target.value)}
                className="bg-transparent border-gray-500 text-gray-300 h-10 rounded-lg placeholder:text-gray-500"
              />
            </div>
          </div>

          {/* Footer Buttons */}
          <div className="flex justify-end items-center gap-4 mt-16 pt-8">
            <Button
              variant="outline"
              className="border-gray-500 text-white hover:bg-white/5 rounded px-8 py-2 h-auto text-base min-w-[100px] bg-transparent"
            >
              Skip
            </Button>

            <Button className="bg-[#25D366] hover:bg-[#20bd5a] text-white rounded px-8 py-2 h-auto text-base min-w-[100px]">
              Continue
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}

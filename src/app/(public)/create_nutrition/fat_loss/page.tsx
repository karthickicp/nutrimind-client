// AiFitnessForm.tsx
"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { SelectItem } from "@/components/ui/select";
import { SelectBox } from "@/components/common/selectBox";
import FormLayout from "../../layout/formLayout";
import { useFormik } from "formik";
import { dropdownBoxOptions } from "../diet_planner/page";
import { fatLossSchema } from "@/lib/validationSchema";

type FatLossFormikDataProps = {
  currentWeight: object | null;
  targetWeight: object | null;
  timeframe: object | null;
  activityLevel: object | null;
  preferredWorkout: object | null;
};

export default function AiFitnessForm() {
  const { handleSubmit, handleChange, values } =
    useFormik<FatLossFormikDataProps>({
      initialValues: {
        currentWeight: null,
        targetWeight: null,
        timeframe: null,
        activityLevel: null,
        preferredWorkout: null,
      },
      validationSchema: fatLossSchema,
      onSubmit: (values) => {
        console.log(values);
      },
    });

  return (
    <FormLayout
      title="AI Fitness & Fat-Loss Guide"
      submitBtnTitle="Generate Diet"
      onSubmit={handleSubmit}
    >
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          {/* Current Weight */}
          <div>
            <Label className="text-md text-white/80 mb-2 block font-medium">
              Current Weight
            </Label>
            <SelectBox defaultValue="88">
              {dropdownBoxOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectBox>
          </div>

          {/* Target Weight */}
          <div>
            <Label className="text-md text-white/80 mb-2 block font-medium">
              Target Weight
            </Label>
            <SelectBox defaultValue="60">
              {dropdownBoxOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectBox>
          </div>

          {/* Timeframe */}
          <div>
            <Label className="text-md text-white/80 mb-2 block font-medium">
              Timeframe
            </Label>
            <SelectBox defaultValue="2m">
              {dropdownBoxOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectBox>
          </div>

          {/* Activity Level */}
          <div>
            <Label className="text-md text-white/80 mb-2 block font-medium">
              Activity Level
            </Label>
            <SelectBox defaultValue="sedentary">
              {dropdownBoxOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectBox>
          </div>

          {/* Preferred Workout - full width on left column */}
          <div className="md:col-span-2 lg:col-span-1">
            <Label className="text-md text-white/80 mb-2 block font-medium">
              Preferred Workout
            </Label>
            <SelectBox defaultValue="gym">
              {dropdownBoxOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectBox>
          </div>
        </div>
      </form>
    </FormLayout>
  );
}

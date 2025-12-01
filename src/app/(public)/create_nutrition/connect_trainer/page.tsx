"use client";
import { FormField, Label } from "@/components/ui/label";
import { SelectItem } from "@/components/ui/select";
import { SelectBox } from "@/components/common/selectBox";
import FormLayout from "../../layout/formLayout";
import { useFormik } from "formik";
import { dropdownBoxOptions } from "../diet_planner/page";
import { Input } from "@/components/ui/input";
import { trainerConnectSchema } from "@/lib/validationSchema";

type TrainerConnectFormikDataProps = {
  sleepHours: string;
  stressLevel: object | null;
  workType: object | null;
  currentMood: object | null;
  dietType: object | null;
};

export default function TrainerConnect() {
  const { handleSubmit, handleChange, values } =
    useFormik<TrainerConnectFormikDataProps>({
      initialValues: {
        sleepHours: "",
        stressLevel: null,
        workType: null,
        currentMood: null,
        dietType: null,
      },
      validationSchema: trainerConnectSchema,
      onSubmit: (values) => {
        console.log(values);
      },
    });

  return (
    <FormLayout
      title="Trainer Connect"
      submitBtnTitle="Continue"
      onSubmit={handleSubmit}
    >
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          {/* Current Weight */}
          <div>
            <FormField label="Age" className="min-w-0">
              <Input
                placeholder="24"
                value={values.sleepHours}
                onChange={handleChange("sleepHours")}
                onKeyDown={() => {}}
                className="rounded-xl py-3 px-4 w-full max-w-40 bg-[rgba(255,255,255,0.02)] border border-white/10"
              />
            </FormField>
          </div>

          {/* Target Weight */}
          <div>
            <Label className="text-md text-white/80 mb-2 block font-medium">
              Stress Level
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
              Work Type
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
              Current Mood
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
              Diet Type
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

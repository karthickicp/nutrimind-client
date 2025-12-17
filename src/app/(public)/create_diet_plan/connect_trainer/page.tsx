"use client";
import { useFormik } from "formik";

import Select from "@/components/common/selectBox";
import { Input } from "@/components/ui/input";
import { FormField } from "@/components/ui/label";
import { trainerConnectSchema } from "@/lib/validationSchema";

import FormLayout from "../../layout/formLayout";
import { dropdownBoxOptions } from "../diet_planner/page";

type TrainerConnectFormikDataProps = {
  sleepHours: string;
  stressLevel: object | null;
  workType: object | null;
  currentMood: object | null;
  dietType: object | null;
};

export default function TrainerConnect() {
  const { handleSubmit, handleChange, values, errors, touched, setFieldValue } =
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
            <Select
              title="Stress Level"
              placeholder="Select stress level"
              options={dropdownBoxOptions}
              value={values.stressLevel}
              getOptionLabel={(item: any) => item?.value}
              onSelect={(value) => setFieldValue("stressLevel", value)}
              errorText={
                touched.stressLevel && errors.stressLevel
                  ? errors.stressLevel
                  : ""
              }
            />
          </div>

          {/* Timeframe */}
          <div>
            <Select
              title="Work Type"
              placeholder="Select work type"
              options={dropdownBoxOptions}
              value={values.workType}
              getOptionLabel={(item: any) => item?.value}
              onSelect={(value) => setFieldValue("workType", value)}
              errorText={
                touched.workType && errors.workType ? errors.workType : ""
              }
            />
          </div>

          {/* Activity Level */}
          <div>
            <Select
              title="Current Mood"
              placeholder="Select current mood"
              options={dropdownBoxOptions}
              value={values.currentMood}
              getOptionLabel={(item: any) => item?.value}
              onSelect={(value) => setFieldValue("currentMood", value)}
              errorText={
                touched.currentMood && errors.currentMood
                  ? errors.currentMood
                  : ""
              }
            />
          </div>

          {/* Preferred Workout - full width on left column */}
          <div className="md:col-span-2 lg:col-span-1">
            <Select
              title="Diet Type"
              placeholder="Select diet type"
              options={dropdownBoxOptions}
              value={values.dietType}
              getOptionLabel={(item: any) => item?.value}
              onSelect={(value) => setFieldValue("dietType", value)}
              errorText={
                touched.dietType && errors.dietType ? errors.dietType : ""
              }
            />
          </div>
        </div>
      </form>
    </FormLayout>
  );
}

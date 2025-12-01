// AiFitnessForm.tsx
"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import FormLayout from "../../layout/formLayout";
import { useFormik } from "formik";
import { dropdownBoxOptions } from "../diet_planner/page";
import { fatLossSchema } from "@/lib/validationSchema";
import Select from "@/components/ui/select";

type FatLossFormikDataProps = {
  currentWeight: object | null;
  targetWeight: object | null;
  timeframe: object | null;
  activityLevel: object | null;
  preferredWorkout: object | null;
};

export default function AiFitnessForm() {
  const { handleSubmit, values, setFieldValue, touched, errors } =
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
          <Select
            title="Current Weight"
            placeholder="Select current weight"
            options={dropdownBoxOptions}
            value={values.currentWeight}
            getOptionLabel={(item: any) => item?.value}
            onSelect={(value) => setFieldValue("currentWeight", value)}
            errorText={
              touched.currentWeight && errors.currentWeight
                ? errors.currentWeight
                : ""
            }
          />

          <Select
            title="Target Weight"
            placeholder="Select target weight"
            options={dropdownBoxOptions}
            value={values.targetWeight}
            getOptionLabel={(item: any) => item?.value}
            onSelect={(value) => setFieldValue("targetWeight", value)}
            errorText={
              touched.targetWeight && errors.targetWeight
                ? errors.targetWeight
                : ""
            }
          />

          <Select
            title="Time Frame"
            placeholder="Select time frame"
            options={dropdownBoxOptions}
            value={values.timeframe}
            getOptionLabel={(item: any) => item?.value}
            onSelect={(value) => setFieldValue("timeframe", value)}
            errorText={
              touched.timeframe && errors.timeframe ? errors.timeframe : ""
            }
          />
          <Select
            title="Activity Level"
            placeholder="Select activity level"
            options={dropdownBoxOptions}
            value={values.activityLevel}
            getOptionLabel={(item: any) => item?.value}
            onSelect={(value) => setFieldValue("activityLevel", value)}
            errorText={
              touched.activityLevel && errors.activityLevel
                ? errors.activityLevel
                : ""
            }
          />

          <div className="md:col-span-2 lg:col-span-1">
            <Select
              title="Preferred Workout"
              placeholder="Select preferred workout"
              options={dropdownBoxOptions}
              value={values.preferredWorkout}
              getOptionLabel={(item: any) => item?.value}
              onSelect={(value) => setFieldValue("preferredWorkout", value)}
              errorText={
                touched.preferredWorkout && errors.preferredWorkout
                  ? errors.preferredWorkout
                  : ""
              }
            />
          </div>
        </div>
      </form>
    </FormLayout>
  );
}

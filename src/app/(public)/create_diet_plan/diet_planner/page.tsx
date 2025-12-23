"use client";

import { useFormik } from "formik";

import Select from "@/components/common/selectBox";
import { Input } from "@/components/ui/input";
import { FormField } from "@/components/ui/label";

import FormLayout from "../../layout/formLayout";

export const dropdownBoxOptions = [
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
  { label: "Other", value: "other" },
];

type DietPlannerFormikDataProps = {
  firstName: string;
  lastName: string;
  age: string;
  gender: object | null;
  height: string;
  weight: string;
  goal: string | null;
  dietType: object | null;
  cuisine: string | null;
};

const DietPlanner = () => {
  const { handleSubmit, values, setFieldValue, handleChange, touched, errors } =
    useFormik<DietPlannerFormikDataProps>({
      initialValues: {
        firstName: "",
        lastName: "",
        age: "",
        gender: null,
        height: "",
        weight: "",
        goal: null,
        dietType: null,
        cuisine: null,
      },
      onSubmit: (values) => {
        console.log(values);
      },
    });

  return (
    <FormLayout
      title="AI Diet Planner"
      submitBtnTitle="Generate Diet"
      onSubmit={handleSubmit}
    >
      <form className="space-y-8">
        {/* Top: First/Last name full width inputs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <FormField label="First Name">
            <Input
              placeholder="First Name"
              value={values.firstName}
              onChange={handleChange("firstName")}
              className="w-full rounded-lg p-4 bg-[rgba(255,255,255,0.02)] border border-white/10 placeholder:text-white/40"
            />
          </FormField>
          <FormField label="Last Name">
            <Input
              placeholder="Last Name"
              value={values.lastName}
              onChange={handleChange("lastName")}
              className="w-full rounded-lg py-4 px-4 bg-[rgba(255,255,255,0.02)] border border-white/10 placeholder:text-white/40"
            />
          </FormField>
        </div>

        {/* Row: Age, Gender, Height, Weight (small inputs) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-end">
          <FormField label="Age" className="min-w-0">
            <Input
              placeholder="24"
              value={values.age}
              onChange={handleChange("age")}
              onKeyDown={() => {}}
              className="rounded-xl py-3 px-4 w-full max-w-40 bg-[rgba(255,255,255,0.02)] border border-white/10"
            />
          </FormField>

          <Select
            title="Gender"
            placeholder="Select gender"
            options={dropdownBoxOptions}
            value={values.gender}
            getOptionLabel={(item: any) => item?.value}
            onSelect={(value) => setFieldValue("gender", value)}
            errorText={touched.gender && errors.gender ? errors.gender : ""}
          />

          <FormField label="Height" className="min-w-0">
            <Input
              placeholder="140"
              className="rounded-xl py-3 px-4 w-full max-w-40 bg-[rgba(255,255,255,0.02)] border border-white/10"
            />
          </FormField>

          <FormField label="Weight" className="min-w-0">
            <Input
              placeholder="140"
              className="rounded-xl py-3 px-4 w-full max-w-40 bg-[rgba(255,255,255,0.02)] border border-white/10"
            />
          </FormField>
        </div>

        {/* Row: Goal, Diet Type, Cuisine */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Select
            title="Goal"
            placeholder="Select goal"
            options={dropdownBoxOptions}
            value={values.goal}
            getOptionLabel={(item: any) => item?.value}
            onSelect={(value) => setFieldValue("goal", value)}
            errorText={touched.goal && errors.goal ? errors.goal : ""}
          />
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

          <FormField label="Cuisine">
            <Input
              placeholder="North Indian"
              className="w-full rounded-lg py-4 px-4 bg-[rgba(255,255,255,0.02)] border border-white/10 placeholder:text-white/40"
            />
          </FormField>
        </div>
      </form>
    </FormLayout>
  );
};

export default DietPlanner;

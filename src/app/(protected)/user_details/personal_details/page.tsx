"use client";

import { useFormik } from "formik";
import { User } from "lucide-react";

import { dropdownBoxOptions } from "@/app/(public)/create_diet_plan/diet_planner/page";
import Select from "@/components/common/selectBox";
import { useUserDetails } from "@/lib/contexts";

import UserDetailsFormLayout from "../../layout/userDetailsFormLayout";

const PersonalDetails = () => {
  const { handleSubmit, handleChange, values, errors, touched, setFieldValue } =
    useUserDetails();

  return (
    <UserDetailsFormLayout
      title="Personal Details"
      subTitle="Compulsory"
      icon={<User className="w-5 h-5 text-blue-600" />}
      onBackPress={() => console.log("Back")}
      onSubmit={() => handleSubmit()}
    >
      <Select
        title="Weight"
        placeholder="Select weight"
        options={dropdownBoxOptions}
        value={values.weight}
        getOptionLabel={(item: any) => item?.value}
        onSelect={(value) => setFieldValue("weight", value)}
        errorText={touched.weight && errors.weight ? errors.weight : ""}
      />
      <Select
        title="Height"
        placeholder="Select height"
        options={dropdownBoxOptions}
        value={values.height}
        getOptionLabel={(item: any) => item?.value}
        onSelect={(value) => setFieldValue("height", value)}
        errorText={touched.height && errors.height ? errors.height : ""}
      />
      <Select
        title="Age"
        placeholder="Select age"
        options={dropdownBoxOptions}
        value={values.age}
        getOptionLabel={(item: any) => item?.value}
        onSelect={(value) => setFieldValue("age", value)}
        errorText={touched.age && errors.age ? errors.age : ""}
      />
      <Select
        title="Goal Type"
        placeholder="Select goal type"
        options={dropdownBoxOptions}
        value={values.goalType}
        getOptionLabel={(item: any) => item?.value}
        onSelect={(value) => setFieldValue("goalType", value)}
        errorText={touched.goalType && errors.goalType ? errors.goalType : ""}
      />
      <Select
        title="Allergy"
        placeholder="Select allergy"
        options={dropdownBoxOptions}
        value={values.allergy}
        getOptionLabel={(item: any) => item?.value}
        onSelect={(value) => setFieldValue("allergy", value)}
        errorText={touched.allergy && errors.allergy ? errors.allergy : ""}
      />
      <Select
        title="Activity / Gym"
        placeholder="Select activity / gym"
        options={dropdownBoxOptions}
        value={values.activityOrGym}
        getOptionLabel={(item: any) => item?.value}
        onSelect={(value) => setFieldValue("activityOrGym", value)}
        errorText={
          touched.activityOrGym && errors.activityOrGym
            ? errors.activityOrGym
            : ""
        }
      />
    </UserDetailsFormLayout>
  );
};

export default PersonalDetails;

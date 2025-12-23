"use client";

import { ReactNode } from "react";

import { FormikErrors, FormikTouched, useFormik } from "formik";

import { UserDetailsFormikContext } from "@/lib/contexts";

export interface UserDetailsFormikDataProps {
  weight: number | null;
  height: number | null;
  age: number | null;
  goalType: string | null;
  allergy: string | null;
  activityOrGym: string | null;
  religion: string;
  category: string | null;
  state: string;
}

export interface UserDetailsFormikContextProps {
  values: UserDetailsFormikDataProps;
  errors: FormikErrors<UserDetailsFormikDataProps>;
  touched: FormikTouched<UserDetailsFormikDataProps>;
  handleChange: React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement>;
  setFieldValue: (field: string, value: any) => void;
  handleSubmit: () => void;
}

const UserDetailsProvider = ({ children }: { children: ReactNode }) => {
  const { handleChange, setFieldValue, errors, values, handleSubmit, touched } =
    useFormik<UserDetailsFormikDataProps>({
      initialValues: {
        weight: null,
        height: null,
        age: null,
        goalType: null,
        allergy: null,
        activityOrGym: null,
        religion: "",
        category: null,
        state: "",
      },
      onSubmit(values) {},
    });

  const userDetailsFormikContextValue = {
    ...values,
    handleChange,
    setFieldValue,
    errors,
    values,
    handleSubmit,
    touched,
  };
  return (
    <UserDetailsFormikContext.Provider value={userDetailsFormikContextValue}>
      {children}
    </UserDetailsFormikContext.Provider>
  );
};

export default UserDetailsProvider;

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/app/globals.css";
import { UserDetailsFormikContext } from "@/lib/contexts";
import { useFormik } from "formik";

const popins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "User details",
  description: "user details description",
};

export default function UserDetailsRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { handleChange, setFieldValue, errors, values, handleSubmit, touched } =
    useFormik({
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
    weight: null,
    height: null,
    age: null,
    goalType: null,
    allergy: null,
    activityOrGym: null,
    religion: "",
    category: null,
    state: "",
    handleChange,
    setFieldValue,
    errors,
    values,
    handleSubmit,
    touched,
  };
  return (
    <html lang="en">
      <body
        className={`${popins.variable} antialiased dark`}
        suppressHydrationWarning
      >
        <UserDetailsFormikContext.Provider
          value={userDetailsFormikContextValue}
        >
          {children}
        </UserDetailsFormikContext.Provider>
      </body>
    </html>
  );
}

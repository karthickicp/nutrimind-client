"use client";

import { useState } from "react";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { useFormik } from "formik";
import { Eye, EyeOff } from "lucide-react";

import { signupUser } from "@/actions/auth";
import { FormSubmitButton } from "@/components/common/FormSubmitButton";
import { Input } from "@/components/ui/input";
import { FormField } from "@/components/ui/label";
import { toaster } from "@/components/ui/toast";
import { signupSchema } from "@/lib/validationSchema";

export default function SignupPage() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { values, handleChange, handleSubmit, errors, touched } = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: signupSchema,
    onSubmit: async (values) => {
      const res = await signupUser({
        name: values.fullName,
        email: values.email,
        password: values.password,
      });
      if (res.success) {
        toaster.success(res.message);
        router.push("/login");
      } else {
        toaster.error(res.message);
      }
    },
  });

  return (
    <div
      className="w-[420px] rounded-2xl shadow-xl bg-[#2d2a2a] border border-[#2d2a2a] overflow-hidden"
      style={{ boxShadow: "0 0 15px #00ff88" }}
    >
      <div className="bg-[#00b46e] py-6 text-center">
        <h1 className="text-2xl font-semibold text-white">Create an account</h1>
        <p className="text-sm text-white opacity-80 mt-1">
          Let&apos;s create your account.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="px-8 py-6">
        <div className="mb-4">
          <FormField label="Full Name" className="text-white">
            <Input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              value={values.fullName}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-black text-white placeholder-gray-400 border border-gray-700 h-15"
            />
            {touched.fullName && errors.fullName && (
              <div className="err-msg">{errors.fullName}</div>
            )}
          </FormField>
        </div>

        <div className="mb-4">
          <FormField label="Email" className="text-white">
            <Input
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={values.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-black text-white placeholder-gray-400 border border-gray-700 h-15"
            />
            {touched.email && errors.email && (
              <div className="err-msg">{errors.email}</div>
            )}
          </FormField>
        </div>

        <div className="mb-4">
          <FormField label="Password" className="text-white">
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                value={values.password}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-black text-white placeholder-gray-400 border border-gray-700 h-15"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-white opacity-70 hover:opacity-100 transition-opacity"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {touched.password && errors.password && (
              <div className="err-msg">{errors.password}</div>
            )}
          </FormField>
        </div>

        <div className="mb-4">
          <FormField label="Confirm Password" className="text-white">
            <div className="relative">
              <Input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Re-enter your password"
                value={values.confirmPassword}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-black text-white placeholder-gray-400 border border-gray-700 h-15"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-white opacity-70 hover:opacity-100 transition-opacity"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {touched.confirmPassword && errors.confirmPassword && (
              <div className="err-msg">{errors.confirmPassword}</div>
            )}
          </FormField>
        </div>

        <p className="text-xs text-white mb-4">
          By signing up you agree to our <u>Terms</u>, <u>Privacy Policy</u>,
          and <u>Cookie Use</u>
        </p>

        <FormSubmitButton
          type="submit"
          className="w-full py-3 rounded-lg bg-[#b6ffe4] text-black font-semibold mb-4 hover:bg-[#9effd6] h-15"
          buttonText="Create an Account"
        />

        <p className="text-center text-sm text-white mb-2">
          Already have an account?{" "}
          <Link href="/login" className="text-primary hover:underline">
            Login
          </Link>
        </p>

        <p className="text-center text-gray-400 mb-3">OR</p>

        <div className="flex justify-center gap-6 mb-4">
          <button
            type="button"
            className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-2xl cursor-pointer border border-gray-600 hover:border-gray-400 transition-colors p-2.5"
          >
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <path
                fill="#EA4335"
                d="M12 5.04c1.64 0 3.12.61 4.26 1.69l3.19-3.19C17.51 1.7 14.93 0 12 0 7.32 0 3.23 2.68 1.25 6.61l3.77 2.93C6.07 6.13 8.81 5.04 12 5.04z"
              />
              <path
                fill="#34A853"
                d="M24 12.27c0-.79-.07-1.55-.2-2.27H12v4.51h6.81c-.3 1.54-1.16 2.85-2.42 3.73l3.71 2.88c2.18-2.01 3.9-5.12 3.9-8.85z"
              />
              <path
                fill="#4A90E2"
                d="M5.02 14.65c-.27-.81-.43-1.68-.43-2.65 0-.85.13-1.66.36-2.41L1.25 6.61C.45 8.24 0 10.06 0 12c0 2.06.5 3.78 1.39 5.31l3.63-2.66z"
              />
              <path
                fill="#FBBC05"
                d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.71-2.88c-1.03.69-2.39 1.15-4.22 1.15-3.19 0-5.93-2.15-6.95-5.26l-3.63 2.66C3.37 20.88 7.4 24 12 24z"
              />
            </svg>
          </button>
          <button
            type="button"
            className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-2xl cursor-pointer border border-gray-600 text-white hover:border-gray-400 transition-colors p-2.5"
          >
            <svg viewBox="0 0 384 512" fill="currentColor" className="w-5 h-5">
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}

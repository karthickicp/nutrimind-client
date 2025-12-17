"use client";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useFormik } from "formik";
import { resetPasswordNewPasswordSchema } from "@/lib/validationSchema";
import { Input } from "@/components/ui/input";
import { FormField } from "@/components/ui/label";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ResetFlow() {
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: { password: "", confirmPassword: "" },
      validationSchema: resetPasswordNewPasswordSchema,
      onSubmit: (values) => {
        console.log("Setting new password:", values.password);
        setStep(2);
      },
    });

  return (
    <div
      className="w-[420px] rounded-2xl bg-[#2d2a2a] overflow-hidden"
      style={{ boxShadow: "0 0 15px #00ff88" }}
    >
      <div className="bg-[#00b46e] py-6 text-center">
        <h1 className="text-2xl font-semibold text-white">
          {step === 1 && "Set New Password"}
          {step === 2 && "Password Changed!"}
        </h1>

        <p className="text-sm text-white opacity-80 mt-1">
          {step === 1 && "Enter your new password."}
          {step === 2 && "You can now login with your new password."}
        </p>
      </div>

      <div className="px-8 py-6 text-white">
        {step === 1 && (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <FormField label="New Password">
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full p-3 rounded-lg bg-black text-white border border-gray-700 h-12"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-300 hover:text-white"
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
              <FormField label="Confirm Password">
                <div className="relative">
                  <Input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full p-3 rounded-lg bg-black text-white border border-gray-700 h-12"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-300 hover:text-white"
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={20} />
                    ) : (
                      <Eye size={20} />
                    )}
                  </button>
                </div>
                {touched.confirmPassword && errors.confirmPassword && (
                  <div className="err-msg">{errors.confirmPassword}</div>
                )}
              </FormField>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-[#00b46e] text-black font-semibold hover:bg-[#009b5f] transition-colors"
            >
              Continue
            </button>
          </form>
        )}

        {/* STEP 2: Success */}
        {step === 2 && (
          <div className="text-center py-6">
            <div className="text-6xl text-green-400 mb-4 animate-bounce">
              ✔️
            </div>
            <h2 className="text-xl font-semibold mb-2">Password Changed!</h2>
            <p className="text-gray-300 mb-6">
              You can now use your new password to login.
            </p>

            <Link href="/auth/login" className="block w-full">
              <Button className="btn-primary w-full py-3 h-15">Continue</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

"use client";
import React, { useRef, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useFormik } from "formik";
import { forgotPasswordSchema, resetPasswordNewPasswordSchema } from "@/lib/validationSchema";
import { Input } from "@/components/ui/input";
import { FormField } from "@/components/ui/label";

export default function ResetFlow() {
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [otpError, setOtpError] = useState("");

  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  // --- Step 1 Form: Email ---
  const emailForm = useFormik({
    initialValues: { email: "" },
    validationSchema: forgotPasswordSchema,
    onSubmit: (values) => {
      console.log("Sending OTP to:", values.email);
      setStep(2);
    },
  });

  // --- Step 2 Logic: OTP ---
  const handleOtpChange = (value: string, index: number) => {
    if (!/^[0-9]?$/.test(value)) return;
    setOtpError(""); 

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleOtpSubmit = () => {
    if (otp.some((digit) => digit === "")) {
      setOtpError("Please enter the full 4-digit code.");
      return;
    }
    console.log("Verifying OTP:", otp.join(""));
    setStep(3);
  };

  
  const passwordForm = useFormik({
    initialValues: { password: "", confirmPassword: "" },
    validationSchema: resetPasswordNewPasswordSchema,
    onSubmit: (values) => {
      console.log("Setting new password:", values.password);
      setStep(4);
    },
  });

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-black relative">
      <div className="absolute left-10 top-1/2 -translate-y-1/2 text-6xl opacity-30">🔥</div>
      <div className="absolute right-10 top-1/2 -translate-y-1/2 text-6xl opacity-30">💪</div>
      <div className="absolute left-20 bottom-10 text-6xl opacity-30">🏋️‍♂️</div>
      <div className="absolute right-20 bottom-10 text-6xl opacity-30">🥗</div>

      <div
        className="w-[420px] rounded-2xl bg-[#2d2a2a] overflow-hidden"
        style={{ boxShadow: "0 0 15px #00ff88" }}
      >
        <div className="bg-[#00b46e] py-6 text-center">
          <h1 className="text-2xl font-semibold text-white">
            {step === 1 && "Reset Password"}
            {step === 2 && "Enter 4 Digit Code"}
            {step === 3 && "Set New Password"}
            {step === 4 && "Password Changed!"}
          </h1>

          <p className="text-sm text-white opacity-80 mt-1">
            {step === 1 && "Let's get you back into your account."}
            {step === 2 && "Check your email and enter the code."}
            {step === 3 && "Enter your new password."}
            {step === 4 && "You can now login with your new password."}
          </p>
        </div>

        <div className="px-8 py-6 text-white">
          
          
          {step === 1 && (
            <form onSubmit={emailForm.handleSubmit}>
              <div className="mb-4">
                <FormField label="Email">
                  <Input
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    value={emailForm.values.email}
                    onChange={emailForm.handleChange}
                    onBlur={emailForm.handleBlur}
                    className="w-full p-3 rounded-lg bg-black text-white placeholder-gray-400 border border-gray-700 h-12"
                  />
                  {emailForm.touched.email && emailForm.errors.email && (
                    <div className="text-red-500 text-xs mt-1">{emailForm.errors.email}</div>
                  )}
                </FormField>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-[#b6ffe4] text-black font-semibold mb-4 hover:bg-[#9effd6] transition-colors"
              >
                Send OTP
              </button>

              <p className="text-center text-sm mb-2">
                Already have an account?{" "}
                <span className="text-green-400 underline cursor-pointer">
                  <a href="/auth/login">Login</a>
                </span>
              </p>

              <p className="text-center text-gray-400 mb-3">OR</p>

              <div className="flex justify-center gap-6 mb-4">
                <button type="button" className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-2xl border border-gray-600 p-2.5 hover:border-gray-400 transition-colors">
                  <svg viewBox="0 0 24 24" className="w-full h-full">
                    <path fill="#EA4335" d="M12 5.04c1.64 0 3.12.61 4.26 1.69l3.19-3.19C17.51 1.7 14.93 0 12 0 7.32 0 3.23 2.68 1.25 6.61l3.77 2.93C6.07 6.13 8.81 5.04 12 5.04z" />
                    <path fill="#34A853" d="M24 12.27c0-.79-.07-1.55-.2-2.27H12v4.51h6.81c-.3 1.54-1.16 2.85-2.42 3.73l3.71 2.88c2.18-2.01 3.9-5.12 3.9-8.85z" />
                    <path fill="#4A90E2" d="M5.02 14.65c-.27-.81-.43-1.68-.43-2.65 0-.85.13-1.66.36-2.41L1.25 6.61C.45 8.24 0 10.06 0 12c0 2.06.5 3.78 1.39 5.31l3.63-2.66z" />
                    <path fill="#FBBC05" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.71-2.88c-1.03.69-2.39 1.15-4.22 1.15-3.19 0-5.93-2.15-6.95-5.26l-3.63 2.66C3.37 20.88 7.4 24 12 24z" />
                  </svg>
                </button>
                <button type="button" className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-2xl border border-gray-600 text-white p-2.5 hover:border-gray-400 transition-colors">
                  <svg viewBox="0 0 384 512" fill="currentColor" className="w-5 h-5">
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z" />
                  </svg>
                </button>
              </div>
            </form>
          )}

          {/* STEP 2: OTP Input */}
          {step === 2 && (
            <>
              <div className="flex justify-center gap-4 my-4">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    value={digit}
                    onChange={(e) => handleOtpChange(e.target.value, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    ref={(el) => {
                      inputRefs.current[index] = el;
                    }}
                    className={`w-12 h-12 text-center text-2xl rounded-lg bg-black border ${
                      otpError ? "border-red-500" : "border-gray-700"
                    } focus:outline-none focus:border-green-400 text-white`}
                    maxLength={1}
                  />
                ))}
              </div>
              
              {otpError && (
                <p className="text-center text-red-500 text-xs mb-4">{otpError}</p>
              )}

              <p className="text-center text-gray-300 mb-4">
                Email not received?{" "}
                <span className="text-green-400 underline cursor-pointer hover:text-green-300">
                  Resend Code
                </span>
              </p>

              <button
                onClick={handleOtpSubmit}
                className="w-full py-3 rounded-lg bg-[#00b46e] text-black font-semibold hover:bg-[#009b5f] transition-colors"
              >
                Continue
              </button>
            </>
          )}

          {/* STEP 3: New Password */}
          {step === 3 && (
            <form onSubmit={passwordForm.handleSubmit}>
              <div className="mb-4">
                <FormField label="New Password">
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={passwordForm.values.password}
                      onChange={passwordForm.handleChange}
                      onBlur={passwordForm.handleBlur}
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
                  {passwordForm.touched.password && passwordForm.errors.password && (
                    <div className="text-red-500 text-xs mt-1">{passwordForm.errors.password}</div>
                  )}
                </FormField>
              </div>

              <div className="mb-4">
                <FormField label="Confirm Password">
                  <div className="relative">
                    <Input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      value={passwordForm.values.confirmPassword}
                      onChange={passwordForm.handleChange}
                      onBlur={passwordForm.handleBlur}
                      className="w-full p-3 rounded-lg bg-black text-white border border-gray-700 h-12"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-300 hover:text-white"
                    >
                      {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                  {passwordForm.touched.confirmPassword && passwordForm.errors.confirmPassword && (
                    <div className="text-red-500 text-xs mt-1">{passwordForm.errors.confirmPassword}</div>
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

          {/* STEP 4: Success */}
          {step === 4 && (
            <div className="text-center py-6">
              <div className="text-6xl text-green-400 mb-4 animate-bounce">✔️</div>
              <h2 className="text-xl font-semibold mb-2">Password Changed!</h2>
              <p className="text-gray-300 mb-6">
                You can now use your new password to login.
              </p>

              <button className="w-full py-3 rounded-lg bg-[#00b46e] text-black font-semibold hover:bg-[#009b5f] transition-colors">
                <a href="/auth/login" className="block w-full h-full">Continue</a>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
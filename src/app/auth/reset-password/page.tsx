"use client";
import React, { useRef, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaEye, FaEyeSlash } from "react-icons/fa";

export default function ResetFlow() {
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  const handleOtpChange = (value: string, index: number) => {
    if (!/^[0-9]?$/.test(value)) return;

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

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-black relative">
      <div className="absolute left-10 top-1/2 -translate-y-1/2 text-6xl opacity-30">🔥</div>
      <div className="absolute right-10 top-1/2 -translate-y-1/2 text-6xl opacity-30">💪</div>
      <div className="absolute left-20 bottom-10 text-6xl opacity-30">🏋️‍♂️</div>
      <div className="absolute right-20 bottom-10 text-6xl opacity-30">🥗</div>

      <div
        className="w-[420px] rounded-2xl bg-[#2d2a2a] overflow-hidden"
        style={{ boxShadow: "0 0 40px #00ff88" }}
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
            <>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full p-3 rounded-lg bg-black text-white placeholder-gray-400 border border-gray-700 mb-4"
              />

              <button
                onClick={() => setStep(2)}
                className="w-full py-3 rounded-lg bg-[#b6ffe4] text-black font-semibold mb-4"
              >
                Send OTP
              </button>

              <p className="text-center text-sm mb-2">
                Already have an account?{" "}
                <span className="text-green-400 underline cursor-pointer">
                  Login
                </span>
              </p>

              <p className="text-center text-gray-400 mb-3">OR</p>

              <div className="flex justify-center gap-6 mb-4">
                <button className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-2xl border border-gray-600">
                  <FcGoogle />
                </button>
                <button className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-2xl border border-gray-600">
                  <FaApple />
                </button>
              </div>
            </>
          )}

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
                    className="w-12 h-12 text-center text-2xl rounded-lg bg-black border border-gray-700"
                    maxLength={1}
                  />
                ))}
              </div>

              <p className="text-center text-gray-300 mb-4">
                Email not received?{" "}
                <span className="text-green-400 underline cursor-pointer">
                  Resend Code
                </span>
              </p>

              <button
                onClick={() => setStep(3)}
                className="w-full py-3 rounded-lg bg-[#00b46e] text-black font-semibold"
              >
                Continue
              </button>
            </>
          )}

          {step === 3 && (
            <>
              <label className="block text-sm mb-1">New Password</label>
              <div className="relative mb-4">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full p-3 rounded-lg bg-black text-white border border-gray-700"
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-xl text-gray-300"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              <label className="block text-sm mb-1">Confirm Password</label>
              <div className="relative mb-4">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  className="w-full p-3 rounded-lg bg-black text-white border border-gray-700"
                />
                <span
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-xl text-gray-300"
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              <button
                onClick={() => setStep(4)}
                className="w-full py-3 rounded-lg bg-[#00b46e] text-black font-semibold"
              >
                Continue
              </button>
            </>
          )}

          {step === 4 && (
            <div className="text-center py-6">
              <div className="text-6xl text-green-400 mb-4">✔️</div>
              <h2 className="text-xl font-semibold mb-2">Password Changed!</h2>
              <p className="text-gray-300 mb-6">
                You can now use your new password to login.
              </p>

              <button className="w-full py-3 rounded-lg bg-[#00b46e] text-black font-semibold">
                Continue
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

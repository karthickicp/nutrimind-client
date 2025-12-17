"use client";

import React, { useRef, useState } from "react";

import { ArrowLeft, User, Mail, Lock } from "lucide-react";

export default function TrainerRegistrationStepOne() {
  //   const [step] = useState(1); // keep stepper static for demo (1 = Account)
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]); // 4-digit OTP
  const otpRefs = [
    useRef<HTMLInputElement | null>(null),
    useRef<HTMLInputElement | null>(null),
    useRef<HTMLInputElement | null>(null),
    useRef<HTMLInputElement | null>(null),
  ];

  function handleOtpChange(index: number, value: string) {
    if (!/^\d?$/.test(value)) return; // allow only single digit
    const next = [...otp];
    next[index] = value;
    setOtp(next);

    if (value && index < otp.length - 1) {
      otpRefs[index + 1].current?.focus();
    }
    if (!value && index > 0) {
      // if cleared, keep focus
    }
  }

  function handleOtpKeyDown(
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      otpRefs[index - 1].current?.focus();
    }
  }

  function handleContinue(e: React.FormEvent) {
    e.preventDefault();
    // Implement validation / submit flow
    console.log({ fullName, email, phone, password, otp: otp.join("") });
    alert("Continue clicked — hook up submit logic");
  }

  return (
    <div className=" bg-black text-white flex items-stretch">
      {/* Left image / illustration */}
      <div className="hidden lg:flex lg:w-1/3 bg-[url('/images/trainer-reg-left-bg.png')] bg-cover bg-center items-end justify-center rounded-tl-[60px] rounded-bl-[60px]">
        {/* Overlay small welcome card (optional) */}
        <div className="p-4 text-center">
          <div className="bg-black/50 rounded-xl py-6 px-4 mb-4 border-2 border-white">
            <h3 className="text-2xl font-semibold text-white">Welcome Back!</h3>
            <p className="mt-2 text-sm text-white/80">
              Please sign in to enjoy the stress-free and tension-free life!
            </p>
            <button className="mt-4 w-full rounded-lg border border-white/30 py-2 text-sm">
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {/* Right form */}
      <div className="flex-1 px-6 py-10 md:py-16 md:px-20 flex items-center justify-center">
        <div className="w-full max-w-2xl">
          {/* Top: Title + Stepper */}
          <header className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <button className="h-10 w-10 rounded-full hover:bg-white/5 flex items-center justify-center">
                <ArrowLeft />
              </button>
              <h1 className="text-2xl md:text-3xl font-bold">
                Trainer Registration
              </h1>
            </div>

            {/* Stepper */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3 w-full">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-emerald-500 flex items-center justify-center">
                    1
                  </div>
                  <div className="hidden md:block text-sm text-white/80">
                    Account
                  </div>
                </div>
                <div className="h-0.5 bg-white/10 flex-1" />
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center text-white/60">
                    2
                  </div>
                  <div className="hidden md:block text-sm text-white/60">
                    Profile
                  </div>
                </div>
                <div className="h-0.5 bg-white/10 flex-1" />
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center text-white/60">
                    3
                  </div>
                  <div className="hidden md:block text-sm text-white/60">
                    Services
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* Form */}
          <form onSubmit={handleContinue} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Full name */}
              <label className="block">
                <span className="sr-only">Full name</span>
                <div className="relative">
                  <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-white/80">
                    <User size={18} />
                  </div>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Full Name"
                    aria-label="Full name"
                    className="w-full h-[60px] rounded-xl bg-[#111111] border border-white/20 pl-12 pr-4 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </label>

              {/* Email */}
              <label className="block">
                <span className="sr-only">Email address</span>
                <div className="relative">
                  <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-white/80">
                    <Mail size={18} />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email ID"
                    aria-label="Email"
                    className="w-full h-[60px] rounded-xl bg-[#111111] border border-white/20 pl-12 pr-4 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </label>

              {/* Phone (no country code) */}
              <label className="block">
                <span className="sr-only">Phone number</span>
                <input
                  type="tel"
                  inputMode="numeric"
                  value={phone}
                  onChange={(e) =>
                    setPhone(e.target.value.replace(/[^\d\s]/g, ""))
                  }
                  placeholder="Phone number"
                  aria-label="Phone number"
                  className="w-full h-[60px] rounded-xl bg-[#111111] border border-white/20 px-4 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <p className="mt-2 text-xs text-white/60">
                  Enter 10 digit mobile number
                </p>
              </label>

              {/* Password */}
              <label className="block">
                <span className="sr-only">Password</span>
                <div className="relative">
                  <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-white/80">
                    <Lock size={18} />
                  </div>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    aria-label="Password"
                    className="w-full h-[60px] rounded-xl bg-[#111111] border border-white/20 pl-12 pr-4 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </label>
            </div>

            {/* OTP Verification */}
            <div>
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">OTP Verification</div>
                <div className="text-sm text-white/60">Forgot password?</div>
              </div>

              <div className="mt-3 flex items-center gap-3">
                {otp.map((digit, i) => (
                  <input
                    key={i}
                    // ref={(el) => (otpRefs[i].current = el)}
                    value={digit}
                    onChange={(e) => handleOtpChange(i, e.target.value)}
                    onKeyDown={(e) => handleOtpKeyDown(e, i)}
                    inputMode="numeric"
                    maxLength={1}
                    className="w-14 h-14 rounded-md bg-transparent border border-white/20 text-center text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    aria-label={`OTP digit ${i + 1}`}
                  />
                ))}

                <div className="ml-auto text-sm text-white/60">
                  Didn&apos;t receive? Resend
                </div>
              </div>
            </div>

            {/* Continue CTA */}
            <div>
              <button
                type="submit"
                className="w-full h-[60px] rounded-xl bg-emerald-500 text-black font-semibold text-lg hover:bg-emerald-600 transition"
              >
                Continue →
              </button>
            </div>

            {/* Social / alternative sign-in */}
            <div className="pt-2">
              <div className="flex items-center gap-3">
                <div className="h-px bg-white/10 flex-1" />
                <div className="text-sm text-white/60">or</div>
                <div className="h-px bg-white/10 flex-1" />
              </div>

              <div className="mt-4 flex gap-4">
                <button className="flex-1 h-[60px] rounded-xl bg-white text-black font-medium">
                  Continue with Google
                </button>
                <button className="flex-1 h-[60px] rounded-xl bg-white/10 border border-white/10 text-white font-medium">
                  Continue with Apple
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

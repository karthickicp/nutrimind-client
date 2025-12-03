"use client";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaEye, FaEyeSlash } from "react-icons/fa";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-black relative">
      <div className="absolute left-10 top-1/2 -translate-y-1/2 text-6xl opacity-30">
        🔥
      </div>
      <div className="absolute right-10 top-1/2 -translate-y-1/2 text-6xl opacity-30">
        💪
      </div>
      <div className="absolute left-20 bottom-10 text-6xl opacity-30">🏋️‍♂️</div>
      <div className="absolute right-20 bottom-10 text-6xl opacity-30">🥗</div>
      <div
        className="w-[420px] rounded-2xl shadow-xl bg-[#2d2a2a] border border-[#2d2a2a] overflow-hidden"
        style={{ boxShadow: "0 0 40px #00ff88" }}
      >
        <div className="bg-[#00b46e] py-6 text-center">
          <h1 className="text-2xl font-semibold text-white">
            Login to your account
          </h1>
          <p className="text-sm text-white opacity-80 mt-1">
            It&apos;s great to see you again!
          </p>
        </div>

        <div className="px-8 py-6">
          <label className="block text-white text-sm mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full p-3 rounded-lg bg-black text-white placeholder-gray-400 border border-gray-700 mb-4"
          />

          <label className="block text-white text-sm mb-1">Password</label>
          <div className="relative mb-4">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full p-3 rounded-lg bg-black text-white placeholder-gray-400 border border-gray-700"
            />

            <span
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-white opacity-70 hover:opacity-100 transition-opacity"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </span>
          </div>

          <p className="text-xs text-white mb-4">
            By signing up you agree to our <u>Terms</u>, <u>Privacy Policy</u>,
            and <u>Cookie Use</u>
          </p>

          <button className="w-full py-3 rounded-lg bg-[#b6ffe4] text-black font-semibold mb-4">
            Login
          </button>

          <p className="text-center text-sm text-white mb-2">
            Don&apos;t have an account?{" "}
            <span className="text-green-400 cursor-pointer hover:underline">
              <a href="/auth/signup">SignUp</a>
            </span>
          </p>

          <p className="text-center text-gray-400 mb-3">OR</p>

          <div className="flex justify-center gap-6 mb-4">
            <button className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-2xl cursor-pointer border border-gray-600 hover:border-gray-400 transition-colors">
              <FcGoogle />
            </button>
            <button className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-2xl cursor-pointer border border-gray-600 text-white hover:border-gray-400 transition-colors">
              <FaApple />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

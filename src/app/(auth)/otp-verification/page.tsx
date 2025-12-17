"use client";

import { useRef } from "react";

import { useFormik } from "formik";

import { Button } from "@/components/ui/button";

const OTPVerification = () => {
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  const { values, errors, touched, setFieldValue, handleSubmit } = useFormik({
    initialValues: {
      otp: ["", "", "", ""],
    },
    onSubmit(values) {},
  });

  const handleOtpChange = (value: string, index: number) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...values.otp];
    newOtp[index] = value;
    setFieldValue("otp", newOtp);

    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !values.otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <>
      <div
        className="w-[420px] rounded-2xl bg-[#2d2a2a] overflow-hidden"
        style={{ boxShadow: "0 0 15px #00ff88" }}
      >
        <div className="bg-[#00b46e] py-6 text-center">
          <h1 className="text-2xl font-semibold text-white">
            Enter 4 Digit Code
          </h1>

          <p className="text-sm text-white opacity-80 mt-1">
            Check your email and enter the code.
          </p>
        </div>

        <div className="px-8 py-6 text-white">
          <div className="flex justify-center gap-4 my-4">
            {values.otp.map((digit, index) => (
              <input
                key={index}
                value={digit}
                onChange={(e) => handleOtpChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                ref={(el) => {
                  inputRefs.current[index] = el;
                }}
                className={`w-12 h-12 text-center text-2xl rounded-lg bg-black border ${
                  errors.otp ? "border-red-500" : "border-gray-700"
                } focus:outline-none focus:border-green-400 text-white`}
                maxLength={1}
              />
            ))}
          </div>

          {errors.otp && touched.otp && (
            <p className="text-center text-red-500 text-xs mb-4">
              {errors?.otp}
            </p>
          )}

          <p className="text-center text-gray-300 mb-4">
            Email not received?{" "}
            <span className="text-primary hover:underline cursor-pointer hover:text-green-300">
              Resend Code
            </span>
          </p>

          <Button
            className="btn-primary w-full py-3 h-15"
            onClick={() => handleSubmit()}
          >
            Continue
          </Button>
        </div>
      </div>
    </>
  );
};

export default OTPVerification;

"use client";

import React from "react";

import { ArrowLeft } from "lucide-react";

type UserDetailsFormLayoutProps = {
  onBackPress?: () => void;
  onSkipPress?: () => void;
  onSubmit?: () => void;
  icon?: React.ReactNode;
  title: string;
  subTitle?: string;
  renderRightContent?: React.ReactNode;
  children: React.ReactNode;
};

export default function UserDetailsFormLayout({
  onBackPress,
  onSkipPress,
  onSubmit,
  icon,
  title,
  subTitle,
  renderRightContent,
  children,
}: UserDetailsFormLayoutProps) {
  return (
    <div className="min-h-screen max-w-6xl mx-auto bg-black text-white px-6 py-6">
      {/* TOP BAR */}
      <div className="flex items-center gap-3 mb-8">
        {onBackPress && (
          <button onClick={onBackPress}>
            <ArrowLeft className="w-5 h-5 cursor-pointer text-emerald-400" />
          </button>
        )}
        <h1 className="text-2xl font-semibold">{title}</h1>
      </div>

      {/* FORM CARD */}
      <div className="bg-neutral-800 rounded-xl overflow-hidden">
        {/* FORM HEADER */}
        <div className="flex items-center justify-between bg-neutral-300 text-black px-6 py-4">
          <div className="flex items-center gap-3">
            {icon && (
              <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                {icon}
              </div>
            )}

            <div>
              <h2 className="font-semibold text-base">{title}</h2>
              {subTitle && (
                <p className="text-xs text-neutral-600 uppercase">{subTitle}</p>
              )}
            </div>
          </div>

          {/* RIGHT SLOT */}
          {renderRightContent && (
            <div className="flex items-center">{renderRightContent}</div>
          )}
        </div>

        {/* FORM BODY */}
        <div className="p-6">{children}</div>

        {/* FOOTER ACTIONS */}
        <div className="flex justify-end gap-4 px-6 pb-6">
          {onSkipPress && (
            <button
              onClick={onSkipPress}
              className="px-6 py-2 rounded-lg border cursor-pointer border-neutral-500 text-sm"
            >
              Skip
            </button>
          )}

          {onSubmit && (
            <button
              onClick={onSubmit}
              className="px-6 py-2 rounded-lg cursor-pointer bg-emerald-500 text-white font-medium"
            >
              Continue
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

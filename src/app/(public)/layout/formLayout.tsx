"use client";

import { useRouter } from "next/navigation";

import { ChevronLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type FormLayoutProps = {
  children: React.ReactNode;
  onPressBack?: () => void;
  title: string;
  submitBtnTitle: string;
  onSubmit?: () => void;
};

const FormLayout = ({
  children,
  onPressBack,
  title = "",
  submitBtnTitle = "",
  onSubmit,
}: FormLayoutProps) => {
  const { back } = useRouter();
  return (
    <div className="min-h-[calc(100vh - 214px)] text-white p-6 md:p-10">
      <div className="max-w-6xl mx-auto relative pb-20">
        <div className="flex items-center gap-4 mb-6">
          <button
            aria-label="back"
            className="p-2 rounded-full cursor-pointer text-emerald-400 hover:bg-white/5"
            onClick={() => {
              if (onPressBack) {
                onPressBack();
              } else {
                back();
              }
            }}
          >
            <ChevronLeft size={20} />
          </button>

          <div>
            <h2 className="text-2xl font-semibold pe-4">{title}</h2>
            <div
              className="mt-2 h-[3px] rounded-full bg-emerald-400"
              aria-hidden
            />
          </div>
        </div>
        <Card className="bg-transparent border-2 border-[#312D2D] rounded-3xl">
          <CardContent className="p-8">{children}</CardContent>
          <div className=" absolute bottom-15 left-1/2 -translate-x-1/2 w-[80%]">
            <Button
              type="button"
              className="w-full bg-gray-300 text-black/90 hover:brightness-95 rounded-lg font-semibold text-lg py-5"
              onClick={(e) => {
                e.preventDefault();
                if (onSubmit) onSubmit();
              }}
            >
              {submitBtnTitle}
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default FormLayout;

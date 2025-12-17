"use client";

import * as React from "react";

import * as LabelPrimitive from "@radix-ui/react-label";

import { cn } from "@/lib/utils";

function Label({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}

function FormField({ label, children, className = "" }: any) {
  return (
    <div className={`min-w-0 ${className}`}>
      <Label className="text-sm text-white/80 mb-2 block">{label}</Label>
      {children}
    </div>
  );
}

export { Label, FormField };

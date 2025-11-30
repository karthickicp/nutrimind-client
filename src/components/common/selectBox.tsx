import React from "react";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export const SelectBox = ({
  children,
  defaultValue,
}: {
  children: React.ReactNode;
  defaultValue?: string;
}) => {
  return (
    <Select defaultValue={defaultValue}>
      <SelectTrigger
        className="w-full bg-[rgba(255,255,255,0.02)] border border-white/6 rounded-lg px-4 text-left text-white/90 focus:ring-2 focus:ring-emerald-400 min-h-[60px]"
        aria-label="select"
      >
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="bg-[#0b0b0b] border border-white/6 text-white">
        {children}
      </SelectContent>
    </Select>
  );
};

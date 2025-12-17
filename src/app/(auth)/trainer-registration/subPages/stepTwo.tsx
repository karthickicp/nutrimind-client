"use client";

import React, { useRef, useState } from "react";

import { X, UploadCloud } from "lucide-react";

import { Button } from "@/components/ui/button"; // optional
import { Label } from "@/components/ui/label"; // optional - replace if not present
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

type FileMeta = { id: string; name: string; size: number };

const ALL_SPECIALTIES = [
  "Nutrition Expert",
  "Gym Trainer",
  "Yoga Instructor",
  "Weight Loss Coach",
  "Rehab Specialist",
];

const ALL_CITIES = ["JP Nagar", "BTM Layout", "Indiranagar", "Koramangala"];
const EXPERIENCE_OPTIONS = ["0-1", "1-3", "3-5", "5+"];
const LANGUAGES = ["English", "Hindi", "Kannada", "Telugu"];

export default function TrainerRegistrationStepTwo() {
  const [files, setFiles] = useState<FileMeta[]>([]);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [specialties, setSpecialties] = useState<string[]>([
    "Nutrition Expert",
    "Gym Trainer",
  ]);
  const [specialtyInput, setSpecialtyInput] = useState("");
  const [subCategory, setSubCategory] = useState<string | undefined>(undefined);

  const [city, setCity] = useState<string | undefined>(undefined);
  const [experience, setExperience] = useState<string | undefined>(undefined);

  const [languages, setLanguages] = useState<string[]>(["English", "Hindi"]);

  const [bio, setBio] = useState("");

  // File handling
  function handleFilesFromInput(flist: FileList | null) {
    if (!flist) return;
    const maxBytes = 5 * 1024 * 1024 * 1024; // 5GB
    const newFiles: FileMeta[] = [];
    for (let i = 0; i < flist.length; i++) {
      const f = flist[i];
      if (f.size > maxBytes) {
        // skip too large, optionally show error toast
        continue;
      }
      newFiles.push({
        id: `${Date.now()}-${i}`,
        name: f.name,
        size: f.size,
      });
    }
    setFiles((s) => [...s, ...newFiles]);
  }

  function onDrop(e: React.DragEvent) {
    e.preventDefault();
    e.stopPropagation();
    const dt = e.dataTransfer;
    handleFilesFromInput(dt.files);
  }

  function onFileInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    handleFilesFromInput(e.target.files);
    e.currentTarget.value = "";
  }

  function removeFile(id: string) {
    setFiles((s) => s.filter((f) => f.id !== id));
  }

  // Specialties tag handling
  function addSpecialty(tag: string) {
    const trimmed = tag.trim();
    if (!trimmed) return;
    if (specialties.includes(trimmed)) return;
    setSpecialties((s) => [...s, trimmed]);
    setSpecialtyInput("");
  }

  function removeSpecialty(tag: string) {
    setSpecialties((s) => s.filter((t) => t !== tag));
  }

  // Languages toggle
  function toggleLanguage(lang: string) {
    setLanguages((prev) =>
      prev.includes(lang) ? prev.filter((l) => l !== lang) : [...prev, lang]
    );
  }

  const isValid = specialties.length > 0 && city && experience;

  return (
    <div className="min-h-screen bg-black text-white px-4 py-8 md:px-10 md:py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          Trainer Registration
        </h1>

        {/* Stepper */}
        <div className="flex items-center justify-center gap-6 mb-8">
          <div className="flex items-center gap-4">
            <div className="h-9 w-9 rounded-full bg-emerald-500 flex items-center justify-center">
              1
            </div>
            <div className="h-[2px] w-16 bg-white/10" />
            <div className="h-9 w-9 rounded-full bg-emerald-500 flex items-center justify-center">
              2
            </div>
            <div className="h-[2px] w-16 bg-white/10" />
            <div className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center text-white/60">
              3
            </div>
          </div>
        </div>

        {/* Form */}
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          {/* Attachment */}
          <div>
            <label className="block mb-2 text-sm">Attachment</label>

            <div
              onDrop={onDrop}
              onDragOver={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
              onClick={() => fileInputRef.current?.click()}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter") fileInputRef.current?.click();
              }}
              className="border-2 border-dashed border-white/20 rounded-xl p-6 h-36 flex items-center justify-center cursor-pointer bg-[#0b0b0b] focus:outline-none"
              aria-label="Drop files here or click to upload"
            >
              <div className="text-center text-white/70">
                <div className="flex items-center justify-center mb-2">
                  <UploadCloud size={22} />
                </div>
                <div className="text-sm">
                  Drop here to attach or{" "}
                  <span className="text-emerald-400 underline">upload</span>
                </div>
                <div className="text-xs text-white/50 mt-1">Max size: 5GB</div>
              </div>

              <input
                ref={fileInputRef}
                type="file"
                multiple
                onChange={onFileInputChange}
                className="hidden"
                aria-hidden
              />
            </div>

            {/* File list */}
            {files.length > 0 && (
              <div className="mt-3 space-y-2">
                {files.map((f) => (
                  <div
                    key={f.id}
                    className="flex items-center justify-between gap-4 bg-[#0d0d0d] border border-white/10 rounded-md px-3 py-2"
                  >
                    <div className="text-sm">
                      <div className="font-medium">{f.name}</div>
                      <div className="text-xs text-white/60">
                        {(f.size / 1024 / 1024).toFixed(2)} MB
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeFile(f.id)}
                      aria-label={`Remove ${f.name}`}
                      className="p-2 rounded-md hover:bg-white/5"
                    >
                      <X />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Specialties + secondary select */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label className="mb-2">Specialties</Label>
              <div className="w-full rounded-xl border border-white/20 bg-[#0b0b0b] px-3 py-3">
                <div className="flex flex-wrap items-center gap-2">
                  {specialties.map((s) => (
                    <span
                      key={s}
                      className="inline-flex items-center gap-2 bg-emerald-500 text-black rounded-full px-3 py-1 text-sm"
                    >
                      {s}
                      <button
                        type="button"
                        onClick={() => removeSpecialty(s)}
                        aria-label={`Remove ${s}`}
                        className="ml-1 p-0.5 rounded-full hover:bg-white/10"
                      >
                        <X size={14} />
                      </button>
                    </span>
                  ))}

                  <input
                    value={specialtyInput}
                    onChange={(e) => setSpecialtyInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        addSpecialty(specialtyInput);
                      }
                      if (e.key === "Backspace" && !specialtyInput) {
                        // optional: remove last tag
                        setSpecialties((s) => s.slice(0, -1));
                      }
                    }}
                    placeholder="Type and press Enter to add"
                    className="flex-1 bg-transparent text-sm placeholder:text-white/50 text-white outline-none min-w-[120px]"
                    aria-label="Add specialty"
                  />
                </div>
              </div>
            </div>

            <div>
              <Label className="mb-2">Subcategory</Label>
              <Select defaultValue={subCategory}>
                <SelectTrigger className="w-full rounded-xl border border-white/20 bg-[#0b0b0b] text-sm text-white h-[60px]">
                  <SelectValue placeholder="Select subcategory" />
                </SelectTrigger>
                <SelectContent className="bg-[#0b0b0b] text-white border-white/20">
                  <SelectItem value="diet">Diet Plans</SelectItem>
                  <SelectItem value="yoga">Yoga</SelectItem>
                  <SelectItem value="strength">Strength Training</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* City + Experience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label className="mb-2">City</Label>
              <Select defaultValue={city}>
                <SelectTrigger className="w-full rounded-xl border border-white/20 bg-[#0b0b0b] text-sm text-white h-[60px]">
                  <SelectValue placeholder="City" />
                </SelectTrigger>
                <SelectContent className="bg-[#0b0b0b] text-white border-white/20">
                  {ALL_CITIES.map((c) => (
                    <SelectItem key={c} value={c}>
                      {c}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="mb-2">Experience</Label>
              <Select defaultValue={experience}>
                <SelectTrigger className="w-full rounded-xl border border-white/20 bg-[#0b0b0b] text-sm text-white h-[60px]">
                  <SelectValue placeholder="Experience" />
                </SelectTrigger>
                <SelectContent className="bg-[#0b0b0b] text-white border-white/20">
                  {EXPERIENCE_OPTIONS.map((opt) => (
                    <SelectItem key={opt} value={opt}>
                      {opt} years
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Languages chips */}
          <div>
            <Label className="mb-2">Languages</Label>
            <div className="w-full rounded-xl border border-white/20 bg-[#0b0b0b] px-3 py-3">
              <div className="flex flex-wrap gap-2 items-center">
                {LANGUAGES.map((lang) => {
                  const active = languages.includes(lang);
                  return (
                    <button
                      key={lang}
                      type="button"
                      onClick={() => toggleLanguage(lang)}
                      className={`px-3 py-1 rounded-full text-sm ${
                        active
                          ? "bg-emerald-500 text-black"
                          : "bg-transparent text-white/80 border border-white/10"
                      }`}
                      aria-pressed={active}
                    >
                      {lang}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bio */}
          <div>
            <Label className="mb-2">About</Label>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="Tell us a bit about yourself"
              className="w-full rounded-xl border border-white/20 bg-[#0b0b0b] px-4 py-3 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-emerald-500 min-h-[120px]"
              aria-label="Tell us about yourself"
            />
          </div>

          {/* CTA */}
          <div>
            <button
              type="submit"
              disabled={!isValid}
              className={`w-full h-[60px] rounded-xl font-semibold ${
                isValid
                  ? "bg-emerald-500 text-black"
                  : "bg-white/10 text-white/60 cursor-not-allowed"
              }`}
            >
              Continue →
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

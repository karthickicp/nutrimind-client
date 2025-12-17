"use client";

import React from "react";

import { MapPin, Search, Phone, Heart, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Doctor = {
  id: number;
  role: string;
  name: string;
  image: string;
  location: string;
  years: number;
  rating: string;
  firstCallFee: string;
  originalFee: string;
  ctaLabel: string;
};

const DOCTORS: Doctor[] = [
  {
    id: 1,
    role: "Dietitian",
    name: "Dr. Verma",
    image:
      "https://images.unsplash.com/photo-1550831107-1553da8c8464?q=80&w=600&auto=format&fit=crop",
    location: "JP Nagar, Bangalore",
    years: 15,
    rating: "5/5",
    firstCallFee: "₹ 0 for First Call",
    originalFee: "₹ 199*",
    ctaLabel: "Book",
  },
  {
    id: 2,
    role: "Nutrition Coach",
    name: "Dr. Rani Mehta",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=600&auto=format&fit=crop",
    location: "JP Nagar, Bangalore",
    years: 15,
    rating: "5/5",
    firstCallFee: "₹ 0 for First Call",
    originalFee: "₹ 199*",
    ctaLabel: "Call Now",
  },
  {
    id: 3,
    role: "Fitness Trainer",
    name: "Dr. Raj",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=600&auto=format&fit=crop",
    location: "JP Nagar, Bangalore",
    years: 15,
    rating: "5/5",
    firstCallFee: "₹ 0 for First Call",
    originalFee: "₹ 199*",
    ctaLabel: "Call Now",
  },
  {
    id: 4,
    role: "Personal Trainer",
    name: "Dr. Smith",
    image:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=600&auto=format&fit=crop",
    location: "JP Nagar, Bangalore",
    years: 15,
    rating: "5/5",
    firstCallFee: "₹ 0 for First Call",
    originalFee: "₹ 199*",
    ctaLabel: "Call Now",
  },
];

export default function DoctorListPage() {
  return (
    <div className="min-h-screen">
      {/* Top controls */}
      <header className="sticky top-0 z-20 bg-black/95 backdrop-blur border-b border-emerald-600/40">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <Select defaultValue="jp-nagar">
              <SelectTrigger className="w-full rounded-xl border border-white/20 bg-[#111111] text-sm font-medium text-white min-h-15 min-w-30">
                <SelectValue placeholder="Select location" />
              </SelectTrigger>
              <SelectContent className="bg-[#111111] text-white border-white/20">
                <SelectItem value="jp-nagar">JP Nagar</SelectItem>
                <SelectItem value="btm">BTM Layout</SelectItem>
                <SelectItem value="indiranagar">Indiranagar</SelectItem>
              </SelectContent>
            </Select>

            <div className="w-full flex flex-col gap-3 md:flex-row md:items-center md:gap-4">
              {/* Sort By */}
              <div className="w-full flex items-start md:items-center gap-3 flex-col md:flex-row">
                <p className="text-sm text-white/70 whitespace-nowrap min-w-max">
                  Sort By
                </p>

                <Select defaultValue="relevance">
                  <SelectTrigger className="flex-1 rounded-xl border border-white/20 bg-[#111111] text-sm font-medium text-white min-h-15 w-full">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#111111] text-white border-white/20">
                    <SelectItem value="relevance">Relevance</SelectItem>
                    <SelectItem value="experience">Experience</SelectItem>
                    <SelectItem value="price-low-high">
                      Price: Low to High
                    </SelectItem>
                    <SelectItem value="rating">Rating</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* All Filters */}
              <div className="w-full md:w-64">
                <Select defaultValue="all">
                  <SelectTrigger className="w-full rounded-xl border border-white/20 bg-[#111111] text-sm font-medium text-white min-h-15">
                    <SelectValue placeholder="All Filters" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#111111] text-white border-white/20">
                    <SelectItem value="all">All Filters</SelectItem>
                    <SelectItem value="relevance">Relevance</SelectItem>
                    <SelectItem value="experience">Experience</SelectItem>
                    <SelectItem value="price-low-high">
                      Price: Low to High
                    </SelectItem>
                    <SelectItem value="rating">Rating</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="relative w-full">
              <Input
                type="text"
                placeholder="Search"
                className="
                  w-full rounded-xl bg-[#A9A7A7] text-white placeholder:text-white
                  border-none min-h-15 pl-4 pr-10 text-sm font-medium
                  focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-0
                "
              />
              <Search
                size={18}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white pointer-events-none"
              />
            </div>
          </div>
        </div>
      </header>

      {/* List */}
      <main className="max-w-6xl mx-auto px-4 py-6">
        <div className="rounded-lg border border-emerald-600/40 bg-black/90">
          {DOCTORS.map((doc, idx) => (
            <div key={doc.id}>
              <div className="flex flex-wrap items-center gap-4 px-4 py-5 md:px-6">
                {/* avatar */}
                <div className="shrink-0">
                  <div className="h-16 w-16 md:h-20 md:w-20 rounded-full overflow-hidden border border-white/20">
                    <img
                      src={doc.image}
                      alt={doc.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                {/* middle details – more space */}
                <div className="">
                  {/* 1. Role + rating */}
                  <div className="flex flex-wrap items-center justify-between gap-2 lg:gap-6 mb-1">
                    <h2 className="text-lg md:text-xl font-semibold">
                      {doc.role}
                    </h2>

                    <div className="flex items-center gap-2 lg:gap-6">
                      <Heart size={16} className="text-red-500" />
                      <span className="flex items-center gap-1 rounded-full bg-primary px-2 py-0.5 text-xs font-semibold text-black">
                        <Star size={14} className="fill-black text-black" />
                        {doc.rating}
                      </span>
                    </div>
                  </div>

                  {/* 2. Name + experience */}
                  <div className="flex flex-wrap items-center justify-between gap-2 lg:gap-6 text-sm text-white/90 mb-1">
                    <span>👨‍⚕️ {doc.name}</span>
                    <span>🌞 {doc.years} Years Experience</span>
                  </div>

                  {/* 3. Location + price */}
                  <div className="flex flex-wrap items-center justify-between gap-2 lg:gap-6 text-xs md:text-sm text-white/75">
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      {doc.location}
                    </span>

                    <span className="flex items-center gap-2 lg:gap-6">
                      <span>{doc.firstCallFee}</span>
                      <span className="line-through text-red-400/80">
                        {doc.originalFee}
                      </span>
                    </span>
                  </div>
                </div>

                {/* CTA – white button */}
                <div className="ml-auto shrink-0">
                  <Button className="flex items-center gap-2 rounded-md bg-primary text-white px-4 py-2 text-sm font-semibold shadow hover:bg-emerald-600 min-w-[120px]">
                    <Phone size={18} />
                    <span>{doc.ctaLabel}</span>
                  </Button>
                </div>
              </div>

              {idx !== DOCTORS.length - 1 && (
                <div className="h-px w-full bg-primary" />
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

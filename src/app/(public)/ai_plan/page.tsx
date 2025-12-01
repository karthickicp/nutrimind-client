"use client";

import React, { JSX, useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Avatar } from "@/components/ui/avatar";
import {
  Home,
  Menu,
  Grid,
  Settings,
  ChevronLeft,
  Plus,
  Mic,
} from "lucide-react";

type NavItem = { id: string; label: string; icon: React.ReactNode };

const NAV_ITEMS: NavItem[] = [
  { id: "smart", label: "Smart Diet Planner", icon: <Home size={18} /> },
  { id: "fitness", label: "Fitness Coach", icon: <Grid size={18} /> },
  { id: "analyzer", label: "Body Analyzer", icon: <Settings size={18} /> },
];

export default function NutriMindDashboardLayout(): JSX.Element {
  const [collapsed, setCollapsed] = useState(false);
  const [active, setActive] = useState<string>("smart");
  const [popoverOpen, setPopoverOpen] = useState(false);

  function toggleSidebar() {
    setCollapsed((s) => !s);
    setPopoverOpen(false);
  }

  return (
    <div className="min-h-screen flex bg-black text-white">
      {/* Sidebar */}
      <aside
        className={`flex flex-col transition-all duration-200 ease-in-out bg-[#3A3434] text-white shadow-inner overflow-hidden`}
        style={{ width: collapsed ? 72 : 280 }}
      >
        {/* Sidebar header */}
        <div className="flex items-center justify-between px-4 py-5">
          <div className="flex items-center gap-3">
            <div className="ml-1">
              <span className="font-extrabold text-lg">NutriMind</span>
            </div>
          </div>

          {/* switch near logo - visible when expanded */}
          <div className="flex items-center">
            {!collapsed ? (
              <button
                aria-label="collapse sidebar"
                onClick={toggleSidebar}
                className="p-2 rounded-md hover:bg-white/5 transition-colors"
              >
                <ChevronLeft size={18} />
              </button>
            ) : null}
          </div>
        </div>

        {/* Nav items */}
        <nav className="flex-1 px-2 py-4 space-y-1">
          <div className="text-xs uppercase text-white/60 px-3 mb-2">
            Choose Your AI Coach
          </div>
          {NAV_ITEMS.map((n) => {
            const isActive = active === n.id;
            return (
              <button
                key={n.id}
                onClick={() => setActive(n.id)}
                className={`w-full flex items-center gap-3 py-3 px-3 rounded-md hover:bg-white/3 transition-colors ${
                  isActive ? "bg-white/6 ring-1 ring-emerald-400" : ""
                }`}
              >
                <div className="flex items-center justify-center w-8 h-8 text-white/90">
                  {n.icon}
                </div>
                {!collapsed ? (
                  <div
                    className={`truncate ${
                      collapsed
                        ? "opacity-0 -translate-x-1.5 pointer-events-none"
                        : "opacity-100"
                    } transition-all duration-200`}
                  >
                    {n.label}
                  </div>
                ) : null}
              </button>
            );
          })}

          <hr className="border-t border-white/6 my-4" />

          <div
            className={`text-sm text-white/80 px-3 ${
              collapsed ? "opacity-0 pointer-events-none" : ""
            }`}
          >
            Recent Conversations
          </div>
          <div className="mt-3 space-y-2 px-2">
            <div
              className={`py-2 px-3 rounded-md hover:bg-white/3 ${
                collapsed ? "opacity-0 pointer-events-none" : ""
              }`}
            >
              Lose belly fat in 2 mont..
            </div>
            <div
              className={`py-2 px-3 rounded-md hover:bg-white/3 ${
                collapsed ? "opacity-0 pointer-events-none" : ""
              }`}
            >
              Create protein meal pl..
            </div>
          </div>
        </nav>

        {/* Bottom area */}
        <div className="px-3 py-4">
          {!collapsed ? (
            <div className="space-y-3">
              <button className="w-full bg-white/5 py-2 rounded-md flex items-center justify-center gap-2">
                <Plus size={16} /> <span>Add Plan</span>
              </button>
              <button className="w-full py-2 rounded-md bg-white/5 flex items-center justify-center gap-2">
                <Mic size={16} /> <span>Voice</span>
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              <button className="w-full bg-white/5 py-2 rounded-md flex items-center justify-center gap-2">
                <Plus size={16} />
              </button>
              <button className="w-full py-2 rounded-md bg-white/5 flex items-center justify-center gap-2">
                <Mic size={16} />
              </button>
            </div>
          )}
        </div>
      </aside>

      {/* Main area */}
      <div className="flex-1 min-h-screen flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-between h-16 px-4 md:px-8 border-b border-white/6">
          <div className="flex items-center gap-4">
            {collapsed ? (
              <button
                onClick={toggleSidebar}
                aria-label="expand sidebar"
                className="p-2 rounded-md hover:bg-white/5"
              >
                <Menu size={18} />
              </button>
            ) : null}

            <div className="ml-1 text-sm text-white/70">N</div>
          </div>

          <div className="flex items-center gap-4">
            <button className="px-3 py-2 rounded-md hover:bg-white/5">
              Share
            </button>
            <button className="px-3 py-2 rounded-md hover:bg-white/5">
              •••
            </button>
          </div>
        </header>

        {/* Content stage */}
        <main className="flex-1 p-6 md:p-10 overflow-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left big card (green) */}
            <section className="lg:col-span-2 bg-[#06311c] rounded-[28px] p-8 relative">
              <h3 className="text-xl font-semibold mb-4">
                First meal option (Breakfast)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                <div className="md:col-span-2">
                  <div className="text-3xl font-bold mb-4">
                    Oatmeal with Fruit and Nuts
                  </div>
                  <div className="text-sm text-white/70 mb-4">
                    15 Minutes • Serves: 2 people
                  </div>
                  <p className="text-white/80 leading-relaxed">
                    Oatmeal with Fruit and Nuts is an excellent breakfast,
                    providing sustained energy and supporting heart health
                    through its beta-glucan fiber. The added nuts and fruit
                    boost satiety and deliver vital nutrients, aiding in weight
                    management...
                  </p>
                </div>
                <div className="md:col-span-1 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full overflow-hidden border border-white/10">
                    <img
                      src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=800&auto=format&fit=crop&s=placeholder"
                      alt="oatmeal"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* floating quick actions popover */}
              <div className="absolute left-8 bottom-8">
                <div className="relative">
                  <button
                    onClick={() => setPopoverOpen((v) => !v)}
                    className="bg-white/6 py-3 px-4 rounded-lg shadow-lg"
                  >
                    Quick Actions
                  </button>

                  {popoverOpen ? (
                    <div className="mt-3 w-56 bg-[#2f2b2b] p-4 rounded-lg shadow-2xl">
                      <div className="space-y-3">
                        <button className="w-full text-left py-2 px-3 rounded-md bg-white/5">
                          🍱 AI Diet Planner
                        </button>
                        <button className="w-full text-left py-2 px-3 rounded-md bg-white/5">
                          🏋️ Trainer Connect
                        </button>
                        <button className="w-full text-left py-2 px-3 rounded-md bg-white/5">
                          🧘 AI Fitness & Fat-Loss Guide
                        </button>
                        <button className="w-full text-left py-2 px-3 rounded-md bg-white/5">
                          🧠 AI Diet & Wellness CoachPlanner
                        </button>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </section>

            {/* Right card (white content) */}
            <aside className="bg-white text-black rounded-[18px] p-6">
              <h4 className="font-semibold mb-4">Key Component</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden border">
                    <img
                      src="https://images.unsplash.com/photo-1516685018646-549b9c12e5b6?q=80&w=800&auto=format&fit=crop&s=placeholder"
                      alt="oat"
                    />
                  </div>
                  <div>
                    <div className="font-semibold">Oatmeal</div>
                    <div className="text-xs text-black/60">
                      Complex Carbohydrate & Fiber
                    </div>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden border">
                    <img
                      src="https://images.unsplash.com/photo-1502741126161-b048400d6f66?q=80&w=800&auto=format&fit=crop&s=placeholder"
                      alt="nuts"
                    />
                  </div>
                  <div>
                    <div className="font-semibold">Nuts</div>
                    <div className="text-xs text-black/60">
                      Healthy Fats & Protein
                    </div>
                  </div>
                </li>
              </ul>
            </aside>
          </div>

          {/* Bottom pill input centered */}
          <div className="mt-10 flex justify-center">
            <div className="w-full max-w-4xl relative">
              <div className="flex items-center bg-white/6 border border-white/10 rounded-full py-6 px-6">
                <button className="mr-4 p-2 rounded-full bg-white/5">
                  <Plus size={20} />
                </button>
                <div className="flex-1 text-lg">Plan now</div>
                <button className="ml-4 p-2 rounded-full bg-white/5">
                  <Mic size={20} />
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

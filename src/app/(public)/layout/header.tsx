"use client";

import { useState } from "react";

import Link from "next/link";

import { Button } from "@/components/ui/button";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <header>
        <div className="container flex items-center justify-between py-4">
          <div className="text-2xl font-bold">NutriMind</div>

          <div className="flex items-center gap-6">
            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8 me-6">
              <Link
                href="/"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Trainers
              </Link>
              <Link
                href="/"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Pricing
              </Link>
            </nav>

            <Button
              variant="outline"
              className="btn-outline-primary h-auto px-4 py-4 hidden md:inline-flex min-w-[150px]"
            >
              <a href="/login" className="hover:underline">
                Login{" "}
              </a>
              /
              <a href="/signup" className="hover:underline">
                SignUp
              </a>
            </Button>
            <Button className="btn-primary h-auto px-4 py-4 hidden md:inline-flex min-w-[150px]">
              Join as Trainer / Nut
            </Button>

            {/* Mobile hamburger */}
            <button
              type="button"
              className="md:hidden flex items-center flex-col justify-center rounded-md p-2 border border-white/10 text-white hover:bg-white/10"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
            >
              {/* simple hamburger icon */}
              <span className="block w-5 h-0.5 bg-white mb-1" />
              <span className="block w-5 h-0.5 bg-white mb-1" />
              <span className="block w-5 h-0.5 bg-white" />
            </button>
          </div>
        </div>
      </header>

      {/* Overlay + sliding menu */}
      {/* overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* drawer */}
      <aside
        className={`fixed inset-y-0 right-0 z-50 w-72 max-w-full bg-black border-l border-white/10
        transform transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b border-white/10">
          <div className="text-lg font-semibold">Menu</div>
          <button
            type="button"
            className="inline-flex h-8 w-8 items-center justify-center rounded-full hover:bg-white/10 text-white"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            {/* X icon */}
            <span className="relative block w-4 h-4">
              <span className="absolute inset-0 w-[2px] bg-white rotate-45 left-1/2 -translate-x-1/2" />
              <span className="absolute inset-0 w-[2px] bg-white -rotate-45 left-1/2 -translate-x-1/2" />
            </span>
          </button>
        </div>

        <div className="flex flex-col gap-4 px-4 py-6 text-sm">
          <Link
            href="/"
            className="py-2 text-gray-300 hover:text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            Trainers
          </Link>
          <Link
            href="/"
            className="py-2 text-gray-300 hover:text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            Pricing
          </Link>

          <div className="mt-4 flex flex-col gap-3">
            <Button
              variant="outline"
              className="btn-outline-primary w-full h-auto py-3 px-4"
              onClick={() => setIsMenuOpen(false)}
            >
              <a href="/login" className="hover:underline">
                Login{" "}
              </a>
              /
              <a href="/signup" className="hover:underline">
                SignUp
              </a>
            </Button>
            <Button
              className="btn-primary w-full h-auto py-3 px-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Join as Trainer / Nut
            </Button>
          </div>
        </div>
      </aside>
    </>
  );
};

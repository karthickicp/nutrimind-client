import Link from "next/link";

import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="container flex items-center justify-between">
      <div className="text-2xl font-bold">NutriMind</div>

      <div className="flex items-center gap-6">
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
          className="hidden sm:inline-flex h-auto border-white/20 text-white hover:bg-white/10 py-4 px-4 cursor-pointer font-semibold min-w-[150px]"
        >
          Login / SignUp
        </Button>
        <Button className="hidden sm:inline-flex h-auto bg-emerald-500 hover:bg-emerald-600 text-white py-4 px-4 cursor-pointer font-semibold min-w-[150px]">
          Join as Trainer / Nut
        </Button>
      </div>
    </header>
  );
};

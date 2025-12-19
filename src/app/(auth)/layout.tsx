import type { Metadata } from "next";

import { Poppins } from "next/font/google";
import "@/app/globals.css";

const popins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Authentication - NutriMind",
  description:
    "Access your NutriMind account - Login or sign up to start your personalized nutrition and fitness journey.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <div className="min-h-screen w-full flex items-center justify-center relative antialiased dark">
      <div className="absolute left-10 top-1/2 -translate-y-1/2 text-6xl opacity-30">
        🔥
      </div>
      <div className="absolute right-10 top-1/2 -translate-y-1/2 text-6xl opacity-30">
        💪
      </div>
      <div className="absolute left-20 bottom-10 text-6xl opacity-30">
        🏋️‍♂️
      </div>
      <div className="absolute right-20 bottom-10 text-6xl opacity-30">
        🥗
      </div>
      {children}
    </div>
  );
}

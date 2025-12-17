import type { Metadata } from "next";

import { Poppins } from "next/font/google";

import "@/app/globals.css";
import UserDetailsProvider from "@/providers/user-details-provider";

const popins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "User details",
  description: "user details description",
};

export default function UserDetailsRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${popins.variable} antialiased dark`}
        suppressHydrationWarning
      >
        <UserDetailsProvider>{children}</UserDetailsProvider>
      </body>
    </html>
  );
}

"use server";

import { cookies } from "next/headers";

const TOKEN_NAME = "nutri-accessToken";

const COOKIE_OPTIONS = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax" as const,
  maxAge: 60 * 60 * 24 * 7, // 7 days
  path: "/",
};

/**
 * Get the access token from cookies
 * @returns The access token or null if not found
 */

export async function getCookie(value: string): Promise<string | null> {
  const cookieStore = await cookies();
  return cookieStore.get(value)?.value || null;
}

export async function setCookie(name: string, value: string): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.set(name, value, COOKIE_OPTIONS);
}

export async function deleteCookie(name: string): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(name);
}

/**
 * Check if user is authenticated
 * @returns true if access token exists, false otherwise
 */
export async function isAuthenticated(): Promise<boolean> {
  const token = await getCookie(TOKEN_NAME);
  return !!token;
}

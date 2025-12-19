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
export async function getAccessToken(): Promise<string | null> {
  const cookieStore = await cookies();
  return cookieStore.get(TOKEN_NAME)?.value || null;
}

/**
 * Set the access token in cookies with secure flags
 * @param token - The access token to store
 */
export async function setAccessToken(token: string): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.set(TOKEN_NAME, token, COOKIE_OPTIONS);
}

/**
 * Remove the access token from cookies
 */
export async function clearAccessToken(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(TOKEN_NAME);
}

/**
 * Check if user is authenticated
 * @returns true if access token exists, false otherwise
 */
export async function isAuthenticated(): Promise<boolean> {
  const token = await getAccessToken();
  return !!token;
}


export async function setTempAccessTOken(token: string): Promise<void> {
  const cookieStore = await cookies();
  console.log(token, "cookieStore token")
   cookieStore.set("temp-nutrimind-accessToken", token, COOKIE_OPTIONS);
}

export async function getTempAccessToken(): Promise<string | null> {
  const cookieStore = await cookies();
  return cookieStore.get("temp-nutrimind-accessToken")?.value || null;
}

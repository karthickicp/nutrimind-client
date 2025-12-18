import { ApiType, HttpMethods } from "@/constants/common";

export const apiSignUp = {
  url: "internal/auth/register",
  method: HttpMethods.POST,
  type: ApiType.UNAUTH,
};

export const apiLogin = {
  url: "internal/auth/login",
  method: HttpMethods.POST,
  type: ApiType.UNAUTH,
};

export const apiForgotPassword = {
  url: "internal/auth/forgot-password",
  method: HttpMethods.POST,
  type: ApiType.UNAUTH,
};

export const apiVerifyOtp = {
  url: "internal/auth/verify-otp",
  method: HttpMethods.POST,
  type: ApiType.UNAUTH,
};

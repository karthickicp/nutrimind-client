"use server";

import { ApiType } from "@/constants/common";
import { setAccessToken } from "@/lib/auth-helpers";
import { apiCall } from "@/services/apiCall";
import { apiLogin, apiSignUp } from "@/services/apiRoutes";
import {
  ILoginReq,
  ILoginRes,
  ISignupReq,
  ISignUpRes,
} from "@/types/auth/auth-api";

export const signupUser = async (payload: ISignupReq): Promise<ISignUpRes> => {
  try {
    const response = await apiCall({
      ...apiSignUp,
      body: payload,
      type: ApiType.UNAUTH,
    });

    const signupResponse = await response.json();

    if (!response.ok) {
      return {
        success: false,
        message: signupResponse.message || "Signup failed. Please try again.",
      };
    }

    return signupResponse;
  } catch (err) {
    console.error("[signupUser] Error:", err);
    return {
      success: false,
      message: "An unexpected error occurred. Please try again later.",
    };
  }
};

export const loginUser = async (payload: ILoginReq): Promise<ILoginRes> => {
  try {
    const response = await apiCall({
      ...apiLogin,
      body: payload,
      type: ApiType.UNAUTH,
    });
    const loginResponse = await response.json();

    if (!response.ok) {
      return {
        success: false,
        message:
          loginResponse.message ||
          "Login failed. Please check your credentials.",
        access_token: "",
        user: null,
      };
    }

    // Store access token securely
    if (loginResponse.access_token) {
      await setAccessToken(loginResponse.access_token);
    }

    return loginResponse;
  } catch (err) {
    console.error("[loginUser] Error:", err);
    return {
      success: false,
      message: "An unexpected error occurred. Please try again later.",
      access_token: "",
      user: null,
    };
  }
};

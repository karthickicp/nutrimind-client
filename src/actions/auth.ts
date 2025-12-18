"use server";

import { ApiType } from "@/constants/common";
import { setAccessToken } from "@/lib/auth-helpers";
import { apiCall } from "@/services/apiCall";
import {
  apiLogin,
  apiSignUp,
  apiForgotPassword,
  apiVerifyOtp,
  apiresetPassword,
} from "@/services/apiRoutes";
import {
  ILoginReq,
  ILoginRes,
  ISignupReq,
  ISignUpRes,
  IForgotPasswordReq,
  IForgotPasswordRes,
  IVerifyOtpReq,
  IVerifyOtpRes,
  IResetPasswordReq,
} from "@/types/auth/auth-api";
import { IApiResponse } from "@/types/common";

export const signupUser = async (payload: ISignupReq): Promise<ISignUpRes> => {
  try {
    const response = await apiCall({
      ...apiSignUp,
      body: payload,
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

export const forgotPassword = async (
  payload: IForgotPasswordReq
): Promise<IForgotPasswordRes> => {
  try {
    const response = await apiCall({
      ...apiForgotPassword,
      body: payload,
    });

    const forgotPasswordResponse = await response.json();

    if (!response.ok) {
      return {
        success: false,
        message:
          forgotPasswordResponse.message ||
          "Failed to send reset link. Please try again.",
      };
    }

    return forgotPasswordResponse;
  } catch (err) {
    console.error("[forgotPassword] Error:", err);
    return {
      success: false,
      message: "An unexpected error occurred. Please try again later.",
    };
  }
};

export const verifyOtp = async (
  payload: IVerifyOtpReq
): Promise<IVerifyOtpRes> => {
  try {
    const response = await apiCall({
      ...apiVerifyOtp,
      body: payload,
    });

    const verifyOtpResponse = await response.json();

    if (!response.ok) {
      return {
        success: false,
        message: verifyOtpResponse.message || "Invalid OTP. Please try again.",
      };
    }

    return verifyOtpResponse;
  } catch (err) {
    console.error("[verifyOtp] Error:", err);
    return {
      success: false,
      message: "An unexpected error occurred. Please try again later.",
    };
  }
};

export const resetPassword = async (
  payload: IResetPasswordReq
): Promise<IApiResponse> => {
  try {
    const response = await apiCall({
      ...apiresetPassword,
      body: payload,
    });

    const resetPasswordResponse = await response.json();

    if (!response.ok) {
      return {
        success: false,
        message:
          resetPasswordResponse.message || "Invalid OTP. Please try again.",
      };
    }

    return resetPasswordResponse;
  } catch (err) {
    console.error("[resetPassword] Error:", err);
    return {
      success: false,
      message: "An unexpected error occurred. Please try again later.",
    };
  }
};

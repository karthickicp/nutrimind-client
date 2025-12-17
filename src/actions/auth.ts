"use server";

import { ApiType } from "@/constants/common";
import { apiCall } from "@/services/apiCall";
import { apiLogin, apiSignUp } from "@/services/apiRoutes";
import {
  ILoginReq,
  ILoginRes,
  ISignupReq,
  ISignUpRes,
} from "@/types/auth/auth-api";
import { cookies } from "next/headers";

export const signupUser = async (
  payload: ISignupReq
): Promise<ISignUpRes | null> => {
  try {
    const response = await apiCall({
      ...apiSignUp,
      body: payload,
      type: ApiType.UNAUTH,
    });
    if (response.ok) {
      const signupResponse: ISignUpRes = await response.json();
      console.log(signupResponse, "signupResponse");
      return signupResponse;
    }
    return null;
  } catch (err) {
    throw err;
  }
};

export const loginUser = async (
  payload: ILoginReq
): Promise<ILoginRes | null> => {
  try {
    const response = await apiCall({
      ...apiLogin,
      body: payload,
      type: ApiType.UNAUTH,
    });
    console.log(response, "api response");
    if (response.ok) {
      const loginResponse: ILoginRes = await response.json();
      console.log(loginResponse, "loginResponse");
      if (loginResponse.access_token) {
        const cookiesStore = await cookies();
        cookiesStore.set("nutri-accessToken", loginResponse.access_token);
      }
      return loginResponse;
    }
    return null;
  } catch (err) {
    throw err;
  }
};

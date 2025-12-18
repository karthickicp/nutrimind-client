import { IApiResponse } from "../common";

export type ISignupReq = {
  name: string;
  email: string;
  password: string;
};

export interface ISignUpRes extends IApiResponse {
  success: boolean;
  message: string;
  notification_group?: string;
}

export type ILoginReq = {
  email: string;
  password: string;
};

export interface ILoginRes extends IApiResponse {
  access_token: string;
  user: unknown | null;
}

export type IForgotPasswordReq = {
  email: string;
};

export interface IForgotPasswordRes extends IApiResponse {
  success: boolean;
  message: string;
}

export type IVerifyOtpReq = {
  email: string;
  otp: string;
};

export interface IVerifyOtpRes extends IApiResponse {
  token?: string;
}

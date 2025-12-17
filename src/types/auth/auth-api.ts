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
  notification_group: "NutriMind";
  access_token: string;
  user: unknown;
}

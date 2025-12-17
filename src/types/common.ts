import { ApiType } from "@/constants/common";
export type IApiCallRequest = {
  url: string;
  method: string;
  type: (typeof ApiType)[keyof typeof ApiType];
  headers?: Record<string, unknown>;
  body?: unknown;
  cache?: "no-store";
  params?: URLSearchParams;
  contentType?: string;
  noContentType?: boolean;
};

export type IApiResponse = {
  success: boolean;
  message: string;
};

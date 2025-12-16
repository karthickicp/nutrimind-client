export type IApiCallRequest = {
  url: string;
  method: string;
  type: string;
  headers?: Record<string, unknown>;
  body?: unknown;
  cache?: "no-store";
  params?: URLSearchParams;
  contentType?: string;
  noContentType?: boolean;
};

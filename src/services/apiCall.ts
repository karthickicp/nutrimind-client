"use server";

import { ApiType } from "@/constants/common";
import { getCookie } from "@/lib/auth-helpers";
import { IApiCallRequest } from "@/types/common";

export const apiCall = async ({
  url,
  method,
  type,
  body,
  headers,
  cache,
  params,
  contentType,
  noContentType,
}: IApiCallRequest) => {
  const apiBaseUrl =
    type === ApiType.AUTH
      ? process.env.NEXT_PUBLIC_AUTH_API_BASE_URL
      : process.env.NEXT_PUBLIC_UNAUTH_API_BASE_URL;

  const token = await getCookie("nutri-accessToken");
  let apiPath = `${apiBaseUrl}${url}`;
  if (params) {
    apiPath += `?${new URLSearchParams(params)}`;
  }

  return fetch(apiPath, {
    method: method,
    body: body ? JSON.stringify(body) : undefined,
    headers: {
      ...(type === ApiType.AUTH && { Authorization: `Bearer ${token}` }),
      ...(!noContentType && {
        "Content-Type": contentType ?? "application/json",
      }),
      ...(headers && Object.keys(headers).length && headers),
    },
    cache,
  });
};

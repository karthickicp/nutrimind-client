"use server";

import { IApiCallRequest } from "@/types/common";
import { cookies } from "next/headers";

export const apiCall = async ({
  url,
  method,
  body,
  headers,
  cache,
  params,
  contentType,
  noContentType,
}: IApiCallRequest) => {
  const apiBaseUrl = process.env.NEXT_PUBLIC_AUTH_API_BASE_URL;
  const cookieStore = await cookies();
  const token = cookieStore.get("nutri-accessToken")?.value || null;
  let apiPath = `${apiBaseUrl}${url}`;
  if (params) {
    apiPath += `?${new URLSearchParams(params)}`;
  }

  return fetch(apiPath, {
    method: method,
    body: body ? JSON.stringify(body) : undefined,
    headers: {
      Authorization: `Bearer ${token}`,
      ...(!noContentType && {
        "Content-Type": contentType ?? "application/json",
      }),
      ...(headers && Object.keys(headers).length && headers),
    },
    cache,
  });
};

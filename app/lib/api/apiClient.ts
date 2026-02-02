// lib/apiClient.ts
import { STRAPI_URL, STRAPI_TOKEN } from "@/lib/env";

type RequestOptions = {
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  body?: unknown;
  params?: Record<string, string | number | boolean>;
  revalidate?: number | false;
};

export async function apiClient<T>(
  path: string,
  options: RequestOptions = {}
): Promise<T> {
  const {
    method = "GET",
    body,
    params,
    revalidate = 60,
  } = options;

  const url = new URL(path, STRAPI_URL);

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.set(key, String(value));
    });
  }

  const res = await fetch(url.toString(), {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(STRAPI_TOKEN && {
        Authorization: `Bearer ${STRAPI_TOKEN}`,
      }),
    },
    body: body ? JSON.stringify(body) : undefined,
    ...(revalidate === false
      ? { cache: "no-store" }
      : { next: { revalidate } }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`API ${res.status}: ${text}`);
  }

  return res.json();
}

import { createURLSearchParams } from "./urlParams";
import { REFRESH_URL } from "@/constants/url";

type FetchOptions = {
  query?: Record<string, string | number | boolean | undefined | null>;
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  headers?: Record<string, string>;
  body?: Record<string, unknown> | string | FormData | null;
};

const refreshAccessToken = async () => {
  const refreshToken = localStorage.getItem("refreshToken");

  if (!refreshToken) return;

  const refreshResponse = await fetch(REFRESH_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ refreshToken }),
  });

  if (!refreshResponse.ok) {
    throw new Error("Failed to refresh token");
  }

  const refreshData = await refreshResponse.json();
  localStorage.setItem("accessToken", refreshData.accessToken);

  return refreshData.accessToken;
};

export const fetchData = async <T>(
  url: string,
  options: FetchOptions = {},
  retry: boolean = false
): Promise<T> => {
  try {
    let fullUrl = url;

    if (options.query) {
      const queryString = createURLSearchParams(options.query).toString();
      fullUrl += `?${queryString}`;
    }

    const { method = "GET", headers = {}, body } = options;
    const isFormData = body instanceof FormData;

    const requestHeaders = {
      ...(isFormData
        ? headers
        : { "Content-Type": "application/json", ...headers }),
    };

    let requestBody = null;

    if (method !== "GET" && body) {
      requestBody = isFormData ? body : JSON.stringify(body);
    }

    const response = await fetch(fullUrl, {
      method,
      headers: requestHeaders,
      body: requestBody,
    });

    if (!response.ok) {
      if (response.status === 401 && retry === false) {
        const newAccessToken = await refreshAccessToken();

        return await fetchData(
          url,
          {
            ...options,
            headers: {
              Authorization: `Bearer ${newAccessToken}`,
            },
          },
          true
        );
      }

      const errorData = await response.json();
      throw new Error(
        errorData.message || `HTTP error! status: ${response.status}`
      );
    }

    const responseBody = await response.json();
    return responseBody;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("Unknown error occurred during fetch");
  }
};

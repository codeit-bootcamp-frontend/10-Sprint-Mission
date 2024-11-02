import { createURLSearchParams } from "./urlParams";

type FetchOptions = {
  query?: Record<string, string | number | boolean | undefined | null>;
  method?: "GET" | "POST" | "PUT" | "DELETE";
  headers?: Record<string, string>;
  body?: Record<string, unknown> | string | FormData | null;
};

export const fetchData = async (url: string, options: FetchOptions = {}) => {
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

    const requestBody =
      method !== "GET" && body
        ? isFormData
          ? body
          : JSON.stringify(body)
        : null;

    const response = await fetch(fullUrl, {
      method,
      headers: requestHeaders,
      body: requestBody,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseBody = await response.json();
    return responseBody;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Fetch failed: ${error.message}`);
    }
    throw new Error("Unknown error occurred during fetch");
  }
};

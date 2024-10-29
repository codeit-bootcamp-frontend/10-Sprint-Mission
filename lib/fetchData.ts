import { createURLSearchParams } from "./urlParams";

type FetchOptions = {
  query?: Record<string, string | number | boolean | undefined | null>;
  method?: "GET" | "POST" | "PUT" | "DELETE";
  headers?: Record<string, string>;
  body?: Record<string, unknown> | string | null;
};

export const fetchData = async (url: string, options: FetchOptions = {}) => {
  try {
    let fullUrl = url;

    if (options.query) {
      const queryString = createURLSearchParams(options.query).toString();
      fullUrl += `?${queryString}`;
    }

    const { method = "GET", headers = {}, body } = options;

    const response = await fetch(fullUrl, {
      method,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: method !== "GET" && body ? JSON.stringify(options.body) : null,
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

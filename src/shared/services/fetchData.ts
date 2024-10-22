import { createURLSearchParams } from "shared/utils/urlParams";

type FetchOptions = {
  query?: Record<string, string | number | boolean>;
  method?: "GET" | "POST" | "PUT" | "DELETE";
  headers?: Record<string, string>;
  body?: unknown;
};

export const fetchData = async (url: string, options: FetchOptions = {}) => {
  try {
    let fullUrl = url;

    if (options.query) {
      const queryString = createURLSearchParams(options.query).toString();
      fullUrl += `?${queryString}`;
    }

    const response = await fetch(fullUrl, {
      method: options.method || "GET",
      headers: {
        "Content-Type": "application/json",
        ...(options.headers || {}),
      },
      body: options.body ? JSON.stringify(options.body) : null,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const body = await response.json();
    return body;
  } catch (error) {
    throw error;
  }
};

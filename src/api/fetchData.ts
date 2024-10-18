interface FetchDataOptions {
  url: string;
  query?: Record<string, any>;
  method?: string;
  body?: any;
  headers?: Record<string, string>;
}

interface FetchDataResult {
  data: any;
  loading: boolean;
  error: any;
}

export const fetchData = async ({
  url,
  query = {},
  method = 'GET',
  body = null,
  headers = {}
}: FetchDataOptions): Promise<FetchDataResult> => {
  const queryString = new URLSearchParams(query).toString();
  let data: any = null;
  let error: any = null;
  let loading: boolean = true;

  try {
    const options: RequestInit = {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers
      },
      ...(body && { body: JSON.stringify(body) })
    };

    const response = await fetch(`${url}?${queryString}`, options);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    data = result;
  } catch (err) {
    error = err;
  } finally {
    loading = false;
  }

  return { data, loading, error };
};

export default fetchData;

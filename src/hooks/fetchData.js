export const fetchData = async (url, query = {}, method = 'GET', body = null, headers = {}) => {
  const queryString = new URLSearchParams(query).toString();
  let data, error, loading = true;

  try {
    const options = {
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

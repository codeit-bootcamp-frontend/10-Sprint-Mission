import { useState, useEffect } from 'react';

export const useFetchData = (url, method = 'GET', body = null, headers = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const options = {
          method,
          headers: {
            'Content-Type': 'application/json',
            ...headers
          },
          ...(body && { body: JSON.stringify(body) })
        };

        const response = await fetch(url, options);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, method, body, headers]);

  return { data, loading, error };
};

export default useFetch;

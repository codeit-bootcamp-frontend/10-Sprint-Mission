const BASE_URL = 'https://panda-market-api.vercel.app';

async function fetchFromAPI(endpoint) {
  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(
        `HTTP error! Status: ${response.status} / response: ${response}`
      );
    }

    return await response.json();
  } catch (error) {
    console.error('Failed to fetch data:', error);
    throw error;
  }
}

export async function getItems({
  page = 1,
  pageSize = 10,
  orderBy = 'recent',
  keyword,
}) {
  const queryParams = new URLSearchParams({ page, pageSize, orderBy });

  if (keyword) {
    queryParams.append('keyword', keyword);
  }

  const endpoint = `${BASE_URL}/products?${queryParams.toString()}`;
  return await fetchFromAPI(endpoint);
}

export async function getItem(itemId) {
  const endpoint = `${BASE_URL}/products/${itemId}`;

  return await fetchFromAPI(endpoint);
}

export async function getItemComments(itemId, limit = 10) {
  const queryParams = new URLSearchParams({ limit });

  const endpoint = `${BASE_URL}/products/${itemId}/comments?${queryParams.toString()}`;
  return await fetchFromAPI(endpoint);
}

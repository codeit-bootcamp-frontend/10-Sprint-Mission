import { Board, GetBoardsResponse, GetBoardsRequestParams } from './boardTypes';

const BASE_URL = 'https://panda-market-api.vercel.app';

async function fetchFromAPI<T>(endpoint: string): Promise<T> {
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

export async function getBoards({
  page = 1,
  pageSize = 10,
  orderBy = 'recent',
  keyword,
}: GetBoardsRequestParams) {
  const queryParams = new URLSearchParams({
    page: page.toString(),
    pageSize: pageSize.toString(),
    orderBy,
  });

  if (keyword) {
    queryParams.append('keyword', keyword);
  }

  const endpoint = `${BASE_URL}/products?${queryParams.toString()}`;
  return await fetchFromAPI<GetBoardsResponse>(endpoint);
}

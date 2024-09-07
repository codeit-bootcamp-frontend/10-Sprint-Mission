const BASE_URL = "https://panda-market-api.vercel.app/products";

export const getProducts = async ({
  page = 1,
  pageSize = 4,
  orerderBy = "recent",
}) => {
  const query = `page=${page}&pageSize=${pageSize}&orderBy=${orerderBy}`;
  const response = await fetch(`${BASE_URL}?${query}`);

  if (!response) {
    throw new Error("상품을 불러오는데 실패했습니다");
  }

  const body = await response.json();
  return body;
};

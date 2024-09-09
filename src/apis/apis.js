const baseUrl = "https://panda-market-api.vercel.app/";

export async function getProducts({
  page = 1,
  pageSize = 10,
  orderBy = "recent",
  keyword,
}) {
  const url = new URL("products", baseUrl);
  const params = { page, pageSize, orderBy };
  if (keyword) params.append("keyword", keyword);
  url.search = new URLSearchParams(params);

  const response = await fetch(url);
  if (!response.ok) throw Error(`${response.status}: ${response.statusText}`);
  const body = await response.json();
  return body;
}

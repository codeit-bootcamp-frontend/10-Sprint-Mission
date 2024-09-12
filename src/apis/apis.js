const baseUrl = "https://panda-market-api.vercel.app/";

export async function getProducts({
  page = 1,
  pageSize = 10,
  orderBy = "recent",
  keyword,
}) {
  const url = new URL("products", baseUrl);
  const paramObj = { page, pageSize, orderBy };
  if (keyword) paramObj.keyword = keyword;
  url.search = new URLSearchParams(paramObj);

  const response = await fetch(url);
  if (!response.ok) throw Error(`${response.status}: ${response.statusText}`);
  const body = await response.json();
  return body;
}

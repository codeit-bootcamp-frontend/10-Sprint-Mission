import { StringObj, GetProductsParams, GetProductsRes } from "./apis.type";

const BASE_URL = "https://panda-market-api.vercel.app/";

const PATH = {
  PRODUCTS: "products",
};

async function processResponse(response: Response) {
  if (!response.ok) throw Error(`${response.status}: ${response.statusText}`);
  return await response.json();
}

export async function getProducts({
  page = 1,
  pageSize = 10,
  orderBy = "recent",
  keyword,
}: GetProductsParams): Promise<GetProductsRes> {
  const url = new URL(PATH.PRODUCTS, BASE_URL);
  const paramObj: StringObj = {
    page: String(page),
    pageSize: String(pageSize),
    orderBy,
  };
  if (keyword) paramObj.keyword = keyword;
  url.search = String(new URLSearchParams(paramObj));

  const response = await fetch(url);

  return processResponse(response);
}

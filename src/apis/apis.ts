type ObjType = Record<string, unknown>;

export interface GetProductsParams extends ObjType {
  page: number;
  pageSize: number;
  orderBy: "recent" | "favorite";
  keyword?: string;
}

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
}: GetProductsParams): Promise<ObjType> {
  const url = new URL(PATH.PRODUCTS, BASE_URL);
  const paramObj: Record<string, string> = {
    page: String(page),
    pageSize: String(pageSize),
    orderBy,
  };
  if (keyword) paramObj.keyword = keyword;
  url.search = String(new URLSearchParams(paramObj));

  const response = await fetch(url);

  return processResponse(response);
}

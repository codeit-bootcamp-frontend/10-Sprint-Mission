import { StringObj, GetArticlesRes, GetArticlesParams } from "./apis.type";

const BASE_URL = "https://panda-market-api.vercel.app/";

const PATH = {
  ARTICLE: "articles",
};

async function processResponse(response: Response) {
  if (!response.ok) throw Error(`${response.status}: ${response.statusText}`);

  return await response.json();
}

export async function getArticles({
  page = 1,
  pageSize = 10,
  orderBy = "recent",
  keyword,
}: GetArticlesParams): Promise<GetArticlesRes> {
  const url = new URL(PATH.ARTICLE, BASE_URL);
  const paramObj: StringObj = {
    page: String(page),
    pageSize: String(pageSize),
    orderBy,
    ...(keyword && { keyword }),
  };
  url.search = String(new URLSearchParams(paramObj));

  const response = await fetch(url);
  return processResponse(response);
}

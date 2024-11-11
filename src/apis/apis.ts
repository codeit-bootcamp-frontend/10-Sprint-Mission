import {
  StringObj,
  GetArticlesRes,
  GetArticlesParams,
  PostSignUpParams,
  PostSignUpRes,
  PostLogInParams,
  PostLogInRes,
} from "./apis.type";

const BASE_URL = "https://panda-market-api.vercel.app/";

const PATH = {
  ARTICLE: "articles",
  SIGNUP: "auth/signUp",
  LOGIN: "auth/signIn",
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

export async function postSignUp({
  email,
  nickname,
  password,
  passwordConfirmation,
}: PostSignUpParams): Promise<PostSignUpRes> {
  const url = new URL(PATH.SIGNUP, BASE_URL);
  const headObj = new Headers({
    "Content-Type": "application/json",
  });
  const bodyObj: StringObj = {
    email,
    nickname,
    password,
    passwordConfirmation,
  };

  const response = await fetch(url, {
    method: "post",
    headers: headObj,
    body: JSON.stringify(bodyObj),
  });
  return processResponse(response);
}

export async function postLogIn({
  email,
  password,
}: PostLogInParams): Promise<PostLogInRes> {
  const url = new URL(PATH.LOGIN, BASE_URL);
  const headObj = new Headers({
    "Content-Type": "application/json",
  });
  const bodyObj: StringObj = {
    email,
    password,
  };

  const response = await fetch(url, {
    method: "post",
    headers: headObj,
    body: JSON.stringify(bodyObj),
  });
  return processResponse(response);
}

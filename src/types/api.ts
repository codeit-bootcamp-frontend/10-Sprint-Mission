export interface GetMeRes {
  id: number;
  image: string | null;
  nickname: string;
  updatedAt: string;
  createdAt: string;
}

export interface GetProductsParams {
  page: number;
  pageSize: number;
  orderBy: "favorite" | "recent";
  keyword?: string;
}

export interface GetProductsRes {
  totalCount: number;
  list: [
    {
      createdAt: string;
      favoriteCount: number;
      ownerNickname: string;
      ownerId: number;
      images: string[];
      tags: string[];
      price: number;
      description: string;
      name: string;
      id: number;
    }
  ];
}

export interface PostSignUpParams {
  email: string;
  nickname: string;
  password: string;
  passwordConfirmation: string;
}

export interface PostSignUpRes {
  accessToken: string;
  refreshToken: string;
  user: {
    id: number;
    email: string;
    image: string | null;
    nickname: string;
    updatedAt: string;
    createdAt: string;
  };
}

export interface PostLogInParams {
  email: string;
  password: string;
}

export type PostLogInRes = PostSignUpRes;

export interface PostRefreshParams {
  refreshToken: string;
}

export interface PostRefreshRes {
  accessToken: string;
}

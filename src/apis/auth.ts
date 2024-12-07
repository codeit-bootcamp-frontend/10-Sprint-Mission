import { instance } from "./instance";
import { PATH } from "@/constants/api";
import {
  PostSignUpParams,
  PostSignUpRes,
  PostLogInParams,
  PostLogInRes,
  PostRefreshParams,
  PostRefreshRes,
} from "@/types/api";

export const postSignUp = async ({
  email,
  nickname,
  password,
  passwordConfirmation,
}: PostSignUpParams) => {
  const bodyObj = { email, nickname, password, passwordConfirmation };

  const response = await instance.post<PostSignUpRes>(PATH.SIGNUP, bodyObj);
  return response.data;
};

export const postLogIn = async ({ email, password }: PostLogInParams) => {
  const bodyObj = { email, password };

  const response = await instance.post<PostLogInRes>(PATH.LOGIN, bodyObj);
  return response.data;
};

export const postRefresh = async ({ refreshToken }: PostRefreshParams) => {
  const bodyObj = { refreshToken };

  const response = await instance.post<PostRefreshRes>(PATH.REFRESH, bodyObj);
  return response.data;
};

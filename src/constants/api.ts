export const BASE_URL = "https://panda-market-api.vercel.app";

export const PATH = {
  ME: "users/me",
  PRODUCTS: "products",
  SIGNUP: "auth/signUp",
  LOGIN: "auth/signIn",
  REFRESH: "auth/refresh-token",
} as const;

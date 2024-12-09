import { instance } from "./instance";
import { PATH } from "@/constants/api";
import { GetProductsParams, GetProductsRes } from "@/types/api";

export const getProducts = async ({
  page = 1,
  pageSize = 10,
  orderBy = "recent",
  keyword,
}: GetProductsParams) => {
  const paramObj = { page, pageSize, orderBy, ...(keyword && { keyword }) };

  const response = await instance.get<GetProductsRes>(PATH.PRODUCTS, {
    params: paramObj,
  });
  return response.data;
};

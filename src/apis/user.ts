import { PATH } from "@/constants/api";
import { instance } from "./instance";
import { GetMeRes } from "@/types/api";

export const getMe = async () => {
  const response = await instance.get<GetMeRes>(PATH.ME);
  return response.data;
};

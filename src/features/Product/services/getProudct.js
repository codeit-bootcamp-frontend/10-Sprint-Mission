import { BASE_URL } from "constants/api";

export const getProudct = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`);

  if (!response) {
    throw new Error("상품을 불러오는데 실패했습니다.");
  }

  const body = await response.json();
  return body;
};

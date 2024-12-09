import { PRODUCT_URL } from "@/constants/url";
import { fetchData } from "./fetchData";
import { CreateProductRequestBody } from "@/components/additem/AddItemForm";
import { ProductProps } from "@/types/product";

export const getProduct = async (id: string) => {
  if (!id) return;
  const accessToken = localStorage.getItem("accessToken");
  const response = await fetchData<ProductProps>(`${PRODUCT_URL}/${id}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response;
};

export const addProduct = async ({
  imgUrl,
  product,
  ...otherValues
}: CreateProductRequestBody) => {
  const accessToken = localStorage.getItem("accessToken");
  const body = imgUrl
    ? { images: [imgUrl], name: product, ...otherValues }
    : { name: product, ...otherValues };

  const response = await fetchData<ProductProps>(PRODUCT_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    body,
  });
  return response.id;
};

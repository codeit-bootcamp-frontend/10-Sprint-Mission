import { IMAGE_URL } from "@/constants/url";
import { fetchData } from "./fetchData";

export const uploadImage = async (imgFile: File) => {
  const accessToken = localStorage.getItem("accessToken");
  const formData = new FormData();
  formData.append("image", imgFile);

  const response = await fetchData<{ url: string }>(IMAGE_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    body: formData,
  });
  return response.url;
};

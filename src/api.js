import axios from "axios";

const BackEndUrl = "https://panda-market-api.vercel.app/products";

export const fetchProducts = async (page, sortOrder, pageSize) => {
  try {
    const response = await axios.get(
      `${BackEndUrl}?page=${page}&orderBy=${sortOrder}&pageSize=${pageSize}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

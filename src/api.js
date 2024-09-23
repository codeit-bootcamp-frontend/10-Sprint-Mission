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

export const fetchDetailProduct = async (id) => {
  try {
    const response = await axios.get(`${BackEndUrl}/${id}`);
    return response.data;
  } catch (error) {
    console.log("Error fetching products:", error);
    throw error;
  }
};

export const fetchProductsComments = async (id) => {
  try {
    console.log(`${BackEndUrl}/${id}/comments?limit=3`);
    const response = await axios.get(`${BackEndUrl}/${id}/comments?limit=3`);
    return response.data;
  } catch (error) {
    console.log("Error fetching products:", error);
    throw error;
  }
};

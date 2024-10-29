import axios from "axios";
import { ProductListFetcherParams } from "@/types/productTypes";

export async function getProducts({
  orderBy,
  pageSize,
  page = 1,
}: ProductListFetcherParams) {
  const params = new URLSearchParams({
    orderBy,
    pageSize: String(pageSize),
    page: String(page),
  });

  try {
    const response = await axios.get(
      `https://panda-market-api.vercel.app/products`,
      { params }
    );

    if (response.status !== 200) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.data;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    throw error;
  }
}

export async function getProductDetail(productId: number) {
  if (!productId) {
    throw new Error("Invalid product ID");
  }

  try {
    const response = await axios.get(
      `https://panda-market-api.vercel.app/products/${productId}`
    );
    if (response.status !== 200) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.data;
  } catch (error) {
    console.error("Failed to fetch product detail:", error);
    throw error;
  }
}

export async function getProductComments({
  productId,
  limit = 10,
}: {
  productId: number;
  limit?: number;
}) {
  if (!productId) {
    throw new Error("Invalid product ID");
  }

  const params = {
    limit: String(limit),
  };

  try {
    const response = await axios.get(
      `https://panda-market-api.vercel.app/products/${productId}/comments`,
      { params }
    );
    if (response.status !== 200) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.data;
  } catch (error) {
    console.error("Failed to fetch product comments:", error);
    throw error;
  }}

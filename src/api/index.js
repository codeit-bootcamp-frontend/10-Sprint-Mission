import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://panda-market-api.vercel.app',
  timeout: 10000,
});

export async function getBestProductList(params = {}) {
  try {
    const response = await instance.get('/products', { params });
    return response.data.list
      .sort((a, b) => b.favoriteCount - a.favoriteCount)
      .slice(0, 4);
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getProduct(productId) {
  try {
    const response = await instance.get(`/products/${productId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://panda-market-api.vercel.app',
  timeout: 10000,
});

export async function getProductList(params = {}) {
  try {
    const response = await instance.get('/products', { params });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

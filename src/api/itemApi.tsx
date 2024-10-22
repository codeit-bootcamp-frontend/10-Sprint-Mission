import axios from 'axios';

const BASE_URL = 'https://panda-market-api.vercel.app';

export async function getProducts(params = {}) {
    const allowedParams = ["orderBy", "pageSize", "page", "keyword"];
    const invalidParams = Object.keys(params)
        .filter(key => !allowedParams.includes(key));
        
    if (invalidParams.length > 0) {
        console.error(`Invalid parameters detected: ${invalidParams.join(", ")}`);
    }

    try {
        const response = await axios.get(`${BASE_URL}/products`, {
            params
        });
        return response.data; 
    } catch (error) {
        console.error("Failed to fetch products:", error);
        throw error;
    }
}

export async function getProductDetail(productId: number) {
    try {
        const response = await axios.get(`${BASE_URL}/products/${productId}`);
        return response.data; 
    } catch (error) {
        console.error("Failed to fetch product details:", error);
        throw error;
    }
}

export async function postProductComment(productId: number, formData: FormData) {
    try {
        const response = await axios.post(`${BASE_URL}/products/${productId}/comments`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data; 
    } catch (error) {
        console.error("Failed to post product comment:", error);
        throw error;
    }
}

export async function getProductComments(productId: number, params = { limit: 10, cursor: 0 }) {
    try {
        const response = await axios.get(`${BASE_URL}/products/${productId}/comments`, {
            params: {
                limit: params.limit,
                cursor: params.cursor
            }
        });
        return response.data; 
    } catch (error) {
        console.error("Failed to fetch product comments:", error);
        throw error;
    }
}
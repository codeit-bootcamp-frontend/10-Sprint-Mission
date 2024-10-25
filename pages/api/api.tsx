import axios from 'axios';
const BASE_URL = 'https://panda-market-api.vercel.app';

export async function getArticles(params = {}) {
    const allowedParams = ["orderBy", "pageSize", "page", "keyword"];
    const invalidParams = Object.keys(params)
        .filter(key => !allowedParams.includes(key));
        
    if (invalidParams.length > 0) {
        console.error(`Invalid parameters detected: ${invalidParams.join(", ")}`);
    }

    try {
        const response = await axios.get(`${BASE_URL}/articles`, {
            params
        });
        return response.data; 
    } catch (error) {
        console.error("Failed to fetch products:", error);
        throw error;
    }
}
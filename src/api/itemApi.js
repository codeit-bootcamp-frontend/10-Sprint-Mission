const BASE_URL = 'https://panda-market-api.vercel.app';

export async function getProducts(params = {}) {

    const query = new URLSearchParams(params).toString();
    const allowedParams = ["orderBy", "pageSize", "page", "keyword"];
    const invalidParams = Object.keys(params)
        .filter(key => !allowedParams.includes(key));
        
    if (invalidParams.length > 0) {
        console.error(`Invalid parameters detected: ${invalidParams.join(", ")}`);
    }

    try {
        const response = await fetch(
        `${BASE_URL}/products?${query}`
        );
        if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
        }
        const body = await response.json();
        return body;
    } catch (error) {
        console.error("Failed to fetch products:", error);
        throw error;
    }
}

export async function getProductDetail(productId) {
    try {
        const response = await fetch(
            `${BASE_URL}/products/${productId}` 
        );
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        
        const body = await response.json();
        return body;
    } catch (error) {
        console.error("Failed to fetch product details:", error);
        throw error;
    }
}

export async function postProductComment(productId, formData) {
    try {
        const response = await fetch(
            `${BASE_URL}/products/${productId}/comments`,
            {
                method:'POST',
                body:formData,
            } 
        );
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        const body = await response.json();
        return body;
    } catch (error) {
        console.error("Failed to fetch product comments:", error);
        throw error;
    }
}

export async function getProductComments(productId, params = {}) {
    const { limit, cursor } = params;
    const query = new URLSearchParams({ limit, cursor }).toString(); // limit과 cursor만 query로 사용

    try {
        const response = await fetch(
            `${BASE_URL}/products/${productId}/comments?${query}`
        );
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        const body = await response.json();
        return body;
    } catch (error) {
        console.error("Failed to fetch product comments:", error);
        throw error;
    }
}
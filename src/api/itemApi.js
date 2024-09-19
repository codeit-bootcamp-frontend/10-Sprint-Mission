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

export async function createFood(formData) {
    const response = await fetch(`${BASE_URL}/products`, {
      method: 'POST',
      body: formData,
    });
    if (!response.ok) {
      throw new Error('데이터를 생성하는데 실패했습니다');
    }
    const body = await response.json();
    return body;
  }
  
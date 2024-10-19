/**
 * api 호출 await 필요
 * @param {*} page 페이지 번호 | default 1
 * @param {*} pageSize 페이지 당 상품 수 | default 10
 * @param {*} orderBy 정렬 기준 favorite, recent | default recent
 * @param {*} keyword 검색 키워드
 * @returns
 */
export async function getItems(
	page = 1,
	pageSize = 10,
	orderBy = "recent",
	keyword
) {
	const searchQuery = keyword ? `keyword=${keyword}` : "";
	const response = await fetch(
		`https://panda-market-api.vercel.app/products?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&${searchQuery}`
	);
	const body = await response.json();
	return body;
}



export async function addItem(requestBody) {
	const response = await fetch("https://panda-market-api.vercel.app/products", {
		method: "POST",
		body: JSON.stringify({
			images: requestBody.images, 
			tags: requestBody.tags,
			price: requestBody.price, 
			description: requestBody.description,
			name: requestBody.name, 
		}),
	});
	return response;
}


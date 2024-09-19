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

// // 1페이지 10개 최신순 줘
// const 1페이지10개 = getItems(1,10,"recent")
// const 2페이지10개 = getItems(2,10,"recent")
// const 3페이지10개 = getItems(3,10,"recent")

// // 최신순으로 1페이지 1개 줘
// const 1페이지10개 = getItems(1,10,"favorite")
// const 2페이지10개 = getItems(2,10,"favorite")
// const 3페이지10개 = getItems(3,10,"favorite")

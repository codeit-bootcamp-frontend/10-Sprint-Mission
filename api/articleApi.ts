export async function getArticleDetail(articleId: number) {
  if (!articleId) {
    throw new Error("Invalid article ID");
  }

  try {
    const response = await fetch(
      `https://panda-market-api.vercel.app/articles/${articleId}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const body = await response.json();
    return body;
  } catch (error) {
    console.error("Failed to fetch article detail:", error);
    throw error;
  }
}

export async function getArticleComments({
  articleId,
  limit = 10,
}: {
  articleId: number;
  limit?: number;
}) {
  if (!articleId) {
    throw new Error("Invalid article ID");
  }

  const params = {
    limit: String(limit),
  };

  try {
    const query = new URLSearchParams(params).toString();
    const response = await fetch(
      `https://panda-market-api.vercel.app/articles/${articleId}/comments?${query}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const body = await response.json();
    return body;
  } catch (error) {
    console.error("Failed to fetch article comments:", error);
    throw error;
  }
}

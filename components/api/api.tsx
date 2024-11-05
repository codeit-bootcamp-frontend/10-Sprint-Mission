import axios from 'axios';
import { ItemList } from '@/components/boards/PostList';
import { Article } from '@/components/board/Article';
import { CommentList } from '@/components/board/Comment';
const BASE_URL = 'https://panda-market-api.vercel.app';

export async function getArticles(params = {}) {
    const allowedParams = ["orderBy", "pageSize", "page", "keyword"];
    const invalidParams = Object.keys(params)
        .filter(key => !allowedParams.includes(key));
        
    if (invalidParams.length > 0) {
        console.error(`Invalid parameters detected: ${invalidParams.join(", ")}`);
    }

    try {
        const response = await axios.get<ItemList>(`${BASE_URL}/articles`, {
            params
        });
        return response.data; 
    } catch (error) {
        console.error("Failed to fetch articles:", error);
        throw error;
    }
}

export async function getArticleDetail(articleId: number) {
    try {
        const response = await axios.get<Article>(`${BASE_URL}/articles/${articleId}`);
        return response.data; 
    } catch (error) {
        console.error("Failed to fetch article details:", error);
        throw error;
    }
}

export async function getArticleComment(articleId: number, params = { limit: 10, cursor: 0 }) {
    try {
        const response = await axios.get<CommentList>(`${BASE_URL}/articles/${articleId}/comments`, {
                params: {
                    limit: params.limit,
                    cursor: params.cursor
                }
        });
        return response.data; 
    } catch (error) {
        console.error("Failed to fetch comment details:", error);
        throw error;
    }
}

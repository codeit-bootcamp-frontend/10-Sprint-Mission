import React, { useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
import * as CS from './Styled';
import Profileimg from '@/components/common/images/default.png';
import { getArticleComment } from '../api/api';
import CommentItem from './CommentItem';

export interface Writer {
    image: string;
    nickname: string;
    id: number;
}

export interface Comment {
    writer: Writer;
    createdAt: string;
    content: string;
    id: number;
}

export interface CommentListResponse {
    nextCursor: number;
    list: Comment[];
}

export default function Comment() {
    const [value, setValue] = useState("");
    const [isValid, setIsValid] = useState(false);
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const id = router.query['id'];
    const [itemList, setItemList] = useState<CommentListResponse>({ nextCursor: 0, list: [] });
    const LIMIT = 6;

    const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setValue(event.target.value);
    };

    const handleLoad = useCallback(async () => {
        try {
            setLoading(true);
            const comments = await getArticleComment(Number(id));
            setItemList({ nextCursor: comments.nextCursor, list: comments.list });
            console.log(comments.list);
        } catch (error) {
            console.error("Failed to load comments:", error);
        } finally {
            setLoading(false);
        }
    }, [id]);

    useEffect(() => {
        setIsValid(value.trim() !== '');
    }, [value]);

    useEffect(() => {
        handleLoad();
    }, [handleLoad]);

    if (loading) {
        return <p>Loading comments...</p>;
    }

    return (
        <CS.CommentContainer>
            <CS.WriteCommentContainer>
                <CS.CommentTitle>댓글달기</CS.CommentTitle>
                <CS.CommentTextarea 
                    name="description"
                    value={value}  
                    placeholder="댓글을 입력해주세요"
                    onChange={handleTextareaChange}
                />
            </CS.WriteCommentContainer>
            <CS.CommentList>
                {itemList.list.map((item) => (
                    <CommentItem key={item.id} item={item} />
                ))}
            </CS.CommentList>
        </CS.CommentContainer>
    );
}
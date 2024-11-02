import React, { useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
import * as CS from './Styled';
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
    const router = useRouter();
    const id = router.query['id'];
    const [itemList, setItemList] = useState<CommentListResponse>({ nextCursor: 0, list: [] });
    const LIMIT = 6;

    const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setValue(event.target.value);
    };

    const handleLoad = useCallback(async () => {
        try {
            const comments = await getArticleComment(Number(id),{ limit: LIMIT, cursor: 0 });
            setItemList({ nextCursor: comments.nextCursor, list: comments.list });
        } catch (error) {
            console.error("Failed to load comments:", error);
        }
    }, [id]);

    useEffect(() => {
        setIsValid(value.trim() !== '');
    }, [value]);

    useEffect(() => {
        handleLoad();
    }, [handleLoad]);

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
                <CS.CommentSubmitButtonWrapper>
                    <CS.CommentSubmitButton type="submit" disabled={!isValid}>등록</CS.CommentSubmitButton>
                </CS.CommentSubmitButtonWrapper>
            </CS.WriteCommentContainer>
            <CS.CommentList>
                {itemList.list.map((item) => (
                    <CommentItem key={item.id} item={item} />
                ))}
            </CS.CommentList>
        </CS.CommentContainer>
    );
}
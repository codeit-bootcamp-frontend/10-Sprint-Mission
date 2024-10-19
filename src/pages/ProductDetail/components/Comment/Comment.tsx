import React, { useState, useEffect, useCallback } from 'react';
import styles from './Comment.module.css';
import { useParams } from 'react-router-dom';
import { postProductComment, getProductComments } from '../../../../api/itemApi';
import CommentItem from '../CommentItem/CommentItem';

interface Comment {
    id: number;
    writer: Writer;
    content: string;
    createdAt: string;
    updatedAt: string;
}

interface CommentList {
    nextCursor: number;
    list: Comment[];
}

interface Writer {
    image: string;
    nickname: string;
    id: number;
}

function Comment() {
    const [value, setValue] = useState('');
    const [isValid, setIsValid] = useState(false);
    const { productId } = useParams<{ productId: string }>();
    const [itemList, setItemList] = useState<CommentList>({ nextCursor: 0, list: [] });
    const LIMIT = 6;

    const handleLoad = useCallback(async () => {
        const comments = await getProductComments(Number(productId), { limit: LIMIT, cursor: 0 });
        setItemList({ nextCursor: comments.nextCursor, list: comments.list }); 
        console.log(comments.list);
    }, [productId]);

    const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('comment', value);
        await postProductComment(Number(productId), formData);
        setValue('');
        await handleLoad();
    };

    useEffect(() => {
        setIsValid(value.trim() !== '');
    }, [value]);

    useEffect(() => {
        handleLoad();
    }, [handleLoad]);

    return (
        <div className={styles.commentContainer}>
            <label>문의하기</label>
            <form className={styles.commentPost} onSubmit={handleSubmit}>
                <textarea
                    className={styles.commentInput}
                    name='comment'
                    value={value}
                    placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
                    onChange={(e) => setValue(e.target.value)}
                ></textarea>
                <div className={styles.buttonContainer}>
                    <button className={styles.submitButton} disabled={!isValid}>
                        등록
                    </button>
                </div>
            </form>

            <div className={styles.commentList}>
                {itemList.list.map((item) => (
                    <CommentItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
}

export default Comment;
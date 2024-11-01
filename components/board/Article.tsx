import React, { useEffect, useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import * as BS from '@/components/board/Styled';
import LikeIcon from '@/components/common/images/ic_heart.png';
import ProfileImg from '@/components/common/images/profile.png';
import { getArticleDetail } from '../api/api';
import formatDate from '../common/function/formatDate';
export interface Item {
    id: number;
    title: string;
    content: string;
    images: string;
    writer: Writer;
    likeCount: number;
    createdAt: string;
}

export interface Writer {
    nickname: string;
    id: number;
}

export default function Article() {
    const router = useRouter();
    const id = router.query['id'];
    const [loading, setLoading] = useState(true);
    const [item, setItem] = useState<Item | undefined>(undefined);

    const fetchArticleData = useCallback(async () => {
        try {
            setLoading(true);
            if (id) { 
                const product = await getArticleDetail(Number(id)); 
                setItem(product);
                console.log(product);
            }
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    }, [id]);

    useEffect(() => {
        if (id) {
            fetchArticleData();
        }
    }, [fetchArticleData, id]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!item) {
        return ;
    }

    return (
        <BS.ContentContainer>
            <BS.Title>{item.title}</BS.Title>
            <BS.ContentInfoContainer>
                <BS.WriterProfile src={ProfileImg} alt="작성자 프로필 이미지" />
                <BS.WriterName>{item.writer.nickname}</BS.WriterName>
                <BS.WriteDate>{formatDate(item.createdAt)}</BS.WriteDate>
                <BS.LikeContainer>
                    <BS.LikeIcon src={LikeIcon} alt="좋아요" />
                    <BS.LikeCount>{item.likeCount}</BS.LikeCount>
                </BS.LikeContainer>
            </BS.ContentInfoContainer>
            <BS.Line />
            <BS.ArticleText>{item.content}</BS.ArticleText>
        </BS.ContentContainer>
    );
}
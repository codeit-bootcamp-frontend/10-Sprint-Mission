import React, { useState, useEffect, useCallback} from 'react';
import * as BS from './Styled';
import BestPostCard from './BestPostCard';
import { Item, ItemList } from './PostList';
import { getArticles } from '@/components/api/api';

export default function BestPost() {
    const [itemList, setItemList] = useState<ItemList>({ totalCount: 0, list: [] });
    const [pageSize, setPageSize] = useState(4);
    const [order, setOrder] = useState('like');
    const fetchSortedData = useCallback(async () => {
        try {
            const articles = await getArticles({ orderBy: order, pageSize });
            setItemList(articles); 
        } catch (error) {
            console.error('Error fetching articles:', error);
        }
    }, [order, pageSize]);

    useEffect(() => {
        fetchSortedData(); 
    }, [fetchSortedData]);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 767) {
                setPageSize(1);
            } else if (width < 1280) {
                setPageSize(2);
            } else {
                setPageSize(4);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); 

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <BS.BestPostConainer>
            <BS.Title>베스트 게시글</BS.Title>
            <BS.BestCardListContainer>
            {itemList.list.map((item) => (
                <BestPostCard key={item.id} item={item} />
            ))}
            </BS.BestCardListContainer>
        </BS.BestPostConainer>
    );
}

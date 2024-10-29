import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import * as BS from './Styled';
import PostCard from './PostCard';
import { getArticles } from '@/pages/api/api';

export interface Item {
    id: number;
    title: string;
    content: string;
    image: string;
    writer: Writer;
    likeCount: number;
    updatedAt: string;
    createdAt: string;
}

interface Writer {
    nickname: string;
    id: number;
}

export interface ItemList {
    totalCount: number;
    list: Item[];
}

export default function PostList() {
    const [itemList, setItemList] = useState<ItemList>({ totalCount: 0, list: [] });
    const [pageSize, setPageSize] = useState(4); 
    const [order, setOrder] = useState('recent');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [search, setSearch] = useState('');

    const router = useRouter();
    const{ q } = router.query;

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleNewestClick = () => {
        setOrder('recent');
        setIsDropdownOpen(false);
    };

    const handleLikeClick = () => {
        setOrder('like');
        setIsDropdownOpen(false);
    };
    
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value);
    const fetchSortedData = useCallback(async () => {
        try {
            const articles = await getArticles({ orderBy: order, pageSize: 1, keyword:search});
            const totalCount = articles.totalCount;
            const allArticles = await getArticles({ orderBy: order, pageSize: totalCount, keyword:search});
            setItemList(allArticles);
            console.log(allArticles);
        } catch (error) {
            console.error('Error fetching articles:', error);
        }
    }, [order, search]);

    useEffect(() => {
        fetchSortedData();
    }, [fetchSortedData]);

    return (
        <BS.PostListContainer>
            <BS.PostListHeader>
                <BS.Title>게시물</BS.Title>
                <BS.PostButton>글쓰기</BS.PostButton>
            </BS.PostListHeader>
            <BS.SearchContainer>
                <BS.SearchBox
                    type='text'
                    placeholder='검색할 상품을 입력해주세요'
                    onChange={handleChange}
                    value={search}
                > 
                </BS.SearchBox>
                <BS.DropdownButtonContainer>
                    <BS.DropdownButton onClick={toggleDropdown}>
                        {order === 'recent' ? '최신순' : '좋아요순'} <BS.DropdownArrow>▾</BS.DropdownArrow>
                    </BS.DropdownButton>
                    <BS.DropdownMenu $isOpen={isDropdownOpen}>
                        <BS.DropdownOption onClick={handleNewestClick}>최신순</BS.DropdownOption>
                        <BS.DropdownOption onClick={handleLikeClick}>좋아요순</BS.DropdownOption>
                    </BS.DropdownMenu>
                </BS.DropdownButtonContainer>
            </BS.SearchContainer>
            {itemList.list.map((item) => (
                <PostCard key={item.id} item={item} />
            ))}
        </BS.PostListContainer>
    );
}
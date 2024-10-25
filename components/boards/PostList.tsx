import React, { useState } from 'react';
import * as BS from './Styled';
import PostCard from './PostCard';
export default function PostList() {
    const [order, setOrder] = useState('recent');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleNewestClick = () => {
        setOrder('recent');
        setIsDropdownOpen(false);
    };

    const handleFavoriteClick = () => {
        setOrder('favorite');
        setIsDropdownOpen(false);
    };

    return (
        <BS.PostListContainer>
            <BS.PostListHeader>
                <BS.Title>게시물</BS.Title>
                <BS.PostButton>글쓰기</BS.PostButton>
            </BS.PostListHeader>
            <BS.SearchContainer>
                <BS.SearchBox
                    placeholder='검색할 상품을 입력해주세요'
                ></BS.SearchBox>
                <BS.DropdownButtonContainer>
                    <BS.DropdownButton onClick={toggleDropdown}>
                        {order === 'recent' ? '최신순' : '좋아요순'} <BS.DropdownArrow>▾</BS.DropdownArrow>
                    </BS.DropdownButton>
                    <BS.DropdownMenu isOpen={isDropdownOpen}>
                        <BS.DropdownOption onClick={handleNewestClick}>최신순</BS.DropdownOption>
                        <BS.DropdownOption onClick={handleFavoriteClick}>좋아요순</BS.DropdownOption>
                    </BS.DropdownMenu>
                </BS.DropdownButtonContainer>
            </BS.SearchContainer>
            <PostCard />
        </BS.PostListContainer>
    );
}
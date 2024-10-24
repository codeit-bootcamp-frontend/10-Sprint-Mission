import React from 'react';
import * as BS from './Styled';
import BestPostCard from './BestPostCard';

export default function BestPost() {
    return (
        <BS.BestPostConainer>
            <BS.Title>베스트 게시글</BS.Title>
            <BS.BestCardListContainer>
                <BestPostCard />
            </BS.BestCardListContainer>
        </BS.BestPostConainer>
    );
}

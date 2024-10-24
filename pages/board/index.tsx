import React from 'react';
import * as BS from "../../components/_styled/boardStyled";
import Header from "@/components/layout/Header";
import BestPost from '@/components/board/BestPost';
import PostList from '@/components/board/PostList';
export default function Board() {
    return (
        <BS.BoardPage>
            <Header />
            <BS.BoardPageContainer>
                <BestPost />
                <PostList />
            </BS.BoardPageContainer>
        </BS.BoardPage>
    );
}


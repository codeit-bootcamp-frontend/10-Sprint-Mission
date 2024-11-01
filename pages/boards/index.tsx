import React from 'react';
import * as BS from "../../components/_styled/boardsStyled";
import Header from "@/components/layout/Header";
import BestPost from '@/components/boards/BestPost';
import PostList from '@/components/boards/PostList';
export default function Boards() {
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


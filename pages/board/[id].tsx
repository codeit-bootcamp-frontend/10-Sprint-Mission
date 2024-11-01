import { useRouter } from 'next/router';
import React from 'react';
import Header from '@/components/layout/Header';
import * as BS from '@/components/_styled/boardStyled';
import Article from '@/components/board/Article';
import Comment from '@/components/board/Comment';
export default function Board() {
    const router = useRouter();
    const id = router.query['id'];
    return (
        <BS.BoardPage>
            <Header />
            <BS.BoardPageContainer>
              <Article />
              <Comment />
            </BS.BoardPageContainer>
        </BS.BoardPage>
    );
}

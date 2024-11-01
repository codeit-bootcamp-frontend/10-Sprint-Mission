import { useRouter } from 'next/router';
import React from 'react';
import Header from '@/components/layout/Header';
import * as BS from '@/components/_styled/boardStyled';
import BoardContent from '@/components/board/BoardContent';

export default function Board() {
    const router = useRouter();
    const id = router.query['id'];
    return (
        <BS.BoardPage>
            <Header />
            <BS.BoardPageContainer>
              <BoardContent />
            </BS.BoardPageContainer>
        </BS.BoardPage>
    );
}

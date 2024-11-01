import React from 'react';
import * as AS from '@/components/_styled/addboardStyled';
import Header from "@/components/layout/Header";
import AddBoard from '@/components/addboard/AddBoard';

export default function Boards() {
    return (
        <AS.AddBoardPage>
            <Header />
            <AS.AddBoardPageContainer>
                <AddBoard />
            </AS.AddBoardPageContainer>
        </AS.AddBoardPage>
    );
}

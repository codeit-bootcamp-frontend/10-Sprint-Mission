import React from 'react';
import Image from 'next/image';
import { ContentContainer } from './Styled';
import * as BS from '@/components/board/Styled';
import { Title } from '../boards/Styled';
import LikeIcon from '@/components/common/images/ic_heart.png';
import ProfileImg from '@/components/common/images/profile.png';

export default function BoardContent() {
    return (
        <BS.ContentContainer>
            <BS.Title>맥북 16인치 16기가 1테라 정도 사양이면 얼마에 팔아야하나요?</BS.Title>
            <BS.ContentInfoContainer>
                <BS.WriterProfile src={ProfileImg} alt="작성자 프로필 이미지"/>
                <BS.WriterName>총명한 판다</BS.WriterName>
                <BS.WriteDate>2024.01.03</BS.WriteDate>
                <BS.LikeContainer>
                    <BS.LikeIcon src={LikeIcon} alt="좋아요" />
                    <BS.LikeCount>1234</BS.LikeCount>
                </BS.LikeContainer>
            </BS.ContentInfoContainer>
        </BS.ContentContainer>
    );
}


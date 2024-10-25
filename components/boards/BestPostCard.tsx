import React from 'react';
import * as BS from './Styled';
import MedalIcon from '../common/images/ic_medal.png';
import PostImg from '../common/images/postimg.png';
import LikeIcon from '../common/images/ic_heart.png';
export default function BestPostCard() {
    return (
        <BS.BestCardContainer>
            <BS.BestBadgeContainer>
                <BS.MedalIcon src={MedalIcon} alt="메달아이콘" />
                <BS.BestText>Best</BS.BestText>
            </BS.BestBadgeContainer>
            <BS.BestPostContentContainer>
                <BS.BestPostContentText>맥북 16인치 16기가 1테라 정도 사양이면 얼마에 팔아야하나요?</BS.BestPostContentText>
                <BS.BestPostImg src={PostImg} alt="게시물 이미지"></BS.BestPostImg>
            </BS.BestPostContentContainer>
            <BS.SubContainer>
                <BS.InfoContainer>
                    <BS.Writer>총명한 판다</BS.Writer>
                    <BS.LikeIcon src={LikeIcon} alt="좋아요 아이콘"></BS.LikeIcon>
                    <BS.LikeCount>999</BS.LikeCount>
                </BS.InfoContainer>
                <BS.PostDate>2024. 04. 16</BS.PostDate>
            </BS.SubContainer>
        </BS.BestCardContainer>
    );
}

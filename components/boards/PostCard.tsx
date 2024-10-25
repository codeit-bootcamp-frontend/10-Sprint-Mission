import React from 'react';
import { BestPostContentContainer, PostCardContainer } from './Styled';
import * as PS from './Styled';
import PostImg from '../common/images/postimg.png';
import LikeIcon from '../common/images/ic_heart.png';
import ProfileImg from '../common/images/profile.png';
export default function PostCard() {
    return (
        <PS.PostCardContainer>
            <PS.PostContentContainer>
                <PS.BestPostContentText>맥북 16인치 16기가 1테라 정도 사양이면 얼마에 팔아야하나요?</PS.BestPostContentText>
                <PS.BestPostImg src={PostImg} alt="게시물 이미지"></PS.BestPostImg>   
            </PS.PostContentContainer>
            <PS.SubContainer>
                <PS.InfoContainer>
                    <PS.ProfileImg src={ProfileImg} alt="프로필 이미지"></PS.ProfileImg>
                    <PS.Writer>총명한 판다</PS.Writer>
                    <PS.PostDate>2024. 04. 16</PS.PostDate>
                </PS.InfoContainer>
                <PS.InfoContainer>
                    <PS.LikeIcon src={LikeIcon} alt="좋아요 아이콘"></PS.LikeIcon>
                    <PS.LikeCount>999</PS.LikeCount>
                </PS.InfoContainer>
                
            </PS.SubContainer>
        </PS.PostCardContainer>
    );
}

import React from 'react';
import * as BS from './Styled';
import { useRouter } from 'next/router';
import MedalIcon from '../common/images/ic_medal.png';
import LikeIcon from '../common/images/ic_heart.png';
import DefaultImg from '../common/images/default.png';
import { Item } from './PostList';
import formatDate from '../common/function/formatDate';
interface ItemCardProps {
    item:Item;
}


const BestPostCard:React.FC<ItemCardProps> = ({ item }) => {
    const router = useRouter();
    const handleCardClick = () => {
        router.push(`/board/${item.id}`);
    };
    return (
        <BS.BestCardContainer onClick={handleCardClick}>

            <BS.BestBadgeContainer>
                <BS.MedalIcon src={MedalIcon} alt="메달아이콘" />
                <BS.BestText>Best</BS.BestText>
            </BS.BestBadgeContainer>
            <BS.BestPostContentContainer>
                <BS.BestPostContentText>{item.title}</BS.BestPostContentText>
                <BS.BestPostImg 
                    src={item.image ? item.image : DefaultImg} 
                    width={72} 
                    height={72} 
                    alt="게시물 이미지" >
                </BS.BestPostImg>
            </BS.BestPostContentContainer>
            <BS.SubContainer>
                <BS.InfoContainer>
                    <BS.Writer>{item.writer.nickname}</BS.Writer>
                    <BS.LikeIcon src={LikeIcon} alt="좋아요 아이콘"></BS.LikeIcon>
                    <BS.LikeCount>{item.likeCount}</BS.LikeCount>
                </BS.InfoContainer>
                <BS.PostDate>{formatDate(item.createdAt)}</BS.PostDate>
            </BS.SubContainer>
        </BS.BestCardContainer>
    );
}
export default BestPostCard;
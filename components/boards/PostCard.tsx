import React from 'react';
import * as PS from './Styled';
import DefaultImg from '../common/images/default.png';
import LikeIcon from '../common/images/ic_heart.png';
import ProfileImg from '../common/images/profile.png';
import { Item } from './PostList';

interface ItemCardProps {
    item: Item; 
}

const PostCard: React.FC<ItemCardProps> = ({ item }) => {
    return (
        <PS.PostCardContainer>
            <PS.PostContentContainer>
                <PS.BestPostContentText>{item.title}</PS.BestPostContentText>
                <PS.BestPostImg 
                    src={item.image ? item.image : DefaultImg} 
                    width={72} 
                    height={72} 
                    alt="게시물 이미지" 
                />
            </PS.PostContentContainer>
            <PS.SubContainer>
                <PS.InfoContainer>
                    <PS.ProfileImg 
                        src={ProfileImg} 

                        alt="프로필 이미지" 
                    />
                    <PS.Writer>{item.writer.nickname}</PS.Writer>
                    <PS.PostDate>{item.createdAt}</PS.PostDate>
                </PS.InfoContainer>
                <PS.InfoContainer>
                    <PS.LikeIcon 
                        src={LikeIcon} 
                        alt="좋아요 아이콘" 
                    />
                    <PS.LikeCount>{item.likeCount}</PS.LikeCount>
                </PS.InfoContainer>
            </PS.SubContainer>
        </PS.PostCardContainer>
    );
}

export default PostCard;
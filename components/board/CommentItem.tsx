import React from 'react';
import * as CS from "./Styled";
import { Comment } from './Comment';
import elapsedTime from '../common/function/elapsedTime';
import defaultImg from '@/components/common/images/profile.png';

export interface CommentItemProps {
    item:Comment;
}

const CommentItem: React.FC<CommentItemProps> = ({ item }) => {
    return (
    <CS.CommentWrapper>
        <CS.CommentText>{item.content}</CS.CommentText>
        <CS.CommentInfoContainer>
            <CS.CommentWriterImg src={defaultImg} alt="댓글 작성자 프로필"/>
            <CS.CommentInfoWrapper>
                <CS.CommentUser>{item.writer.nickname}</CS.CommentUser>
                <CS.CommentDate>{elapsedTime(item.createdAt)}</CS.CommentDate>
            </CS.CommentInfoWrapper>
        </CS.CommentInfoContainer>
        <CS.Line />
    </CS.CommentWrapper>
    );
};

export default CommentItem;
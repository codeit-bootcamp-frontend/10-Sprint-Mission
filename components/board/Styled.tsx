import styled from "styled-components";
import Image from 'next/image';


//BoardContent
export const ContentContainer = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    gap:16px;
`;

export const Title = styled.div`
    color: #1F2937;
    font-size: 20px;
    font-weight: 700;
    line-height: 32px; 
`;
export const ContentInfoContainer = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 24px;
    align-self: stretch;
    align-items: center;
`;
export const WriterProfile = styled(Image)`
    width:16px;
    height:16px;
`;
export const WriterName = styled.div`
    color: #4B5563;
    font-size: 14px;
    font-weight: 500;
    line-height: 24px; 
`;
export const WriteDate = styled.div`
    color: #9CA3AF;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
`;
export const LikeContainer = styled.div`
    display: flex;
    height: 40px;
    padding: 4px 12px;
    align-items: flex-start;
    gap: 10px;
    border-radius: 35px;
    border: 1px solid #E5E7EB;
    background: #FFF;
    align-items: center;
`;
export const LikeIcon = styled(Image)`
    width:24px;
    height:24px;
`;
export const LikeCount = styled.div`
    color: var(--Cool-Gray-500, #6B7280);
    font-size: 16px;
    font-weight: 500;
    line-height: 26px; 
`;
export const Line = styled.hr`
    size:1px;
    width:100%;
    color:#E5E7EB;
`;

export const ArticleText = styled.div`
    width:100%;
    color: #1F2937;
    font-size: 18px;
    font-weight: 400;
    line-height: 26px;
`;

//Comment
export const CommentContainer = styled.div`
    display:flex;
    flex-direction: column;
    gap:40px;
`;

export const WriteCommentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 9px;
`;
export const CommentTitle = styled.div`
    color: #111827;
    font-size: 16px;
    font-weight: 600;
    line-height: 26px;
`;
export const CommentTextarea = styled.textarea`
    height: 96px;
    padding: 16px 24px;
    border:none;
    border-radius: 12px;
    background: var(--Cool-Gray-100, #F3F4F6);
    resize:none;
    &::placeholder {
        color: #9CA3AF;
        font-size: 16px;
        font-weight: 400;
        line-height: 26px;
    }
`;
export const CommentList = styled.div`
    display:flex;
    flex-direction:column;
    gap:24px;
`;
export const CommentWrapper = styled.div`
    display:flex;
    flex-direction:column;
    gap:24px;
`;
export const CommentText = styled.div`
    color:  #1F2937;
    font-family: Pretendard;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px; 
`;
export const CommentInfoContainer = styled.div`
    display:flex;
    gap:8px;
`;
export const CommentWriterImg = styled(Image)`
    width:32px;
    height:32px;
`;
export const CommentInfoWrapper = styled.div`
    display:flex;
    flex-direction:column;
    gap:4px;
`;
export const CommentUser = styled.div`
    color: #4B5563;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px; 
`;
export const CommentDate = styled.div`
    color:  #9CA3AF;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
`;
export const CommentSubmitButton = styled.button`
    display: flex;
    height: 42px;
    padding: 12px 23px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 8px;
    background: #3692FF;
    color:#F3F4F6;
    border:none;

    &:disabled {
        background: #9CA3AF;
    }
`;
export const CommentSubmitButtonWrapper = styled.div`
    display:flex;
    width:100%;
    justify-content:right;
`;

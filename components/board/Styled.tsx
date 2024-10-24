import styled from "styled-components";
import Image from 'next/image';
//BestPost
export const BestPostConainer = styled.div`
    width:100%;
    height:217px;
    display:flex;
    flex-direction:column;
    gap:24px;
`;

export const Title = styled.div`
    color: var(--Cool-Gray-900, #111827);
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

export const BestCardListContainer = styled.div`
    width:100%;
    display:flex;
    gap:24px;
`;

//BestPostCard
export const BestCardContainer = styled.div`
    display: flex;
    width: 384px;
    height: 169px;
    padding: 0px 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    border-radius: 8px;
    background: var(--Cool-Gray-50, #F9FAFB);
`;
export const BestBadgeContainer = styled.div`
    display: flex;
    width: 102px;
    padding: 2px 24px;
    justify-content: center;
    align-items: center;
    gap: 4px;
    border-radius: 0px 0px 16px 16px;
    background: var(--brand-blue, #3692FF);
`;
export const MedalIcon = styled(Image)`
    width:16px;
    height:16px;
`
export const BestText = styled.div`
    color: #FFF;
    font-size: 16px;
    font-weight: 600;
    line-height: 26px; /* 162.5% */
`;
export const BestPostContentContainer = styled.div`
    width:100%;
    display:flex;
    gap:8px;
`;
export const BestPostContentText = styled.div`
    color: var(--Secondary-800, #1F2937);
    font-size: 20px;
    font-weight: 600;
    line-height: 32px; 
`;
export const BestPostImg = styled(Image)`
    width: 72px;
    height: 72px;
`;

export const SubContainer = styled.div`
    width:100%;
    display:flex;
    justify-content: space-between;
`;
export const WriterLikeContainer = styled.div`
    display: inline-flex;
    align-items:center;
    gap: 8px;
`;
export const Writer = styled.div`
    color: var(--Secondary-600, #4B5563);
    font-family: Pretendard;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
`;
export const LikeIcon = styled(Image)`
    width:16px;
    height:16px;
`;

export const PostDate = styled.div`
    color: var(--Secondary-400, #9CA3AF);
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
`;

//PostList
export const PostListContainer = styled.div`
    width:100%;
    display:flex;
    gap:24px;
    flex-direction:column;
`;

export const PostListHeader = styled.div`
    display: flex;
    width: 1200px;
    justify-content: space-between;
    align-items: center;
`;
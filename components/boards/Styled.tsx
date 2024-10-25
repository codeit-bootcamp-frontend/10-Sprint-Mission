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
export const InfoContainer = styled.div`
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
export const LikeCount = styled.div`
    color: var(--Secondary-500, #6B7280);
    font-size: 14px;
    font-weight: 400;
    line-height: 24px; 
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

export const PostButton = styled.div`
    display: flex;
    height: 42px;
    padding: 12px 23px;
    justify-content: center;
    align-items: center;
    gap: 10px;

    color: #FFF;
    font-size: 16px;
    font-weight: 600;

    border-radius: 8px;
    background: var(--brand-blue, #3692FF);
`;

export const SearchContainer = styled.div`
    display: flex;
    height:42px;
    justify-content:space-between;
`;
export const SearchBox = styled.input`
    width:1054px;
    padding: 9px 16px;
    border : none; 
    border-radius: 12px;
    background: var(--Secondary-100, #F3F4F6);
`;

export const DropdownButtonContainer = styled.div`
    z-index: 999;
`;

export const DropdownButton = styled.button`
    display: flex;
    width: 130px;
    height: 42px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 12px;
    border: 1px solid var(--Cool-Gray-200, #E5E7EB);
    background: #FFF;
    color: var(--Secondary-800, #1F2937);
    font-size: 16px;
    font-weight: 400;
    line-height: 26px; 
`;

export const DropdownMenu = styled.ul<{ isOpen: boolean }>`
    z-index: 10;
    list-style: none;
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};  /* 'show'를 'isOpen'으로 변경 */
    border-radius: 12px;
    border: 1px solid var(--Cool-Gray-200, #E5E7EB);
    background: #FFF;
    padding: 10px;
    margin-top: 5px;
`;

export const DropdownOption = styled.li`
    color: var(--Secondary-800, #1F2937);
    font-size: 16px;
    font-weight: 400;
    line-height: 26px; 
    padding: 10px 20px;
    cursor: pointer;

    &:hover {
        background-color: var(--Cool-Gray-100, #F3F4F6);
    }
`;

export const DropdownArrow = styled.span`
    width:24px;
`;

//PostCard
export const PostCardContainer = styled(BestCardContainer)`
    width: 100%;
    justify-content:center;
`;
export const PostContentContainer = styled(BestPostContentContainer)`
    justify-content: space-between;
`;

export const ProfileImg = styled(Image)`
    width:24px;
    height:24px;
`;

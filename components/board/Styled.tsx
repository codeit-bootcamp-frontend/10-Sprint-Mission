import styled from "styled-components";
import Image from 'next/image';

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
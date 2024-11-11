import styled from "styled-components";
import Image from 'next/image';

export const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MainContainer = styled.div`
  max-width: 1200px;
  margin-top: 138px;
`;

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 138px;
  @media (max-width: 1199px){
    max-width:696px;
  }
`;

export const Banner = styled.section`
  display: flex;
  width: 100%;
  height: 540px;
  background: #cfe5ff;
  align-items: flex-end;
  justify-content: center;
  flex-shrink: 0;

  @media (max-width: 1199px) {
    height: 771px;
  }
`;

export const BannerWrap = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 7px;

  @media (max-width: 1199px) {
    flex-direction: column;
    gap: 100px;
    width: 744px;
    height: 100%;
  }
`;

export const BannerImg = styled(Image)`
  width: 746px;
  height: 340px;

  @media (max-width: 1199px) {
    width: 100%;
    height: 340px;
  }
`;

export const BannerTextBox = styled.div`
  height: 100%;
  display: flex;
  padding-bottom: 60px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 32px;

  @media (max-width: 1199px) {
    align-items: center;
    text-align: center;
    padding-bottom: 40px;
  }
`;

export const BannerText = styled.h1`
  color: #374151;
  margin: 0;
  font-size: 40px;
  font-weight: 700;
  line-height: 140%;

  @media (max-width: 767px) {
    font-size: 32px;
  }
`;

export const ItemsButton = styled.a`
  display: flex;
  height: 56px;
  padding: 16px 124px;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  background: #3692ff;
  color: #f9fafb;
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;

  @media (max-width: 767px) {
    padding: 12px 71px;
    font-size: 18px;
  }
`;

export const Section = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SectionWrap = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 64px;

  @media (max-width: 1199px) {
    max-width: 696px;
    flex-direction: column;
    gap: 24px;
  }
`;

export const SectionTextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 1199px) {
    align-items: center;
    margin: 0;
    text-align: center;
  }
`;

export const SectionText = styled.h3`
  color: #374151;
  font-size: 40px;
  font-weight: 700;
  line-height: 140%;

  @media (max-width: 767px) {
    font-size: 24px;
  }
`;

export const SectionTextDetail = styled.p`
  color: #374151;
  font-size: 24px;
  font-weight: 500;
  line-height: 32px;

  @media (max-width: 1199px) {
    font-size: 19px;
    line-height: 26px;
  }

  @media (max-width: 767px) {
    font-size: 16px;
  }
`;

export const Tag = styled.p`
  color: #3692ff;
  font-size: 18px;
  font-weight: 700;
  line-height: 26px;

  @media (max-width: 767px) {
    font-size: 16px;
  }
`;
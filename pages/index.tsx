import * as MS from "@/components/_styled/mainStyled";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Image from 'next/image';
import BannerImg from '@/components/common/images/Img_home_top.png'
import FirstImg from '@/components/common/images/Img_home_01.png';
import SecondImg from '@/components/common/images/Img_home_02.png';
import ThirdImg from '@/components/common/images/Img_home_03.png';
export default function Home() {
  return (
    <MS.MainWrapper>
      <Header />
      <MS.Banner>
          <MS.BannerWrap>
            <MS.BannerTextBox>
              <MS.BannerText>일상의 모든 물건을<br />거래해 보세요</MS.BannerText>
              <MS.ItemsButton href="/items">구경하러 가기</MS.ItemsButton>
            </MS.BannerTextBox>
            <MS.BannerImg src={BannerImg} alt="베너이미지" ></MS.BannerImg>
          </MS.BannerWrap>
      </MS.Banner>
      <MS.MainContainer>
        <MS.SectionContainer> 
        <MS.Section>
          <MS.SectionWrap>
            <Image src={ FirstImg } alt="Register" width="588" />
            <MS.SectionTextBox>
              <MS.Tag>Hot Item</MS.Tag>
              <MS.SectionText>인기 상품을<br />확인해 보세요</MS.SectionText>
              <MS.SectionTextDetail>가장 HOT한 중고거래 물품을<br />판다 마켓에서 확인해 보세요</MS.SectionTextDetail>
            </MS.SectionTextBox>
          </MS.SectionWrap>
        </MS.Section>

        <MS.Section>
          <MS.SectionWrap>
            <MS.SectionTextBox>
              <MS.Tag>Search</MS.Tag>
              <MS.SectionText>구매를 원하는<br />상품을 검색하세요</MS.SectionText>
              <MS.SectionTextDetail>구매하고 싶은 물품은 검색해서<br />쉽게 찾아보세요</MS.SectionTextDetail>
            </MS.SectionTextBox>
            <Image src={ SecondImg } alt="Search" width="588" />
          </MS.SectionWrap>
        </MS.Section>

        <MS.Section>
          <MS.SectionWrap>
            <Image src={ ThirdImg } alt="Register" width="588" />
            <MS.SectionTextBox>
              <MS.Tag>Register</MS.Tag>
              <MS.SectionText>판매를 원하는<br />상품을 등록하세요</MS.SectionText>
              <MS.SectionTextDetail>어떤 물건이든 판매하고 싶은 상품을<br />쉽게 등록하세요</MS.SectionTextDetail>
            </MS.SectionTextBox>
          </MS.SectionWrap>
        </MS.Section>
        </MS.SectionContainer>
        
      </MS.MainContainer>
      <Footer />
    </MS.MainWrapper>
  );
}

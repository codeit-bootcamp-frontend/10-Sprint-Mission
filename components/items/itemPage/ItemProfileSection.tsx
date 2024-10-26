import styled from "styled-components";
import { LineDivider } from "@/styles/CommonStyles";
import TagDisplay from "./TagDisplay";
import LikeButton from "./LikeButton";
import SeeMoreIcon from "@/public/images/icons/ic_kebab.svg";
import { Product } from "@/types/productTypes";
import Image from "next/image";

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    flex-direction: row;
  }

  @media ${({ theme }) => theme.mediaQuery.desktop} {
    gap: 24px;
  }
`;

const ItemImageContainer = styled.div`
  width: 100%;
  flex: 1;
  aspect-ratio: 1/1;
  border-radius: 12px;
  overflow: hidden;

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    width: 40%;
    max-width: 486px;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const ItemDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  align-items: flex-start;
`;

const MainDetails = styled.div`
  width: 100%;
  position: relative;
`;

const SeeMoreButton = styled.button`
  position: absolute;
  right: 0;
`;

const ItemTitle = styled.h1`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    font-size: 20px;
    margin-bottom: 12px;
  }

  @media ${({ theme }) => theme.mediaQuery.desktop} {
    font-size: 24px;
    margin-bottom: 16px;
  }
`;

const ItemPrice = styled.h2`
  font-size: 24px;
  font-weight: 600;

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    font-size: 32px;
  }

  @media ${({ theme }) => theme.mediaQuery.desktop} {
    font-size: 40px;
  }
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 140%;
`;

const SectionLabel = styled.h3`
  color: var(--gray-600);
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 8px;
`;

const TagDisplaySection = styled.div`
  margin: 24px 0;
`;

interface ItemProfileSectionProps {
  product: Product;
}

const ItemProfileSection: React.FC<ItemProfileSectionProps> = ({ product }) => {
  return (
    <SectionContainer>
      <ItemImageContainer>
        <ImageWrapper>
          <Image
            fill
            src={product.images[0]}
            alt={`${product.name} 상품 대표 사진`}
            style={{ objectFit: "cover" }}
          />
        </ImageWrapper>
      </ItemImageContainer>

      <ItemDetailsContainer>
        <MainDetails>
          <SeeMoreButton>
            <SeeMoreIcon />
          </SeeMoreButton>

          <div>
            <ItemTitle>{product.name}</ItemTitle>
            <ItemPrice>{product.price.toLocaleString()}원</ItemPrice>
          </div>

          <LineDivider />

          <div>
            <SectionLabel>상품 소개</SectionLabel>
            <Description>{product.description}</Description>
          </div>

          <TagDisplaySection>
            <SectionLabel>상품 태그</SectionLabel>
            <TagDisplay tags={product.tags} />
          </TagDisplaySection>
        </MainDetails>

        <LikeButton
          productId={product.id}
          isFavorite={product.isFavorite}
          favoriteCount={product.favoriteCount}
        />
      </ItemDetailsContainer>
    </SectionContainer>
  );
};

export default ItemProfileSection;

import { LineDivider } from "@/styles/CommonStyles";
import TagDisplay from "./TagDisplay";
import LikeButton from "./LikeButton";
import SeeMoreIcon from "@/public/images/icons/ic_kebab.svg";
import { Product } from "@/types/productTypes";
import Image from "next/image";

import {
  SectionContainer,
  ItemImageContainer,
  ImageWrapper,
  ItemDetailsContainer,
  MainDetails,
  SeeMoreButton,
  ItemTitle,
  ItemPrice,
  Description,
  SectionLabel,
  TagDisplaySection,
} from  "./ItemProfileSection.styles";

type ItemProfileSectionProps = {
  product: Product;
}

const ItemProfileSection = ({ product }: ItemProfileSectionProps) => {
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

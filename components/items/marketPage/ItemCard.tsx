import { Product } from "@/types/productTypes";
import LikeCountDisplay from "@/components/ui/LikeCountDisplay";

import {
  ItemCardContainer,
  ItemCardThumbnail,
  ItemSummary,
  ItemName,
  ItemPrice,
} from "./ItemCard.styles";

type ItemCardProps = {
  item: Product;
}

const ItemCard = ({ item }: ItemCardProps) => {
  return (
    <ItemCardContainer href={`/items/${item.id}`}>
      <ItemCardThumbnail
        src={item.images[0]}
        alt={`${item.name} 상품 썸네일`}
      />
      <ItemSummary>
        <ItemName>{item.name}</ItemName>
        <ItemPrice>{item.price.toLocaleString()}원</ItemPrice>
        <LikeCountDisplay count={item.favoriteCount} fontSize={12} />
      </ItemSummary>
    </ItemCardContainer>
  );
};

export default ItemCard;

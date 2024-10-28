import { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import { getProducts } from "@/api/itemApi";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import { Product, ProductListResponse } from "@/types/productTypes";
import { MarketSectionTitle } from "@/styles/MarketStyles";
import useViewport from "@/hooks/useViewport";

import {
  BestItemsContainer,
  BestItemsCardSection,
} from "./BestItemsSection.styles";

/**
 * Determines the appropriate page size for displaying product items based on the viewport width.
 *
 * @param width - The current viewport width.
 * @returns The recommended page size (1:Mobile, 2:Tablet, or 4:Desktop) based on the viewport width.
 */
const getPageSize = (width: number) => {
  if (width < 768) {
    return 1;
  } else if (width < 1280) {
    return 2;
  } else {
    return 4;
  }
};

const BestItemsSection: React.FC = () => {
  const [itemList, setItemList] = useState<Product[]>([]);
  const [pageSize, setPageSize] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const viewportWidth = useViewport();

  useEffect(() => {
    if (viewportWidth === 0) return;

    const newPageSize = getPageSize(viewportWidth);
    if (newPageSize !== pageSize) {
      setPageSize(newPageSize);
    }
  }, [viewportWidth, pageSize]);

  useEffect(() => {
    if (pageSize === null) return;

    const fetchSortedData = async () => {
      setIsLoading(true);
      try {
        const data: ProductListResponse = await getProducts({
          orderBy: "favorite",
          pageSize,
        });
        setItemList(data.list);
      } catch (error) {
        console.error("오류: ", (error as Error).message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSortedData();
  }, [pageSize]);

  return (
    <>
      <LoadingSpinner isLoading={isLoading} />

      <BestItemsContainer>
        <MarketSectionTitle>베스트 상품</MarketSectionTitle>

        <BestItemsCardSection>
          {itemList?.map((item) => (
            <ItemCard item={item} key={`best-item-${item.id}`} />
          ))}
        </BestItemsCardSection>
      </BestItemsContainer>
    </>
  );
};

export default BestItemsSection;

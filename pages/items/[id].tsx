import { useEffect, useState } from "react";
import { Container, LineDivider } from "@/styles/CommonStyles";
import { getProductDetail } from "@/api/itemApi";
import ItemProfileSection from "@/components/items/itemPage/ItemProfileSection";
import ItemCommentSection from "@/components/items/itemPage/ItemCommentSection";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import { Product } from "@/types/productTypes";
import { useRouter } from "next/router";
import GoBackToIndexPageLink from "@/components/thread/GoBackToIndexPageLink";

const ItemPage: React.FC = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();
  const { id } = router.query;

  const productId = Number(id);

  useEffect(() => {
    if (!router.isReady) return;

    async function fetchProduct() {
      if (!productId) {
        setError("상품 아이디가 제공되지 않았어요.");
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      try {
        const data: Product = await getProductDetail(productId);
        if (!data) {
          throw new Error("해당 상품의 데이터를 찾을 수 없습니다.");
        }
        setProduct(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("알 수 없는 오류가 발생했습니다.");
        }
      } finally {
        setIsLoading(false);
      }
    }

    fetchProduct();
  }, [productId, router.isReady]);

  if (error) {
    alert(`오류: ${error}`);
  }

  if (!id || !product) return null;

  return (
    <>
      <LoadingSpinner isLoading={isLoading} />

      <Container>
        <ItemProfileSection product={product} />

        <LineDivider />

        <ItemCommentSection productId={productId} />

        <GoBackToIndexPageLink pathname="/items" />
      </Container>
    </>
  );
};

export default ItemPage;

import { useParams, Link } from "react-router-dom";
import ProductDetail from "features/Product/components/ProductDetail";
import Inquiry from "features/Product/components/Inquiry";
import Comments from "features/Product/components/Comments";
import Button from "shared/components/Button";
import styles from "./ProductPage.module.css";
import backIcon from "assets/images/ic_back.svg";

const ProductPage = () => {
  const { itemId } = useParams();

  return (
    <div className={styles.wrapper}>
      <ProductDetail itemId={itemId} />
      <Inquiry />
      <Comments itemId={itemId} />
      <Link to="/items" className={styles.link}>
        <Button type="button" className={styles.button}>
          <div>목록으로 되돌아가기</div>
          <img src={backIcon} alt="되돌아가기 아이콘" />
        </Button>
      </Link>
    </div>
  );
};

export default ProductPage;

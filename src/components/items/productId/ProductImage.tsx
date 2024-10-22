import styles from './ProductImage.module.css';

interface ProductImageProps {
  productImage?: string;
}

const ProductImage: React.FC<ProductImageProps> = ({
  productImage = '',
}) => {
  return (
    <div>
      <img className={styles['container']} src={productImage} alt="상품 이미지" />
    </div>
  );
};

export default ProductImage;

// ProductList.js
import favoriteIcon from '../assets/Icon.png';

const ProductList = ({ sortedProducts }) => {
  return (
    <div className="entirePicture">
      {sortedProducts.length > 0 ? (
        sortedProducts.map((product) => (
          <div key={product.id}>
            {product.images.length > 0 ? (
              <img src={product.images[0]} alt={product.name} width={221} height={221} />
            ) : (
              <p>No image available</p>
            )}
            <p className="itemTitle">{product.name} 팝니다</p>
            <p className="price">{product.price} 원</p>
            <div className="favorite_icon">
              <img src={favoriteIcon} alt="좋아요" />
              <p>{product.favoriteCount}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
};

export default ProductList;

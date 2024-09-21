import { useParams } from 'react-router-dom';
import { getProduct } from '../api';
import { useEffect, useState } from 'react';

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProduct(id)
      .then((productData) => setProduct(productData))
      .catch(console.error);
  }, [id]);

  if (!product) {
    return <h2>Loading...</h2>;
  }
  
  return <h2>{product.name}</h2>;
}

export default ProductPage;

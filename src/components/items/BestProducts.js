import { API_USEDS_GOODS_PRODUCTS } from "config/api";
import { useFetchData } from "hooks/useFetchData";

const BestProducts = () => {
  const { data, loading, error } = useFetchData(`${API_USEDS_GOODS_PRODUCTS}?pageSize=4&orderBy=favorite`);

  return (
    <div>
      <h3>베스트 상품</h3>
      {loading && <p>로딩 중...</p>}
      {error && <p>에러 발생</p>}
      {data && data.map((product) => (
        <div key={product.id}>
          <img src={product.images} alt={product.name} />
          <p>{product.name}</p>
          <p>{product.price}</p>
          <p>{product.favoriteCount}</p>
        </div>
      ))}
    </div>
  )
}

export default BestProducts
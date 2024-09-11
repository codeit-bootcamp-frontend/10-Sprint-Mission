function Card({ item }) {
  const { favoriteCount, images, price, name } = item;
  return (
    <>
      <div>{favoriteCount}</div>
      <img src={images[0]} />
      <div>{price}</div>
      <div>{name}</div>
    </>
  );
}

export default Card;

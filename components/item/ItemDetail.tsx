import Image from "next/image";
import HeartButton from "../ui/HeartButton";
import AuthorInfo from "../ui/AuthorInfo";
import { formatDate } from "@/lib/formatDate";
import { ProductProps } from "@/types/product";
import Tags from "../ui/Tags";
import styles from "./ItemDetail.module.css";

const ItemDetail = ({
  images,
  name,
  price,
  description,
  tags,
  ownerId,
  createdAt,
  favoriteCount,
}: ProductProps) => {
  return (
    <section className={styles.productDetail}>
      <div className={styles.imageWrapper}>
        <Image
          src={images?.[0]}
          alt={name}
          className={styles.productImg}
          fill
        />
      </div>
      <div className={styles.productContainer}>
        <div className={styles.productInfo}>
          <div className={styles.nameContainer}>
            <h3 className={styles.name}>{name}</h3>
            <Image src="/ic_kebab.svg" width={24} height={24} alt="케밥" />
          </div>
          <div className={styles.price}>{price?.toLocaleString()}원</div>
          <div className={styles.subContainer}>
            <h4 className={styles.subTitle}>상품 소개</h4>
            <p className={styles.description}>{description}</p>
          </div>
          <div className={styles.subContainer}>
            <h4 className={styles.subTitle}>상품 태그</h4>
            <Tags tags={tags} />
          </div>
        </div>
        <div className={styles.userInfo}>
          <AuthorInfo
            className={styles.authorInfo}
            nickname={ownerId}
            date={formatDate(createdAt)}
          />
          <div className={styles.heartButtonContainer}>
            <HeartButton favoriteCount={favoriteCount} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItemDetail;

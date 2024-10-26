import Image from "next/image";
import Container from "../layout/Container";
import styles from "./ArticleImage.module.css";

interface ImageProps {
  src: string;
  alt: string;
}

const ArticleImage = ({ src, alt }: ImageProps) => {
  return (
    <Container className={styles.container}>
      <div className={styles.wrapper}>
        <Image fill src={src} alt={alt} className={styles.image} />
      </div>
    </Container>
  );
};

export default ArticleImage;

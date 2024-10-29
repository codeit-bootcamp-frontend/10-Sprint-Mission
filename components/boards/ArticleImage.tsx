import { useState } from "react";
import Image from "next/image";
import Container from "../layout/Container";
import styles from "./ArticleImage.module.css";
import defaultImg from "@/public/img_default.svg";

interface ImageProps {
  src: string | null;
  alt: string;
}

const ArticleImage = ({ src, alt }: ImageProps) => {
  const [imageSrc, setImageSrc] = useState(src ?? defaultImg);

  const handleImageError = () => {
    setImageSrc(defaultImg);
  };

  return (
    <Container className={styles.container}>
      <div className={styles.wrapper}>
        <Image
          fill
          src={imageSrc}
          alt={alt}
          className={styles.image}
          onError={handleImageError}
        />
      </div>
    </Container>
  );
};

export default ArticleImage;

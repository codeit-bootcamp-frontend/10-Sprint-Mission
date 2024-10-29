import React from "react";
import styles from "./CreateArticleButton.module.css";
import Link from "next/link";

const CreateArticleButton = () => {
  return (
    <Link href={"/"} className={styles.button}>
      글쓰기
    </Link>
  );
};

export default CreateArticleButton;

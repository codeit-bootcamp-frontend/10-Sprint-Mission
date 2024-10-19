import { ChangeEvent, useState } from "react";
import Textarea from "shared/components/Textarea";
import Button from "shared/components/Button";
import { INQUIRY_PLACEHOLDER } from "shared/constants/message";
import styles from "./Inquiry.module.css";

const Inquiry = () => {
  const [isDisabled, setIsDisabled] = useState(true);

  const handleTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setIsDisabled(!e.target.value);

  return (
    <section className={styles.inquiry}>
      <Textarea
        className={styles.textarea}
        name="inquiry"
        label="문의하기"
        placeholder={INQUIRY_PLACEHOLDER}
        onChange={handleTextareaChange}
      />
      <Button className={styles.button} type="submit" disabled={isDisabled}>
        등록
      </Button>
    </section>
  );
};

export default Inquiry;

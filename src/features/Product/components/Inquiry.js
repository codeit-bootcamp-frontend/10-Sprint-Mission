import { useState } from "react";
import Textarea from "components/Textarea";
import { INQUIRY_PLACEHOLDER } from "constants/message";
import styles from "./Inquiry.module.css";
import Button from "components/Button";

const Inquiry = () => {
  const [isDisabled, setIsDisabled] = useState(true);

  const handleTextareaChange = (event) => {
    if (event.target.value !== "") {
      setIsDisabled(false);
      return;
    }

    setIsDisabled(true);
  };

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

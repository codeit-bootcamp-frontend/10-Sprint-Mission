import { useState, useEffect, useRef, ChangeEvent, MouseEvent } from "react";
import styles from "./FileInput.module.css";
import plusImg from "assets/images/ic_plus.svg";
import XButton from "shared/components/XButton";

interface Props {
  label: string;
  name: string;
  value: File | null;
  onChange: (name: string, value: File | null) => void;
}

const FileInput = ({ label, name, value, onChange }: Props) => {
  const [preview, setPreview] = useState("");
  const [isExist, setIsExist] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const nextValue = files[0];
      const allowedTypes = ["image/png", "image/jpeg"];
      if (!allowedTypes.includes(nextValue.type)) return;
      onChange(name, nextValue);
    }
  };

  const handleUploadClick = (e: MouseEvent<HTMLLabelElement>) => {
    if (value) {
      e.preventDefault();
      setIsExist(true);
    }
  };

  const handleClearClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const inputNode = inputRef.current;
    if (!inputNode) return;

    inputNode.value = "";
    onChange(name, null);
    setIsExist(false);
  };

  useEffect(() => {
    if (!value) return;

    const nextPreview = URL.createObjectURL(value);
    setPreview(nextPreview);
  }, [value]);

  return (
    <div className={styles.container}>
      <h3 className={styles.label}>{label}</h3>
      <div className={styles.imageUploadContainer}>
        <label
          className={`${styles.imageUpload} ${styles.imageContainer}`}
          htmlFor={name}
          onClick={handleUploadClick}
        >
          <img src={plusImg} alt="이미지 등록" />
          <p>이미지 등록</p>
        </label>
        <input
          className={styles.input}
          type="file"
          accept="image/png, image/jpeg"
          name={name}
          id={name}
          onChange={handleChange}
          ref={inputRef}
        />
        {value && (
          <div className={`${styles.imagePreview} ${styles.imageContainer}`}>
            <img src={preview} alt="미리 보기" />
            <XButton className={styles.xButton} onClick={handleClearClick} />
          </div>
        )}
      </div>
      {isExist && (
        <span className={styles.errorMessage}>
          *이미지 등록은 최대 1개까지 가능합니다.
        </span>
      )}
    </div>
  );
};

export default FileInput;

import './AddFileInputBar.css';
import plusIcon from '../../assets/ic_plus.svg';
import deleteIcon from '../../assets/ic_X.svg';
import { useEffect, useRef, useState } from 'react';
import { IMAGE_UPLOAD_LIMIT } from '../../constants/errorMessage';

interface AddFileInputBarProps {
  name: string;
  file: File | null;
  onChange: (name: string, file: File | null) => void;
}

function AddFileInputBar({ name, file, onChange }: AddFileInputBarProps) {
  const [preview, setPreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nextValue = e.target.files?.[0] || null;
    onChange(name, nextValue);
  };

  const handleOnClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (preview) {
      setError(IMAGE_UPLOAD_LIMIT);
      e.preventDefault();
    }
  };

  const handleClearClick = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
      setPreview(null);
      setError(null);
      onChange(name, null);
    }
  };

  useEffect(() => {
    if (!file) return;
    const nextPreview = URL.createObjectURL(file);
    setPreview(nextPreview);

    return () => {
      URL.revokeObjectURL(nextPreview);
    };
  }, [file]);

  return (
    <section className="AddFileInputBar">
      <div className="image-container">
        <div onClick={handleOnClick}>
          <label htmlFor="file">
            <div className="btn-upload">
              <img src={plusIcon} alt="플러스 아이콘" />
              <span className="btn-upload-description">이미지 등록</span>
            </div>
          </label>
        </div>
        <input
          type="file"
          name={name}
          id="file"
          accept="image/png, image/jpeg"
          ref={inputRef}
          onChange={handleChange}
        />
        {preview && (
          <div className="preview-wrapper">
            <img src={preview} alt="이미지 미리보기" className="preview" />
            <button className="btn-file-clear" onClick={handleClearClick}>
              <img src={deleteIcon} alt="삭제 아이콘" />
            </button>
          </div>
        )}
      </div>
      {error && <span className="file-upload-error">{error}</span>}
    </section>
  );
}

export default AddFileInputBar;

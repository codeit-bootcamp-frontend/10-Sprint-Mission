import { KeyboardEvent } from 'react';
import styles from './AddProductTag.module.css';
import commonStyles from './AddItemCommon.module.css';

interface AddProductTagProps {
  productTags?: string[];
  setProductTags?: (tags: string[]) => void;
}

const AddProductTag: React.FC<AddProductTagProps> = ({ 
  productTags = [],
  setProductTags = () => {},
}) => {
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const target = e.target as HTMLInputElement;
      const tag = target.value;
      if (tag.trim() === '') {
        return;
      }

      setProductTags([...productTags, `#${tag}`]);
      target.value = '';
    }
  }

  return (
    <div className={styles['container']}>
      <h5 className={commonStyles['common-product-title']}>태그</h5>
      <input
        type="text"
        className={styles['tag-input']}
        onKeyDown={handleKeyDown}
        placeholder="태그를 입력해주세요"
      />
    </div>
  );
};

export default AddProductTag;

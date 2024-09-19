import styles from './AddProductTag.module.css';
import commonStyles from './AddItemCommon.module.css';

const AddProductTag = ({ productTags, setProductTags }) => {

  const handleKeyDown = (e) => {
    if(e.key === 'Enter') {
      const tag = e.target.value;
      if(tag.trim() === '') {
        return;
      }

      setProductTags([...productTags, `#${tag}`]);
      e.target.value = '';
    }
  }

  return (
    <div className={styles['container']}>
      <h5 className={commonStyles['common-product-title']}>태그</h5>
      <input type="text" className={styles['tag-input']} onKeyDown={handleKeyDown} placeholder="태그를 입력해주세요" />
    </div>
  );
};

export default AddProductTag;
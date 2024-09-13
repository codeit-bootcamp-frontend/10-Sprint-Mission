import syltes from './AddProductTag.module.css';
import commonStyles from './AddItemCommon.module.css';
import { useAddItemSharedData } from './useAddItemSharedData';

const AddProductTag = () => {
  const { productTags, setProductTags } = useAddItemSharedData();

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
    <div className={commonStyles['common-container']}>
      <h5 className={commonStyles['common-product-title']}>태그</h5>
      <input type="text" className={syltes['tag-input']} onKeyDown={handleKeyDown} placeholder="태그를 입력해주세요" />
    </div>
  );
};

export default AddProductTag;
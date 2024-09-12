import syltes from './AddProductTag.module.css';
import commonStyles from './AddItemCommon.module.css';

const AddProductTag = () => {
  return (
    <div className={commonStyles['common-container']}>
      <h5 className={commonStyles['common-product-title']}>태그</h5>
      <input type="text" className={syltes['tag-input']} placeholder="태그를 입력해주세요" />
    </div>
  );
};

export default AddProductTag;
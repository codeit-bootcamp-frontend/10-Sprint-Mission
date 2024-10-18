import styles from './ProductTagList.module.css';
import {ReactComponent as DeleteIcon} from 'assets/imgs/ic_delete.svg';

interface ProductTagListProps {
  productTags?: string[];
  setProductTags?: (tags: string[]) => void;
}

const ProductTagList: React.FC<ProductTagListProps> = ({
  productTags = [],
  setProductTags = () => {},
}) => {

  const deleteTag = (tag: string) => {
    setProductTags(productTags.filter((e) => e !== tag));
  }

  return (
    <div className={styles['container']}>
      {productTags && productTags.map((tag, index) => (
        <div className={styles['tag']} key={index}>
          <span>{tag}</span>
          <DeleteIcon style={{cursor:'pointer'}} onClick={()=>deleteTag(tag)}/>
        </div>
      ))}
    </div>
  );
};

export default ProductTagList;

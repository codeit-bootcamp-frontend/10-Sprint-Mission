import { useState } from 'react';
import styles from './ProductTagList.module.css';
import {ReactComponent as DeleteIcon} from 'assets/imgs/ic_delete.svg';

const ProductTagList = ({taglist = []}) => {
  const [tags, setTags] = useState(taglist);

  const deleteTag = (tag) => {
    setTags(tags.filter((e) => e !== tag));
  }

  return (
    <div className={styles['container']}>
      {tags && tags.map((tag, index) => (
        <div className={styles['tag']} key={index}>
          <span>#{tag}</span>
          <DeleteIcon onClick={()=>deleteTag(tag)}/>
        </div>
      ))}
    </div>
  );
};
export default ProductTagList;
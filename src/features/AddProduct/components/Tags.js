import XButton from "components/XButton";
import styles from "./Tags.module.css";

const Tags = ({ tags, onRemove }) => {
  return (
    <>
      {tags.length !== 0 ? (
        <ul className={styles.tags}>
          {tags.map((tag, index) => {
            return (
              <li key={`${tag}`} data-tag={tag} className={styles.tag}>
                <span>{`#${tag}`}</span>
                <XButton className={styles.icon} onClick={onRemove} />
              </li>
            );
          })}
        </ul>
      ) : (
        ""
      )}
    </>
  );
};

export default Tags;

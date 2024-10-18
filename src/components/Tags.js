import XButton from "./XButton";
import styles from "./Tags.module.css";

const Tags = ({ tags, onRemove, className = "" }) => {
  return (
    <>
      {tags.length ? (
        <ul className={`${styles.tags} ${className}`}>
          {tags.map((tag) => {
            return (
              <li key={tag} className={styles.tag}>
                <span>#{tag}</span>
                {onRemove && (
                  <XButton
                    className={styles.icon}
                    onClick={(event) => onRemove(event, tag)}
                  />
                )}
              </li>
            );
          })}
        </ul>
      ) : null}
    </>
  );
};

export default Tags;

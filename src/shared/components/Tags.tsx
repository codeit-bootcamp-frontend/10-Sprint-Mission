import { MouseEvent } from "react";
import XButton from "./XButton";
import styles from "./Tags.module.css";

interface Props {
  className: string;
  tags: string[];
  onRemove?: (e: MouseEvent<HTMLButtonElement>, value: string) => void;
}

const Tags = ({ className = "", tags, onRemove }: Props) => {
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
                    onClick={(e: MouseEvent<HTMLButtonElement>) =>
                      onRemove(e, tag)
                    }
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

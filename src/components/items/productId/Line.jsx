import styles from './Line.module.css';

const Line = ({marginTop = 0, marginBottom = 0}) => {
  return (
    <hr style={{marginTop:marginTop, marginBottom: marginBottom}} className={styles['line']} />
  );
};
export default Line;